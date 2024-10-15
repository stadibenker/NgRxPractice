import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models";

export const addTodo = createAction(
    '[Todo component] Add Todo',
    props<{ content: string }>()
);

export const removeTodo = createAction(
    '[Todo component] Remove Todo',
    props<{ id: string }>()
);

export const loadTodos = createAction(
    '[Todo component] Load Todos'
);

export const loadTodosSuccess = createAction(
    '[Todo API] Todo Load Success',
    props<{ todos: Todo[] }>()
  );
  
  export const loadTodosFailure = createAction(
    '[Todo API] Todo Load Failure',
    props<{ error: string }>()
  );