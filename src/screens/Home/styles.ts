import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20
    },
    eventName: {
        fontSize: 24,
        marginTop: 40,
    },
    eventDate: {
        fontSize: 18,
    },
    input: {
        flex: 1,
        height: 56, 
        backgroundColor: '#1f1e25',
        color: '#ffffff', 
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    button: {
        width: 56,
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
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 40,
    }
});
