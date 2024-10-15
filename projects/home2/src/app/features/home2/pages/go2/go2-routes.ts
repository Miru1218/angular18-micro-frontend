import { Routes } from '@angular/router';
import { Go2Component } from './pages/go2.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'go2',
    pathMatch: 'full',
  },
  {
    path: 'go2',
    component: Go2Component,
  }
];
