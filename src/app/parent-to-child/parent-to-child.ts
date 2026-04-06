import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  imports: [],
  templateUrl: './parent-to-child.html',
  styleUrl: './parent-to-child.css',
})
export class ParentToChild {
  // @Input() name!:string;
  name = input<string>();
}
