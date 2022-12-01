import React from 'react';
import { View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input'

export default function NumberInput({ state, setData, data, text, styles, beer, age }) {
    return (
        <View style={styles.counterInputContainer} pointerEvents={state ? 'auto' : 'none'} >
            <Text style={styles.counterInputLabel}>{text}</Text>
            <NumericInput
                onChange={value => setData({ ...data, peoples: { ...data.peoples, [age]: value } })}
                totalWidth={110}
                rightButtonBackgroundColor={state ? '#F77F00' : '#DDDDDD'}
                leftButtonBackgroundColor={state ? '#F77F00' : '#DDDDDD'}
                textColor='#003049'
                valueType='integer'
            />
        </View>
    );
}