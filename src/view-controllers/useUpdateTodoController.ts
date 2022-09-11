import {useState} from 'react';
import {TodoItemType} from '../types/genericTypes';
import useTodoViewModel from '../view-models/useTodoViewModel';
import {useNavigation} from '@react-navigation/native';
const useUpdateTodoController = (todo: TodoItemType) => {
  const navigation = useNavigation();
  const {
    updateTodo,
    updatingTodo,

    deleteTodo,
  } = useTodoViewModel();

  const [todoText, setTodoText] = useState<string>(todo.title);

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
    deleteTodo(todo.id);
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
