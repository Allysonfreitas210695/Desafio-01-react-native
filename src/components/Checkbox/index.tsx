import React  from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import theme from 'src/theme';

import { styles } from './styles';

type Props = {
    checked: boolean,
    onChange: (checked: boolean) => void
}

export function Checkbox({ checked, onChange }: Props){
    return (
        <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => onChange(!checked)}
        >
            <View style={[styles.checkbox, checked && { backgroundColor: theme.COLORS.PURPLE, borderColor: "transparent" }]}>
                {checked && <AntDesign name="check" size={18} color="#FFF" />}
            </View>
        </TouchableOpacity>
    );
};




