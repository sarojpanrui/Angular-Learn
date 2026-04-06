import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
   constructor(
    private Auth: AuthService,
    private router: Router,
  ) {}

  Logout(){
    this.Auth.logout();
    this.router.navigate(['/login'])
  }
}
