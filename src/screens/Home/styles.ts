import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        padding: 20
    },
    eventName: {
        fontSize: 40,
        marginTop: 40,
        color: '#ffffff',
        textAlign: 'center',
    },
    eventDate: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#696969',
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
    },
    listEmptyText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
