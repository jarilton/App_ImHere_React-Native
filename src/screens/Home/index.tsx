import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handlePartipantAdd() {
    if (participants.includes(participantName)) {
      Alert.alert("Opss", "Esse nome já existe, tente novamente com outro nome!!")
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('')
  }

  function handlePartipantRemove(name: string) {
    Alert.alert("Remover", `Você deseja realmente remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevstate => prevstate.filter(participants => participants !== name))
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handlePartipantAdd}
        >
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
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
