import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export default function Home({ navigation }) {

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
                                    <AntDesign name="user" size={24} color="#003049" />
                                    <Text style={styles.itemText} >{item.peoples}</Text>
                                </View>
                                <View style={styles.itemIconsContent}>
                                    <AntDesign name="wallet" size={24} color="#003049" />
                                    <Text style={styles.itemText}>R${item.value}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Calculator')} >
                <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 25 }}>+</Text>
            </TouchableOpacity>
        </View>
    );
}