import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {

    const [data, setData] = useState([
        { key: '1', title: 'Churras Aniversário', peoples: 8, value: 200 },
        { key: '2', title: 'Churras Fim de Semana', peoples: 3, value: 100 }
    ])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name='calculator' style={styles.logoIcon} />
                <Text style={styles.title}>Churras<Text style={{ fontWeight: 'bold' }}>Calc</Text></Text>
            </View>
            <ScrollView style={styles.content}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Meus churras</Text>
                {
                    data.map(item => (
                        <TouchableOpacity key={item.key} style={styles.itemContainer} >
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <View style={styles.itemIconsContainer}>
                                <View style={styles.itemIconsContent}>
                                    <AntDesign name="user" size={24} color="black" />
                                    <Text style={styles.itemText} >{item.peoples}</Text>
                                </View>
                                <View style={styles.itemIconsContent}>
                                    <AntDesign name="wallet" size={24} color="black" />
                                    <Text style={styles.itemText}>R${item.value}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <TouchableOpacity style={styles.addButton}>
                <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 25 }}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
        flexDirection: 'row'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 32,
        marginLeft: 5,
    },
    logoIcon: {
        fontSize: 30,
        color: '#D62828',
        marginBottom: -5
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
        marginLeft: 10
    }
})