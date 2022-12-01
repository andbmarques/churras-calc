import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import Checkbox from '../../../Components/Checkbox/checkbox';
import validateComma from '../../../Utils/validateComma';

export default function MeatSection({ styles, data, setData, haveChicken, haveSuine, setHaveChicken, setHaveSuine }) {
    return (
        <>
            <View style={styles.inputContainer}>
                {/* BEEF */}
                <Text style={styles.label}>Carne Bovina:</Text>
                <TextInput
                    onChangeText={value => setData({ ...data, meat: { ...data.meat, beef: { ...data.meat.beef, type: value } } })}
                    value={data.meat.beef.type}
                    label={"Tipo"}
                    mode={'outlined'}
                    placeholder="Ex: Maminha"
                    style={styles.textInput}
                />
                <TextInput
                    onChangeText={value => {
                        value = validateComma(value);
                        setData({ ...data, meat: { ...data.meat, beef: { ...data.meat.beef, price: parseFloat(value) } } })
                    }}
                    label={"Preço / KG"}
                    mode={'outlined'}
                    placeholder="Ex: R$39,00 / KG"
                    keyboardType='numeric'
                    style={styles.textInput}
                />
            </View>
            {/* CHICKEN */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Frango:</Text>
                <TextInput
                    onChangeText={value => setData({ ...data, meat: { ...data.meat, chicken: { ...data.meat.chicken, type: value } } })}
                    value={data.meat.chicken.type}
                    label={"Tipo"}
                    mode={'outlined'}
                    placeholder="Ex: Coxinha da Asa Temperada"
                    style={styles.textInput}
                    disabled={haveChicken ? true : false}
                />
                <TextInput
                    onChangeText={(value) => {
                        value = validateComma(value);
                        setData({ ...data, meat: { ...data.meat, chicken: { ...data.meat.chicken, price: parseFloat(value) } } })
                    }}
                    label={"Preço / 1/2 KG"}
                    mode={'outlined'}
                    placeholder="Ex: R$14,90 / KG"
                    keyboardType='decimal-pad'
                    style={styles.textInput}
                    disabled={haveChicken ? true : false}
                />
                <Checkbox state={haveChicken} setState={setHaveChicken} title={'Não terá'} style={styles} />
            </View>
            {/* SUINE */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Linguiça:</Text>
                <TextInput
                    onChangeText={value => setData({ ...data, meat: { ...data.meat, suine: { ...data.meat.suine, type: value } } })}
                    value={data.meat.suine.type}
                    label={"Tipo"}
                    mode={'outlined'}
                    placeholder="Ex: Linguiça Recheada Com Queijo"
                    style={styles.textInput}
                    disabled={haveSuine ? true : false}
                />
                <TextInput
                    onChangeText={value => {
                        value = validateComma(value);
                        setData({ ...data, meat: { ...data.meat, suine: { ...data.meat.suine, price: parseFloat(value) } } })
                    }}
                    label={"Preço / 1/2 KG"}
                    mode={'outlined'}
                    placeholder="Ex: R$14,90 / KG"
                    keyboardType='decimal-pad'
                    style={styles.textInput}
                    disabled={haveSuine ? true : false}
                />
                <Checkbox state={haveSuine} setState={setHaveSuine} title={'Não terá'} style={styles} />
            </View>
        </>
    );
}