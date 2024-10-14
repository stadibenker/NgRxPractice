import { createAction, props } from "@ngrx/store";

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