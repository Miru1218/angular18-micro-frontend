import { Routes } from '@angular/router';
import { Home2Component } from './home2/pages/home2.component';

export const routes: Routes = [
  {
    path: '',
    component: Home2Component,
  },
  {
    path: '',
    redirectTo: 'home2',
    pathMatch: 'full',
  },
];
