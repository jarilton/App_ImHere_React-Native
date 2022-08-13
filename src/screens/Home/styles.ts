import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    eventName: {
        fontSize: 24,
    },
    eventDate: {
        fontSize: 18,
    },
    input: {
        height: 56,
        width: 350, 
        backgroundColor: '#1f1e25',
        color: '#ffffff', 
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        margin: 20,
    },
    button: {
        width: 150,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    }
});
