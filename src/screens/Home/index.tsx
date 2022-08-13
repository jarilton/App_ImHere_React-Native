import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {

  const participant = ['Jamal', 'Thalia', 'Nathalia', 'Felipe', 'Alisson', 'Marcos', 'Mayk', 'Diego', 'Bruno', 'Ana']

  function handlePartipantAdd() {
    alert("Você clicou para adicionar um participante!")
  }

  function handlePartipantRemove(name: string) {
    alert(`Você clicou para remover o participante ${name}`)
  }
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
          onPress={handlePartipantAdd}
        >
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participant.map(participant => (
            <Participant
              name={participant}
              onRemove={() => handlePartipantRemove(participant)} />
          ))
        }
      </ScrollView>




    </View>
  );
}
