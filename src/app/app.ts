import { Component, signal } from '@angular/core';
import { Events } from './events/events';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { Setter } from './setter/setter';
import { Condition } from './condition/condition';
import { Loop } from './loop/loop';
import { Theme } from './theme/theme';
import { ConvertPipe } from './pipe/convert-pipe';
import { Todo } from './todo/todo';
import { ParentToChild } from './parent-to-child/parent-to-child';
import { ChildToParent } from './child-to-parent/child-to-parent';
import { TodoComponent } from './todo-component/todo-component';
import { LoginForm } from './login-form/login-form';
import { Card } from './shared/card/card';

import { RouterOutlet,RouterLink } from '@angular/router';
import { Navber } from './navber/navber';
import { Footer } from './footer/footer';
import { NgxSonnerToaster } from 'ngx-sonner';
import { User } from './user/user';




@Component({
  selector: 'app-root',
  imports:[Events,Login,Counter,Setter,Condition,Loop,Theme,ConvertPipe,Todo,ParentToChild,ChildToParent,TodoComponent,
    LoginForm,Card,RouterLink,RouterOutlet,Navber,Footer,NgxSonnerToaster,User
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  name = "saroj";

  usd=10;
  usdInRupee=85;

  username:string = "Saroj Panrui"

  parentMessage:string = " ";
  receiveMessage(data:string){
    this.parentMessage=data;
  }
}
