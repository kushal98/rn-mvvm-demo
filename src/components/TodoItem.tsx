import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface TodoItemProps {
  onPress: () => void;
  title: string;
}

const TodoItem = (props: TodoItemProps) => {
  const {onPress, title} = props;
  return (
    <TouchableOpacity style={styles.todo} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 8,
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default TodoItem;
