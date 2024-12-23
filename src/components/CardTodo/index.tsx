import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TaskDTO } from 'src/dtos/TaskDTO';

import { Checkbox } from '@components/Checkbox';

import theme from 'src/theme';

import { styles } from './style';

type Props = {
  data: TaskDTO,
  onChangeCompletedTask: (task: TaskDTO) => void,
  onChangeRemoveTask: (task: TaskDTO) => void,
}

export function CardTodo({ data, onChangeCompletedTask, onChangeRemoveTask }: Props) {
  return (
    <View style={styles.container}>
      <Checkbox 
        checked={data.checked}
        onChange={() => onChangeCompletedTask(data)}
      />
      <Text 
        style={[
          styles.description, 
          data.checked && { 
            textDecorationLine: 'line-through', 
            textDecorationStyle: 'dashed',
            color: theme.COLORS.GRAY_300
           }
        ]}
        numberOfLines={2} 
        ellipsizeMode="tail" 
      >
        {data.description}
      </Text>

      <TouchableOpacity 
        onPress={() => onChangeRemoveTask(data)} 
        style={styles.trashIcon}
      >
        <Ionicons 
          name="trash-outline" 
          size={24} 
          color={theme.COLORS.GRAY_300}
        />
      </TouchableOpacity>
    </View>
  );
}
