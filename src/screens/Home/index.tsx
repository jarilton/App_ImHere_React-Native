import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>APP ImHere React Native </Text>
      <StatusBar style="auto" />
    </View>
  );
}