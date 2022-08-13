import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {

  const participant = ['Jamal', 'Thalia', 'Nathalia', 'Felipe', 'Alisson', 'Marcos', 'Mayk', 'Diego', 'Bruno', 'Ana']

  function handlePartipantAdd() {
    if (participant.includes('Jamal')) {
      Alert.alert("Opss", "Esse nome já existe, tente novamente com outro nome!!")
    }
  }

  function handlePartipantRemove(name: string) {
    Alert.alert("Remover",`Você deseja realmente remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Nome deletado com sucesso!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
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

      <FlatList
        data={participant}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handlePartipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participantes...
          </Text>
        )}
      />

    </View>
  );
}
