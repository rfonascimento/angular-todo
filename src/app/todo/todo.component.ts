import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from './todo'; 

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private _store: Store<any>
  ) { 
    _store.select('todos')
      .subscribe(todos => {
        console.log("TODOS UPDATE");
        this.todos = todos;
      })
  }

  ngOnInit() {
  }

  /*
  add(todo): void {
    this.todos.push(Object.assign({}, { id: this.todos.length+1, todo: todo, done: false }));
  }*/

  add (todo: Todo): void {
    this._store.dispatch({
      type: 'ADD_TODO',
      payload: Object.assign({}, { id: this.todos.length +1, todo: todo, done: false })
    })
  }

  remove(todo: Todo):void {
    this._store.dispatch({
      type: 'REMOVE_TODO',
      payload: todo
    });
  }

  toggleTodoComplete(todo): void {
    this._store.dispatch({
      type: 'TOGGLE_TODO',
      payload: todo
    });
  }

}