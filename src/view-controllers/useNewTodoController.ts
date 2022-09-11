import {useState} from 'react';
import useTodoViewModel from '../view-models/useTodoViewModel';
import {useNavigation} from '@react-navigation/native';

const useNewTodoController = () => {
  const navigation = useNavigation();
  const [todoText, setTodoText] = useState<string>('');
  const {createTodo, creatingTodo} = useTodoViewModel();

  const onClickCreate = () => {
    createTodo(todoText);
    navigation.goBack();
  };

  const onChangeText = (text: string) => {
    setTodoText(text);
  };

  return {
    todoText,
    onChangeText,
    onClickCreate,
    creatingTodo,
  };
};

export default useNewTodoController;
