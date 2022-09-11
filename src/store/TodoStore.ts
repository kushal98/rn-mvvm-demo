import {nanoid} from '@reduxjs/toolkit';
import {TodoStateType} from '../types/stateTypes';

const TodoStore: TodoStateType = {
  fetchingTodos: false,
  todos: [
    {
      id: nanoid(),
      title: 'I have to do homework.',
    },
    {
      id: nanoid(),
      title: 'I have to complete project.',
    },
  ],

  creatingTodo: false,
  createTodoSuccess: false,
  createTodoError: false,

  updatingTodo: false,
  updateTodoSuccess: false,
  updateTodoError: false,

  deletingTodo: false,
  deleteTodoSuccess: false,
  deleteTodoError: false,
};

export default TodoStore;
