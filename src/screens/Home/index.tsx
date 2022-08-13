import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 13 de Agosto de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante..."
          placeholderTextColor="#ffffff"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={(handlePartipantAdd) =>
            alert("Você clicou para adicionar um participante")
          }
        >
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Jarilton Junior"/>
      <Participant name="Thalia Favaro"/>
      <Participant name="Marcos Alexandre"/>
      <Participant name="Tamiris Silva"/>

      <StatusBar style="auto" />
    </View>
  );
}
