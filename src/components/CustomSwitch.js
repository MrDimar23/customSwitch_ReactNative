import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React, {useState, useEffect} from "react";
import  Animated, {
    interpolateColor,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    useDerivedValue,
    withTiming,
}  from "react-native-reanimated";

const CustomSwitch = ({activeColor, inActiveColor}) => {
    const switchTranslate = useSharedValue(0);

    const [active, setActive] = useState(false);

    const progress = useDerivedValue(() => {
        return withTiming(active ? 22 : 0);
    });

    useEffect (() => {
        if (active) {
            switchTranslate.value = 42
        } else {
            switchTranslate.value = 4
        }
    }, [active, switchTranslate]);

    const backGroundColorStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor (
            progress.value,
            [0, 42],
            [inActiveColor, activeColor]
        );
        return {
            backgroundColor,
        };
    });

    const customSpringStyles = useAnimatedStyle( () => {
        return {
            transform: [
                {
                    translateX: withSpring(switchTranslate.value, {
                        mass: 1,
                        damping: 15,
                        stiffness: 120,
                        overshootClamping: false,
                        restSpeedThreshold: 0.1,
                        restDisplacementThreshold: 0.1,
                    }),
                }
            ]
        }
    })

    return (
        <TouchableWithoutFeedback onPress={()=>{
            setActive(!active);
        }} >
            <Animated.View style={[styles.container, backGroundColorStyle]}>
                <Animated.View style={[styles.circle, customSpringStyles]} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

export default CustomSwitch;

const styles = StyleSheet.create ({
    container: {
        width: 70, 
        height: 38,
        backgroundColor: '#556B2F',
        borderRadius:38,
        justifyContent: 'center'
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 38,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        elevation: 4,


    }
})