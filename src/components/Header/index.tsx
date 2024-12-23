import { View, Image } from 'react-native'
import React from 'react'

import { styles } from './styles';

import LogoImg from "@assets/Logo.png";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoImg}>
        <Image 
          source={LogoImg} 
          accessibilityLabel="Logo do sistema"
          style={styles.image}
        />
      </View>
    </View>
  )
}