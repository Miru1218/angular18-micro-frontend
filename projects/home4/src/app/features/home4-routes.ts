import { Routes } from '@angular/router';
import { Home4Component } from './home4/pages/home4.component';

export const routes: Routes = [
  {
    path: 'home4',
    component: Home4Component,
  },
  {
    path: '',
    redirectTo: 'home4',
    pathMatch: 'full',
  },
];
