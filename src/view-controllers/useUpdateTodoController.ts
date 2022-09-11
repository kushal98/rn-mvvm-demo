import {useEffect, useState} from 'react';
import {TodoItemType} from '../types/genericTypes';
import useTodoViewModel from '../view-models/useTodoViewModel';
import {useNavigation} from '@react-navigation/native';
const useUpdateTodoController = (todo: TodoItemType) => {
  const navigation = useNavigation();
  const {
    updateTodo,
    updatingTodo,
    updateTodoSuccess,
    updateTodoError,

    deleteTodo,
    // deletingTodo,
    deleteTodoSuccess,
    deleteTodoError,
  } = useTodoViewModel();

  const [todoText, setTodoText] = useState<string>(todo.title);

  useEffect(() => {
    if (updateTodoSuccess) {
    }

    if (updateTodoError) {
    }
  }, [updateTodoSuccess, updateTodoError]);

  useEffect(() => {
    if (deleteTodoSuccess) {
    }

    if (deleteTodoError) {
    }
  }, [deleteTodoSuccess, deleteTodoError]);

  const onChangeText = (text: string) => {
    setTodoText(text);
  };

  const onClickUpdate = () => {
    let payload = {
      id: todo.id,
      title: todoText,
    };
    updateTodo(payload);
    navigation.goBack();
  };

  const onClickDelete = () => {
    let payload = {
      id: todo.id,
      title: todoText,
    };
    deleteTodo(payload);
    navigation.goBack();
  };

  return {
    todoText,
    onClickUpdate,
    onClickDelete,
    onChangeText,
    updatingTodo,
  };
};

export default useUpdateTodoController;
