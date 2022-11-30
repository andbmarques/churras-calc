import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function Calculator() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Vamos começar</Text>
            <Text style={styles.text}>{'Insira os dados abaixo e clique em \ncalcular para obter os resultados'}</Text>
        </ScrollView>
    );
}

