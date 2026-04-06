import { Component,input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  title = input<string>('Default Title');
  subtitle = input<string>('Default Subtitle');
  image = input<string>('');
  buttonText = input<string>('View');

}
