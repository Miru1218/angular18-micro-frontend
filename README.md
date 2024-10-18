# CrmProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```
angular18-micro-frontend
├─ projects
│  ├─ home
│  │  ├─ ng-package.json
│  │  └─ src
│  │     └─ app
│  │        ├─ app.component.html
│  │        ├─ app.component.scss
│  │        ├─ app.component.spec.ts
│  │        ├─ app.component.ts
│  │        ├─ app.config.ts
│  │        ├─ app.routes.ts
│  │        └─ features
│  │           ├─ home
│  │           │  └─ pages
│  │           │     ├─ home.component.html
│  │           │     ├─ home.component.scss
│  │           │     ├─ home.component.spec.ts
│  │           │     └─ home.component.ts
│  │           └─ home-routes.ts
│  ├─ home2
│  │  ├─ ng-package.json
│  │  └─ src
│  │     └─ app
│  │        ├─ app.component.html
│  │        ├─ app.component.scss
│  │        ├─ app.component.spec.ts
│  │        ├─ app.component.ts
│  │        ├─ app.config.ts
│  │        ├─ app.routes.ts
│  │        └─ features
│  │           ├─ app-routes.ts
│  │           └─ home2
│  │              └─ pages
│  │                 ├─ go1
│  │                 │  ├─ go1-routes.ts
│  │                 │  └─ pages
│  │                 │     ├─ go1.component.html
│  │                 │     ├─ go1.component.scss
│  │                 │     ├─ go1.component.spec.ts
│  │                 │     └─ go1.component.ts
│  │                 ├─ go2
│  │                 │  ├─ go2-routes.ts
│  │                 │  └─ pages
│  │                 │     ├─ go2.component.html
│  │                 │     ├─ go2.component.scss
│  │                 │     ├─ go2.component.spec.ts
│  │                 │     └─ go2.component.ts
│  │                 ├─ home2.component.html
│  │                 ├─ home2.component.scss
│  │                 ├─ home2.component.spec.ts
│  │                 └─ home2.component.ts
│  ├─ home3
│  │  ├─ ng-package.json
│  │  └─ src
│  │     └─ app
│  │        ├─ app.component.html
│  │        ├─ app.component.scss
│  │        ├─ app.component.spec.ts
│  │        ├─ app.component.ts
│  │        ├─ app.config.ts
│  │        ├─ app.routes.ts
│  │        └─ features
│  │           ├─ home3
│  │           │  └─ pages
│  │           │     ├─ go1
│  │           │     │  ├─ go1-routes.ts
│  │           │     │  └─ pages
│  │           │     │     ├─ go1.component.html
│  │           │     │     ├─ go1.component.scss
│  │           │     │     ├─ go1.component.spec.ts
│  │           │     │     └─ go1.component.ts
│  │           │     ├─ go2
│  │           │     │  ├─ go2-routes.ts
│  │           │     │  └─ pages
│  │           │     │     ├─ go2.component.html
│  │           │     │     ├─ go2.component.scss
│  │           │     │     ├─ go2.component.spec.ts
│  │           │     │     └─ go2.component.ts
│  │           │     ├─ home3.component.html
│  │           │     ├─ home3.component.scss
│  │           │     ├─ home3.component.spec.ts
│  │           │     └─ home3.component.ts
│  │           └─ home3-routes.ts
│  ├─ home4
│  │  ├─ ng-package.json
│  │  └─ src
│  │     └─ app
│  │        ├─ app.component.html
│  │        ├─ app.component.scss
│  │        ├─ app.component.spec.ts
│  │        ├─ app.component.ts
│  │        ├─ app.config.ts
│  │        ├─ app.routes.ts
│  │        └─ features
│  │           ├─ home4
│  │           │  └─ pages
│  │           │     ├─ go1
│  │           │     │  ├─ go1.component.html
│  │           │     │  ├─ go1.component.scss
│  │           │     │  ├─ go1.component.spec.ts
│  │           │     │  └─ go1.component.ts
│  │           │     ├─ go2
│  │           │     │  ├─ go2.component.html
│  │           │     │  ├─ go2.component.scss
│  │           │     │  ├─ go2.component.spec.ts
│  │           │     │  └─ go2.component.ts
│  │           │     ├─ home4.component.html
│  │           │     ├─ home4.component.scss
│  │           │     ├─ home4.component.spec.ts
│  │           │     └─ home4.component.ts
│  │           └─ home4-routes.ts
│  └─ shared
│     ├─ ng-package.json
│     ├─ src
│     │  └─ lib
│     │     ├─ directives
│     │     │  └─ back.directive.ts
│     │     ├─ enums
│     │     │  ├─ auth-button.enum.ts
│     │     │  ├─ system-local-storage.enum.ts
│     │     │  └─ system-message-severity.enum.ts
│     │     └─ services
│     │        ├─ loading-mask.service.ts
│     │        ├─ navigation.service.ts
│     │        ├─ storage.service.ts
│     │        ├─ system-confirmation.service.ts
│     │        └─ system-message.service.ts
│     ├─ tsconfig.lib.json
│     └─ tsconfig.lib.prod.json
└─ src
   ├─ app
   │  ├─ app.component.html
   │  ├─ app.component.scss
   │  ├─ app.component.spec.ts
   │  ├─ app.component.ts
   │  ├─ app.config.ts
   │  ├─ app.routes.ts
   │  ├─ core
   │  │  ├─ guards
   │  │  │  ├─ auth.guard.spec.ts
   │  │  │  └─ auth.guard.ts
   │  │  ├─ interceptor
   │  │  │  ├─ http-error.interceptor.spec.ts
   │  │  │  ├─ http-error.interceptor.ts
   │  │  │  ├─ jwt.interceptor.spec.ts
   │  │  │  └─ jwt.interceptor.ts
   │  │  ├─ models
   │  │  │  ├─ auth.model.ts
   │  │  │  ├─ button-list.model.ts
   │  │  │  ├─ id-buttonlist.model.ts
   │  │  │  └─ user-profile.model.ts
   │  │  └─ services
   │  │     ├─ auth-menu.service.spec.ts
   │  │     ├─ auth-menu.service.ts
   │  │     ├─ auth.service.spec.ts
   │  │     ├─ auth.service.ts
   │  │     ├─ mock.service.spec.ts
   │  │     └─ mock.service.ts
   │  ├─ features
   │  ├─ layout
   │  │  ├─ components
   │  │  │  ├─ access-denied
   │  │  │  │  ├─ access-denied.component.html
   │  │  │  │  ├─ access-denied.component.scss
   │  │  │  │  ├─ access-denied.component.spec.ts
   │  │  │  │  └─ access-denied.component.ts
   │  │  │  ├─ error
   │  │  │  │  ├─ error.component.html
   │  │  │  │  ├─ error.component.scss
   │  │  │  │  ├─ error.component.spec.ts
   │  │  │  │  └─ error.component.ts
   │  │  │  ├─ layout-sidebar
   │  │  │  │  ├─ layout-sidebar.component.html
   │  │  │  │  ├─ layout-sidebar.component.scss
   │  │  │  │  ├─ layout-sidebar.component.spec.ts
   │  │  │  │  └─ layout-sidebar.component.ts
   │  │  │  ├─ layout-topbar
   │  │  │  │  ├─ layout-topbar.component.html
   │  │  │  │  ├─ layout-topbar.component.scss
   │  │  │  │  ├─ layout-topbar.component.spec.ts
   │  │  │  │  └─ layout-topbar.component.ts
   │  │  │  ├─ login
   │  │  │  │  ├─ login.component.html
   │  │  │  │  ├─ login.component.scss
   │  │  │  │  ├─ login.component.spec.ts
   │  │  │  │  └─ login.component.ts
   │  │  │  └─ not-found
   │  │  │     ├─ not-found.component.html
   │  │  │     ├─ not-found.component.scss
   │  │  │     ├─ not-found.component.spec.ts
   │  │  │     └─ not-found.component.ts
   │  │  ├─ models
   │  │  │  ├─ sidebar-menu-rep.model.ts
   │  │  │  └─ sidebar-menu.model.ts
   │  │  ├─ pages
   │  │  │  └─ layout-main
   │  │  │     ├─ layout-main.component.html
   │  │  │     ├─ layout-main.component.scss
   │  │  │     ├─ layout-main.component.spec.ts
   │  │  │     └─ layout-main.component.ts
   │  │  └─ services
   │  │     ├─ sidebar.service.spec.ts
   │  │     └─ sidebar.service.ts
   │  └─ shared
   ├─ environments
   │  ├─ environment.dev.ts
   │  ├─ environment.prod.ts
   │  └─ environment.ts
   ├─ favicon.ico
   └─ styles
      └─ _variables.scss

```