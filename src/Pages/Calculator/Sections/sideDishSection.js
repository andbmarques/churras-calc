import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from '../../../Components/Checkbox/checkbox';
import { TextInput } from 'react-native-paper';
import validateComma from '../../../Utils/validateComma';

export default function SideDishSection({ data, setData, styles, haveCheese, haveGarlicBread, setHaveCheese, setHaveGarlicBread }) {
    return (
        <>
            {/* GARLIC BREAD */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Pão de Alho:</Text>
                <TextInput
                    onChangeText={value => setData({ ...data, sideDish: { ...data.sideDish, garlicBread: { ...data.sideDish.garlicBread, type: value } } })}
                    value={data.sideDish.garlicBread.type}
                    label={"Tipo"}
                    mode={'outlined'}
                    placeholder="Ex: Pão de Alho Apimentado"
                    style={styles.textInput}
                    disabled={haveGarlicBread ? true : false}
                />
                <TextInput
                    onChangeText={value => {
                        value = validateComma(value);
                        setData({ ...data, sideDish: { ...data.sideDish, garlicBread: { ...data.sideDish.garlicBread, price: parseFloat(value) } } })
                    }}
                    label={"Preço / 240G"}
                    mode={'outlined'}
                    placeholder="Ex: R$14,90 / KG"
                    keyboardType='decimal-pad'
                    style={styles.textInput}
                    disabled={haveGarlicBread ? true : false}
                />
                <Checkbox state={haveGarlicBread} setState={setHaveGarlicBread} title={'Não terá'} style={styles} />
            </View>
            {/* CHEESE */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Queijo:</Text>
                <TextInput
                    onChangeText={value => setData({ ...data, sideDish: { ...data.sideDish, cheese: { ...data.sideDish.cheese, type: value } } })}
                    value={data.sideDish.cheese.type}
                    label={"Tipo"}
                    mode={'outlined'}
                    placeholder="Ex: Queijo Coalho"
                    style={styles.textInput}
                    disabled={haveCheese ? true : false}
                />
                <TextInput
                    onChangeText={value => {
                        value = validateComma(value);
                        setData({ ...data, sideDish: { ...data.sideDish, cheese: { ...data.sideDish.cheese, price: parseFloat(value) } } })
                    }}
                    label={"Preço / KG"}
                    mode={'outlined'}
                    placeholder="Ex: R$29,90 / KG"
                    keyboardType='decimal-pad'
                    style={styles.textInput}
                    disabled={haveCheese ? true : false}
                />
                <Checkbox state={haveCheese} setState={setHaveCheese} title={'Não terá'} style={styles} />
            </View>
        </>
    );
}