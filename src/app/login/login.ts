import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title = 'Login Page...';
  imageUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NTUtVw3i311Z8hKu7b1LmD7Wi-m_1WNbqg&s';

 
}
