import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  todos=signal<{text:string; done:boolean}[]>([])

  addTodo(text:string){
    this.todos.update(list =>[
      ...list , {text,done:false}
    ])
  }

  deleteTodo(index: number) {
    this.todos.update(list =>
      list.filter((_, i) => i !== index)
    );
  }
}
