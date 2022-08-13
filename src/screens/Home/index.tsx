import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 13 de Agosto de 2022</Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome do participante..."
        placeholderTextColor="#ffffff"
      />
      
      <StatusBar style="auto" />
    </View>
  );
}