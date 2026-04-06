import { Routes } from '@angular/router';

import { LoginForm } from './login-form/login-form';
import { TodoComponent } from './todo-component/todo-component';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Settings } from './dashboard/settings/settings';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { Login } from './login/login';
import { authGuardGuard } from './auth-guard-guard';
import { Product } from './product/product';
import { ProductCardView } from './product-card-view/product-card-view';

export const routes: Routes = [
  // {path:'login' , component:LoginForm},
  // {path:'todo', component:TodoComponent}

  // {
  //     path:'dashboard', component:Dashboard,
  //     children : [
  //         {path:'profile', component:Profile},
  //         {path:'setting', component:Settings}
  //     ]

  // },
  //  {path:"",redirectTo:'/dashboard',pathMatch:'full' }

  { path: 'login', component: LoginForm },
  { path: 'profile', component: Profile, canActivate: [authGuardGuard] },
  { path: 'setting', component: Settings },
  { path: 'about', component: About },
  { path: 'product', component: Product },
  { path: 'product/:id', component: ProductCardView },
  { path: '**', component: PageNotFound },
];
