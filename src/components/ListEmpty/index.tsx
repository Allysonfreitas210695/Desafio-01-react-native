import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import theme from 'src/theme';
import { styles } from './styles';

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.iconInfo}>
        <Feather 
          name="file-text" 
          size={60} 
          color={theme.COLORS.GRAY_300}
          accessibilityLabel="Ícone de tarefa vazia"
          accessibilityRole="image"
        />
      </View>
      <Text style={styles.textoInfo} accessibilityLabel="Mensagem informando que não há tarefas">
        Você ainda não tem tarefas cadastradas
        {'\n'}
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}