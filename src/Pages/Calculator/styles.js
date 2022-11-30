import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        marginTop: 15,
        marginBottom: 20,
        color: '#222222'
    },
    counterInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    counterInputLabel: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 18,
        color: '#555555',
        marginBottom: 10
    },
    inputContainer: {
        marginBottom: 20
    },
    textInput: {
        marginBottom: 10
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxText: {
        fontSize: 16
    },
    finishButton: {
        marginBottom: 100,
        marginTop: 50,
        borderRadius: 4,
        alignSelf: 'center'
    },
    finishButtonLabel: {
        color: '#ffffff',
        fontSize: 18
    },
    finishButtonContent: {
        backgroundColor: '#F77F00',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 160
    }
});