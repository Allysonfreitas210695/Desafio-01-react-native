import { TextInput, TextInputProps } from 'react-native'
import React from 'react'

import theme from 'src/theme';

import { styles } from './styles';

type Props = TextInputProps;

export function Input({onChange, ...rest}: Props) {
  return (
    <TextInput
      {...rest}
      placeholderTextColor={theme.COLORS.GRAY_300}
      style={styles.container}
    />
  )
}