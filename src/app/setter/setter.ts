import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-setter',
  imports: [],
  templateUrl: './setter.html',
  styleUrl: './setter.css',
})
export class Setter {
  name=signal<string>('');

  updateName(val : string){
    this.name.set(val)
  }
}
