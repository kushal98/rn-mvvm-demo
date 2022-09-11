import {createSlice, nanoid} from '@reduxjs/toolkit';
import {TodoItemType} from '../types/genericTypes';
import TodoStore from './TodoStore';

const initialState = TodoStore;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action: {payload: {title: string}; type: string}) => {
      state.todos = state.todos.concat([
        {title: action.payload.title, id: nanoid()},
      ]);
    },
    updateTodo: (state, action: {payload: TodoItemType; type: string}) => {
      state.todos = state.todos.map((todoItem: TodoItemType) => {
        if (todoItem.id === action.payload.id) {
          todoItem.title = action.payload.title;
          return todoItem;
        }
        return todoItem;
      });
      state.todos.concat([action.payload]);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todoItem: TodoItemType) => todoItem.id !== action.payload.id,
      );
    },
  },
});

const {createTodo, updateTodo, deleteTodo} = todoSlice.actions;

export const TodoAction = {
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todoSlice.reducer;
