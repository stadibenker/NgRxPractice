import { Component } from '@angular/core';
import { Todo } from '../../models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTodos, addTodo, removeTodo } from '../../state/todo';
import { selectAllTodos } from '../../state/todo/todo.selectors';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public todo = '';
  public allTodos$ = new Observable<Todo[]>;

  constructor(private store: Store) {
    this.allTodos$ = this.store.select(selectAllTodos as any);
  }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo }));
    this.todo = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
