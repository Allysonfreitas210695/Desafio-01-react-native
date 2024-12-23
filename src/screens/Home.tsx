import { View, Text, FlatList, ScrollView, Alert } from 'react-native'
import React, { useState, useCallback } from 'react';

import { styles } from './styles';

import { TaskDTO } from '@dtos/TaskDTO';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { CardTodo } from '@components/CardTodo';
import { ListEmpty } from '@components/ListEmpty';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim().length === 0) return;

    setTasks(prevState => [
      ...prevState,
      {
        id: Math.random().toString(36).slice(2, 11),
        description,
        checked: false,
      }
    ]);

    setDescription('');
  };

  const handleCompletedTask = useCallback((task: TaskDTO) => {
    setTasks(prevState => prevState.map(t => 
      t.id === task.id ? {...t, checked: !t.checked} : t
    ));
  }, []);

  const handleRemoveTask = useCallback((task: TaskDTO) => {
    Alert.alert("Aviso", "Tem certeza que deseja remover esse item?", [
      {
        text: "Sim",
        onPress: () => {
          setTasks(prevState => prevState.filter(t => t.id !== task.id));
        }
      },
      { text: "Não", style: "cancel" }
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Header/>

        <View style={styles.content}>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChangeText={setDescription}
            value={description}
          />

          <Button
            icon="add-circle-outline"
            onPress={handleAddTask}
          />
        </View>

        <View style={styles.containerInfoTask}>
          <View style={styles.contextInfoCreateTask}>
            <Text style={styles.title}>Criadas</Text>
            <Text style={styles.countTask}>{tasks.length}</Text>
          </View>
          <View style={styles.contextInfoCompletedTask}>
            <Text style={styles.title}>Concluídas</Text>
            <Text style={styles.countTask}>{tasks.filter(task => task.checked).length}</Text>
          </View>
        </View>

       {tasks.length === 0 && <View style={styles.lineSeparated}></View>}

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CardTodo
              data={item}
              onChangeCompletedTask={handleCompletedTask}
              onChangeRemoveTask={handleRemoveTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          ListEmptyComponent={ListEmpty}
        />
      </ScrollView>
    </View>
  );
}
