import { Component, inject } from '@angular/core';
import { TodoStore } from '../store/todo-store';

@Component({
  selector: 'app-todo-component',
  imports: [],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css',
})
export class TodoComponent {
  store=inject(TodoStore);
  inputText = " ";

  add(){
    this.store.addTodo(this.inputText);
    this.inputText=" ";
  }
}
