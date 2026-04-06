import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  todo = signal('');
  todos = signal<{ text: string; done: boolean }[]>([]);

  addTodo() {
    const text = this.todo().trim();

    if (text) {
      this.todos.update((current) => [...current, { text: text, done: false }]);

      this.todo.set('');
    }
  }

  deleteTodo(index: number) {
    this.todos.update((list) => list.filter((_, i) => i !== index));
  }
}
