import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Button, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name='calculator' style={styles.logoIcon} />
                <Text style={styles.title}>Churras<Text style={{fontWeight: 'bold'}}>Calc</Text></Text>
            </View>
            <ScrollView style={styles.content}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Meus churras</Text>
                
            </ScrollView>
            <Pressable style={styles.addButton}>
                <Text>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        height: 150,
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
        borderRadius: 100,
        backgroundColor: 'red',
        margin: 20,
        padding: 10
    }  
})