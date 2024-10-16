import { Routes } from '@angular/router';
import { Home2Component } from './home2/pages/home2.component';
import { Go1Component } from './home2/pages/go1/pages/go1.component';
import { Go2Component } from './home2/pages/go2/pages/go2.component';

export const routes: Routes = [
  {
    path: '',
    component: Home2Component,
  },
  {
    path: 'go1',
    component: Go1Component,
  },
  {
    path: 'go2',
    component: Go2Component,
  },
  {
    path: '**',
    redirectTo: 'home2',
    pathMatch: 'full',
  },
];
