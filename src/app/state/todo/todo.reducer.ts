import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  removeTodo,
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from './todo.actions';
import { Todo } from '../../models';

export interface TodoState {
  todos: Todo[];
  error: string;
  status: string;
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content: content }],
  })),

  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),

  on(loadTodos, (state) => ({ ...state, status: 'loading' })),

  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    error: '',
    status: 'success',
  })),

  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error'
  }))
);