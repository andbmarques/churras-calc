import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default function Calculator() {
 return (
   <ScrollView style={styles.container}>
    <Text style={styles.title}>Vamos começar</Text>
    <Text style={styles.text}>{'Insira os dados abaixo e clique em \ncalcular para obter os resultados'}</Text>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    }
});