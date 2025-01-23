import { Routes } from '@angular/router';
import { authGuard } from './authentication/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../app/app.component').then(c => c.AppComponent),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('../app/pages/login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('../app/pages/register/register.component').then(c => c.RegisterComponent),
  },
  { path: '**', redirectTo: 'home' }
];
