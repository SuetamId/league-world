import { Routes } from '@angular/router';
import { authGuard } from './authentication/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  path: '',
  loadComponent: () => import('../app/components/header/header.component').then(c => c.HeaderComponent),
  canActivate: [authGuard],
  children:[
    {
      path: 'home',
      loadComponent: () => import('../app/pages/champions/champions.component').then(c => c.ChampionsComponent),
    },
    {
      path: 'champion-details/:name',
      loadComponent: () => import('../app/pages/champions/components/champions-detail/champions-detail.component').then(c => c.ChampionsDetailComponent),
    }
  ]
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
