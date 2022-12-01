import React from 'react';
import { Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function FinishingSection({ styles, data, setData }) {
    return (
        <>
            <Text style={styles.text}>{'Falta pouco! Para finalizar dê um nome \nao seu churras!'}</Text>
            <TextInput
                onChangeText={value => setData({ ...data, name: value })}
                value={data.name}
                label={"Nomeie seu churras"}
                mode={'outlined'}
                placeholder="Ex: Churras de Aniversário"
                style={[styles.textInput, { marginBottom: 25 }]}
            />
            <Button
                onPress={() => {
                    console.log(data)
                }}
                style={styles.finishButton}
                labelStyle={styles.finishButtonLabel}
                contentStyle={styles.finishButtonContent}
            > Calcular </Button>
        </>
    );
}