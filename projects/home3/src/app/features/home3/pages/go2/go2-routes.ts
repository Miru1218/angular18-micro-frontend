import { Routes } from '@angular/router';
import { Go2Component } from './pages/go2.component';

export const routes: Routes = [
  {
    path: 'go2',
    component: Go2Component,
  },
  {
    path: '',
    redirectTo: 'home3',
    pathMatch: 'full',
  },
];
