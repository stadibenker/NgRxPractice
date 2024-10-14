import { Component } from '@angular/core';
import { Todo } from '../../models';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { addTodo, loadTodos, removeTodo } from '../../state';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public todo = '';
  public allTodos$ = new Observable;

  constructor(private store: Store) {
    this.allTodos$ = this.store.select(selectAllTodos)
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
