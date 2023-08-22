import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomSwitch from './src/components/CustomSwitch';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi </Text>
      <StatusBar style="auto" />
      <CustomSwitch inActiveColor={'#00008B'}  activeColor={'#B8860B'}/>
      <CustomSwitch inActiveColor={'#00CED1'}  activeColor={'#66CDAA'}/>
      <CustomSwitch inActiveColor={'#FF1493'}  activeColor={'#FF6347'}/>
      <CustomSwitch inActiveColor={'#BA55D3'}  activeColor={'#FFFF00'}/>
      <CustomSwitch inActiveColor={'#00FA9A'}  activeColor={'#00BFFF'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
