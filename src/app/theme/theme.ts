import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-theme',
  imports: [],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class Theme {
  isDark = signal<boolean>(false);
  constructor() {
    effect(() => {
      if (this.isDark()) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    });
  }

  Toggler() {
    this.isDark.set(!this.isDark());
  }
}
