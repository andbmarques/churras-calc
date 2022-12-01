import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Checkbox as CheckboxPaper } from 'react-native-paper';

export default function Checkbox({ state, setState, title, style }) {
    return (
        <View style={[style.checkbox, Platform.OS === 'ios' ? { flexDirection: 'row-reverse', alignSelf: 'flex-start' } : {}]}>
            <CheckboxPaper
                status={state ? 'checked' : 'unchecked'}
                onPress={() => {
                    setState(!state);
                }}
                uncheckedColor='#003049'
                color='#F77F00'
            />
            <Text
                style={style.checkboxText}
                onPress={() => {
                    setState(!state);
                }}
            >
                {title}
            </Text>
        </View>
    );
}