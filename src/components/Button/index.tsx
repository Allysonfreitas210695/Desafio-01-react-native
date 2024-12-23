import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';
import theme from 'src/theme';

type Props = TouchableOpacityProps & {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string; 
}

export function Button({ icon, size = 20, color = theme.COLORS.GRAY_100, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest} 
      activeOpacity={0.6}
    >
      <Ionicons 
        name={icon} 
        size={size} 
        color={color} 
      />
    </TouchableOpacity>
  );
}
