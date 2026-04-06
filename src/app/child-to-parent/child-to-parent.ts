import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  imports: [],
  templateUrl: './child-to-parent.html',
  styleUrl: './child-to-parent.css',
})
export class ChildToParent {
  @Output() message = new EventEmitter<string>();


  sendData(){
    this.message.emit("Hello from Child");
  }

  msg=signal<string>("")
  send(){
    this.msg.set("Hello form Child Using Signals")
  }
}
