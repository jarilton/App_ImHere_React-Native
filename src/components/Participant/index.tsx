import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

export function Participant() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                Nome do participante
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={(handlePartipantAdd) =>
                    alert("Você clicou para remover um participante")
                }
            >
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
        </View>
    )
}