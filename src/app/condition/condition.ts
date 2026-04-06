import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-condition',
  imports: [],
  templateUrl: './condition.html',
  styleUrl: './condition.css',
})
export class Condition {
  isLoggedin=signal<boolean>(true);

  Logout(){
    this.isLoggedin.set(false);
  }
  Login(){
    this.isLoggedin.set(true);
  }
}
