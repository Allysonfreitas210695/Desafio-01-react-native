import { View, ActivityIndicator } from 'react-native'
import React from 'react'

import theme from 'src/theme';

import { styles } from './styles';

export function Loading({ size = 'large', color = theme.COLORS.BLUE_DARK }: { size?: "small" | "large"; color?: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
}