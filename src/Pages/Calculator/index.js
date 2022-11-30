import React, { useState } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import NumericInput from 'react-native-numeric-input'
import Hr from '../../Components/Hr/hr';
import { Button, TextInput, Checkbox } from 'react-native-paper';

export default function Calculator() {

    const [data, setData] = useState({
        name: '',
        peoples: {
            adults: 1,
            teenagers: 0,
            children: 0
        },
        meat: {
            beef: {
                type: '',
                price: 0.00
            },
            chicken: {
                type: '',
                price: 0.00
            },
            suine: {
                type: '',
                price: 0.00
            }
        },
        sideDish: {
            garlicBread: {
                type: '',
                price: 0.00
            },
            cheese: {
                type: '',
                price: 0.00
            }
        },
        beer: 0
    });

    const [haveChicken, setHaveChicken] = useState(true);
    const [haveSuine, setHaveSuine] = useState(true);
    const [haveGarlicBread, setHaveGarlicBread] = useState(true);
    const [haveCheese, setHaveCheese] = useState(true);
    const [haveBeer, setHaveBeer] = useState(true);

    return (
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={50}>
            <ScrollView style={styles.container}>
                {/* HEADER */}
                <Text style={styles.title}>Vamos começar</Text>
                <Text style={styles.text}>{'Insira os dados abaixo e clique em \ncalcular para obter os resultados'}</Text>
                {/* PEOPLE INPUT */}
                <View style={styles.counterInputContainer}>
                    <Text style={styles.counterInputLabel}>Adultos</Text>
                    <NumericInput
                        onChange={value => setData({ ...data, peoples: { ...data.peoples, adults: value } })}
                        value={data.peoples.adults}
                        totalWidth={110}
                        rightButtonBackgroundColor='#F77F00'
                        leftButtonBackgroundColor='#F77F00'
                        textColor='#003049'
                        valueType='integer'
                    />
                </View>
                <View style={styles.counterInputContainer}>
                    <Text style={styles.counterInputLabel}>Adolescentes</Text>
                    <NumericInput
                        onChange={value => setData({ ...data, peoples: { ...data.peoples, teenagers: value } })}
                        value={data.peoples.teenagers}
                        totalWidth={110}
                        rightButtonBackgroundColor='#F77F00'
                        leftButtonBackgroundColor='#F77F00'
                        textColor='#003049'
                    />
                </View>
                <View style={styles.counterInputContainer}>
                    <Text style={styles.counterInputLabel}>Crianças</Text>
                    <NumericInput
                        onChange={value => setData({ ...data, peoples: { ...data.peoples, children: value } })}
                        value={data.peoples.children}
                        totalWidth={110}
                        rightButtonBackgroundColor='#F77F00'
                        leftButtonBackgroundColor='#F77F00'
                        textColor='#003049'
                    />
                </View>
                <Hr />
                {/* MEAT SECTION */}
                <Text style={styles.text}>{'Insira mais informações sobre as \ncarnes.'}</Text>
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
                        onChangeText={value => setData({ ...data, meat: { ...data.meat, beef: { ...data.meat.beef, price: parseFloat(value) } } })}
                        value={data.meat.beef.price.toString()}
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
                        onChangeText={value => setData({ ...data, meat: { ...data.meat, chicken: { ...data.meat.chicken, price: parseFloat(value) } } })}
                        value={data.meat.chicken.price.toString()}
                        label={"Preço / 1/2 KG"}
                        mode={'outlined'}
                        placeholder="Ex: R$14,90 / KG"
                        keyboardType='decimal-pad'
                        style={styles.textInput}
                        disabled={haveChicken ? true : false}
                    />
                    <View style={[styles.checkbox, Platform.OS === 'ios' ? { flexDirection: 'row-reverse', alignSelf: 'flex-start' } : {}]}>
                        <Checkbox
                            status={haveChicken ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setHaveChicken(!haveChicken);
                            }}
                            uncheckedColor='#003049'
                            color='#F77F00'
                        />
                        <Text
                            style={styles.checkboxText}
                            onPress={() => {
                                setHaveChicken(!haveChicken);
                            }}
                        >
                            Não terá
                        </Text>
                    </View>
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
                        onChangeText={value => setData({ ...data, meat: { ...data.meat, suine: { ...data.meat.suine, price: parseFloat(value) } } })}
                        value={data.meat.suine.price.toString()}
                        label={"Preço / 1/2 KG"}
                        mode={'outlined'}
                        placeholder="Ex: R$14,90 / KG"
                        keyboardType='decimal-pad'
                        style={styles.textInput}
                        disabled={haveSuine ? true : false}

                    />
                    <View style={[styles.checkbox, Platform.OS === 'ios' ? { flexDirection: 'row-reverse', alignSelf: 'flex-start' } : {}]}>
                        <Checkbox
                            status={haveSuine ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setHaveSuine(!haveSuine);
                            }}
                            uncheckedColor='#003049'
                            color='#F77F00'
                        />
                        <Text
                            style={styles.checkboxText}
                            onPress={() => {
                                setHaveSuine(!haveSuine);
                            }}
                        >
                            Não terá
                        </Text>
                    </View>
                </View>
                <Hr />
                {/* SIDE DISH SECTION */}
                <Text style={styles.text}>{'Agora é a hora dos \nacompanhamentos!'}</Text>
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
                        onChangeText={value => setData({ ...data, sideDish: { ...data.sideDish, garlicBread: { ...data.sideDish.garlicBread, price: parseFloat(value) } } })}
                        value={data.sideDish.garlicBread.price.toString()}
                        label={"Preço / 240G"}
                        mode={'outlined'}
                        placeholder="Ex: R$14,90 / KG"
                        keyboardType='decimal-pad'
                        style={styles.textInput}
                        disabled={haveGarlicBread ? true : false}
                    />
                    <View style={[styles.checkbox, Platform.OS === 'ios' ? { flexDirection: 'row-reverse', alignSelf: 'flex-start' } : {}]}>
                        <Checkbox
                            status={haveGarlicBread ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setHaveGarlicBread(!haveGarlicBread);
                            }}
                            uncheckedColor='#003049'
                            color='#F77F00'
                        />
                        <Text
                            style={styles.checkboxText}
                            onPress={() => {
                                setHaveGarlicBread(!haveGarlicBread);
                            }}
                        >
                            Não terá
                        </Text>
                    </View>
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
                        onChangeText={value => setData({ ...data, sideDish: { ...data.sideDish, cheese: { ...data.sideDish.cheese, price: parseFloat(value) } } })}
                        value={data.sideDish.cheese.price.toString()}
                        label={"Preço / KG"}
                        mode={'outlined'}
                        placeholder="Ex: R$29,90 / KG"
                        keyboardType='decimal-pad'
                        style={styles.textInput}
                        disabled={haveCheese ? true : false}

                    />
                    <View style={[styles.checkbox, Platform.OS === 'ios' ? { flexDirection: 'row-reverse', alignSelf: 'flex-start' } : {}]}>
                        <Checkbox
                            status={haveCheese ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setHaveCheese(!haveCheese);
                            }}
                            uncheckedColor='#003049'
                            color='#F77F00'
                        />
                        <Text
                            style={styles.checkboxText}
                            onPress={() => {
                                setHaveCheese(!haveCheese);
                            }}
                        >
                            Não terá
                        </Text>
                    </View>
                </View>
                <Hr />
                {/* FINISHING SECTION */}
                <Text style={styles.text}>{'Falta pouco! Para finalizar informe\nsobre as bebidas e dê um nome \nao seu churras!'}</Text>

                <TextInput
                    onChangeText={value => setData({ ...data, name: value })}
                    value={data.name}
                    label={"Nomeie seu churras"}
                    mode={'outlined'}
                    placeholder="Ex: Churras de Aniversário"
                    style={[styles.textInput, { marginBottom: 25 }]}
                />

                <View style={[styles.checkbox, Platform.OS === 'ios' ? { flexDirection: 'row-reverse', alignSelf: 'flex-start' } : {}]}>
                    <Checkbox
                        status={haveBeer ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setHaveBeer(!haveBeer);
                        }}
                        uncheckedColor='#003049'
                        color='#F77F00'
                    />
                    <Text
                        style={styles.checkboxText}
                        onPress={() => {
                            setHaveBeer(!haveBeer);
                        }}
                    >
                        Cerveja?
                    </Text>
                </View>

                <View style={styles.counterInputContainer} pointerEvents={haveBeer ? 'auto' : 'none'} >
                    <Text style={styles.counterInputLabel}>Litrão / Pessoa</Text>
                    <NumericInput
                        onChange={value => setData({ ...data, beer: value })}
                        value={haveBeer ? data.beer : 0}
                        totalWidth={110}
                        rightButtonBackgroundColor={haveBeer ? '#F77F00' : '#DDDDDD'}
                        leftButtonBackgroundColor={haveBeer ? '#F77F00' : '#DDDDDD'}
                        textColor='#003049'
                        valueType='integer'

                    />
                </View>

                <Button
                    onPress={() => {
                        console.log(data)
                    }}
                    style={styles.finishButton}
                    labelStyle={styles.finishButtonLabel}
                    contentStyle={styles.finishButtonContent}
                >
                    Calcular
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

