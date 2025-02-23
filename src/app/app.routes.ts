import { Routes } from '@angular/router';
import { LayoutMainComponent } from './layout/pages/layout-main/layout-main.component';
import { LoginComponent } from './layout/components/login/login.component';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import { AccessDeniedComponent } from './layout/components/access-denied/access-denied.component';
import { ErrorComponent } from './layout/components/error/error.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    canActivate: [AuthGuard], // 要透過 AuthGuard 驗證過後才能進入
    children: [
      {
        path: '',
        loadChildren: () => import('@@home').then((m) => m.routes),
      },
      {
        path: 'home2',
        loadChildren: () => import('@@home2').then((m) => m.routes),
      },
      {
        path: 'home3',
        loadChildren: () => import('@@home3').then((m) => m.routes),
      },
      {
        path: 'home4',
        loadChildren: () => import('@@home4').then((m) => m.routes),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
