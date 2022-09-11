import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {TodoItem} from '../components';
import useHomeTodoController from '../view-controllers/useHomeTodoController';
import {TodoItemType} from '../types/genericTypes';

const HomeTodoScreen = () => {
  const {todos, onPressTodoItem, onPressCreate} = useHomeTodoController();

  const renderTodoList = ({item}: {item: TodoItemType}) => {
    return (
      <TodoItem title={item.title} onPress={() => onPressTodoItem(item)} />
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Todo</Text>
        <TouchableOpacity style={styles.btn} onPress={onPressCreate}>
          <Text style={styles.btnText}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoList}>
        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={renderTodoList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e7e7e7',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  todoList: {
    marginVertical: 24,
  },
});

export default HomeTodoScreen;
