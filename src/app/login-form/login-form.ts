import { Component, signal } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { form, required, email, FormField, minLength } from '@angular/forms/signals';
import { toast } from 'ngx-sonner';


interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  imports: [FormField],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {

   constructor(
    private Auth: AuthService,
    private router: Router,
  ) {}

  Login(){
    this.Auth.login();
    this.router.navigate(['/profile'])
    toast.success("Login Successfully")
  }

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (path) => {
    required(path.email, {
      message: 'Email is Required',
    });
    email(path.email, {
      message: 'Enter valid email',
    });
    required(path.password, {
      message: 'password required',
    });
    minLength(path.password,6,{
      message:"password must be 6 Characters"
    })
  });

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.loginModel());
    this.loginModel.set({
      email: '',
      password: '',
    });
  }

 
}
