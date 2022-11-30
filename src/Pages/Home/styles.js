import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    //PAGE STYLE
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        height: 120,
        backgroundColor: '#F77F00',
        borderBottomWidth: 6,
        borderBottomColor: '#DDDDDD',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 32,
        marginLeft: 5,
    },
    logoIcon: {
        fontSize: 30,
        color: '#D62828',
        marginBottom: -5,
        marginLeft: -10
    },
    content: {
        padding: 20
    },
    addButton: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderRadius: 20,
        backgroundColor: '#F77F00',
        margin: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //LIST ITEMS STYLES
    itemContainer: {
        backgroundColor: '#DDD',
        borderLeftWidth: 8,
        borderLeftColor: '#003049',
        borderRadius: 4,
        height: 100,
        padding: 20,
        flexDirection: 'column',
        marginBottom: 10
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    itemIconsContainer: {
        height: 35,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    itemIconsContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        marginRight: 30,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '500'
    }
})