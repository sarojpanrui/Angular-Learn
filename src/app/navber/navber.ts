import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navber',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navber.html',
  styleUrl: './navber.css',
})
export class Navber {}
