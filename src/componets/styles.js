import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    card: {
        width: '75%',
        minHeight: 520,
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',

        paddingTop: 2,
        margin: 5,
        padding: 3,

        backgroundColor: '#222',
        color: '#fff',
    },

    imgMovie: {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: 400,
        margin: 'auto',

        borderWidth: 2,
        borderRadius: 8,
    },

    titles: {
        color: '#FF5733',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
    },

    textos: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
    },

    button: {
        borderRadius: 20,
        padding: 10,

        margin: 10,
    },
    
    buttonOpen: {
        width: 100,
        alignItems: 'center',
        backgroundColor: "#FF5733",
    },
});