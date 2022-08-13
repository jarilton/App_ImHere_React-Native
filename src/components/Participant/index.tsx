import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

type Props = {
    name: string
}

export function Participant({ name }:Props ){
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                { name }
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