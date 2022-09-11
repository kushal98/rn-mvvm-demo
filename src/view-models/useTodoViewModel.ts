import {useSelector, useDispatch} from 'react-redux';
import {TodoAction} from '../store/todoSlice';

import {StoreType, TodoStateType} from '../types/stateTypes';

const useTodoViewModel = () => {
  const dispatch = useDispatch();
  const {
    fetchingTodos,
    todos,

    creatingTodo,
    createTodoSuccess,
    createTodoError,

    updatingTodo,
    updateTodoSuccess,
    updateTodoError,

    deletingTodo,
    deleteTodoSuccess,
    deleteTodoError,
  }: TodoStateType = useSelector((state: StoreType) => state.todo);

  const {createTodo, updateTodo, deleteTodo} = TodoAction;

  return {
    // fetchTodos,
    fetchingTodos,
    todos,

    createTodo: (title: string) => dispatch(createTodo({title})),
    creatingTodo,
    createTodoSuccess,
    createTodoError,

    updateTodo: (payload: {id: string; title: string}) =>
      dispatch(updateTodo(payload)),
    updatingTodo,
    updateTodoSuccess,
    updateTodoError,

    deleteTodo: (payload: {id: string; title: string}) =>
      dispatch(deleteTodo(payload)),
    deletingTodo,
    deleteTodoSuccess,
    deleteTodoError,
  };
};

export default useTodoViewModel;
