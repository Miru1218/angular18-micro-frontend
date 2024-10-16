import { Routes } from '@angular/router';
import { Home3Component } from './home3/pages/home3.component';
import { Go1Component } from './home3/pages/go1/pages/go1.component';
import { Go2Component } from './home3/pages/go2/pages/go2.component';

export const routes: Routes = [
  {
    path: '',
    component: Home3Component,
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
    redirectTo: 'home3',
    pathMatch: 'full',
  },
];
