import { Routes } from '@angular/router';
import { Go1Component } from './pages/go1.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'go1',
    pathMatch: 'full',
  },
  {
    path: 'go1',
    component: Go1Component,
  }
];
