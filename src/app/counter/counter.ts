import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal<number>(0);

  Increment() {
    this.count.set(this.count() + 1);
  }
  Decrement() {
    this.count.set(this.count() - 1);
  }

  Reset(){
    this.count.set(0);
  }
}
