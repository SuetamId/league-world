import { Routes } from '@angular/router';
import { authGuard } from './authentication/auth.guard';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {
  path: 'home',
  loadComponent: () => import('../app/components/header/header.component').then(c => c.HeaderComponent),
  canActivate: [authGuard],
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
