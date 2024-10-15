import { Injectable } from '@angular/core';
import { Todo } from '../models';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private storage: Storage) {}

  async getTodos(): Promise<Todo[]> {
    var todos = this.storage.getItem('todos') || '';
    return JSON.parse(todos);
  }

  async saveTodos(todos: Todo[]) {
    return this.storage.setItem('todos', JSON.stringify(todos));
  }
}