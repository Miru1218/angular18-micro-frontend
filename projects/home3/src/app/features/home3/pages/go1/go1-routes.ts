import { Routes } from '@angular/router';
import { Go1Component } from './pages/go1.component';

export const routes: Routes = [
  {
    path: 'go1',
    component: Go1Component,
  },
  {
    path: '',
    redirectTo: 'home3',
    pathMatch: 'full',
  },
];
