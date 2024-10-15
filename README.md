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
test-project2
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
│  │           ├─ app-routes.ts
│  │           └─ home
│  │              └─ pages
│  │                 ├─ home.component.html
│  │                 ├─ home.component.scss
│  │                 ├─ home.component.spec.ts
│  │                 └─ home.component.ts
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
│  │                 ├─ home2.component.html
│  │                 ├─ home2.component.scss
│  │                 ├─ home2.component.spec.ts
│  │                 └─ home2.component.ts
│  ├─ home3
│  │  └─ src
│  │     └─ app
│  │        ├─ app.component.html
│  │        ├─ app.component.scss
│  │        ├─ app.component.spec.ts
│  │        ├─ app.component.ts
│  │        ├─ app.config.ts
│  │        └─ app.routes.ts
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
   │  ├─ home3
   │  │  └─ pages
   │  │     ├─ go1
   │  │     │  └─ pages
   │  │     │     ├─ go1.component.html
   │  │     │     ├─ go1.component.scss
   │  │     │     ├─ go1.component.spec.ts
   │  │     │     └─ go1.component.ts
   │  │     ├─ go2
   │  │     │  └─ pages
   │  │     │     ├─ go2.component.html
   │  │     │     ├─ go2.component.scss
   │  │     │     ├─ go2.component.spec.ts
   │  │     │     └─ go2.component.ts
   │  │     ├─ home3.component.html
   │  │     ├─ home3.component.scss
   │  │     ├─ home3.component.spec.ts
   │  │     └─ home3.component.ts
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
```
angular18-micro-frontend
├─ .angular
├─ .editorconfig
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ gh-pages
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 06
│  │  │  ├─ 80b43f9c6ae05df91c576141f20ed411d07c7d
│  │  │  └─ fa9b1adbecb60767fbc89ffe675cb11280c71f
│  │  ├─ 08
│  │  │  └─ 569a87ed4287194b396769531486a536fff1b6
│  │  ├─ 09
│  │  │  ├─ 168dd24abe3b8b243691f6ea0b620df7f1c4d8
│  │  │  ├─ bfd7357b6d9855654fea4462f5d8ebb7695df7
│  │  │  ├─ eeabeded0907bcadd53291407f4fbd09b807f7
│  │  │  └─ f4c811029c32ada53de9eda30e63c69b58ffcf
│  │  ├─ 0a
│  │  │  └─ 43b83299ee353cf9467100918da9e8f8962886
│  │  ├─ 0b
│  │  │  └─ cb62ef2a298fe59aaf18702e738ef65cc62682
│  │  ├─ 0c
│  │  │  └─ 4e86b50cb57d37b93245136008bede05bb407b
│  │  ├─ 0d
│  │  │  └─ 92c8514d3bce6639960db0b554a268a7b808fd
│  │  ├─ 0e
│  │  │  └─ 3c14f05ad512d95d44442436ded0e1a924831c
│  │  ├─ 10
│  │  │  ├─ 0c2116fc3cca980de16ec298082c1acf8d9eea
│  │  │  └─ e546fcd5ddf5e23100273d9cf5d20fb92b5864
│  │  ├─ 11
│  │  │  └─ 969b4c2a5a1d862c55f9b9aeff7ca80dfceb4c
│  │  ├─ 13
│  │  │  └─ 89df62aecc2b567025c252d8fc648d9f06fd1f
│  │  ├─ 14
│  │  │  └─ 6da77b4da88d6361e972b2138ea227054025cd
│  │  ├─ 15
│  │  │  └─ c32a8b41c9d540df076923bf4f8daa45c026dc
│  │  ├─ 17
│  │  │  └─ a2803a5eea01db58d1e56e3636c56301c55cdf
│  │  ├─ 18
│  │  │  └─ d322e60122c7171f1720270087ed1014c4a757
│  │  ├─ 19
│  │  │  └─ 8e921a84108850ff637482cde70543fc1ddbef
│  │  ├─ 1b
│  │  │  ├─ 5b64db55ac332143c6c9a95fa8fc5b4fb60dc3
│  │  │  └─ a9d201b57f043f4d3abe49b019d3ec0784adf4
│  │  ├─ 1f
│  │  │  └─ a28de4d281fcbc83ee1f6dd3be911de77d2437
│  │  ├─ 20
│  │  │  └─ 0bb121e90e967864dec8380881c99e523495b2
│  │  ├─ 23
│  │  │  ├─ 59bf66def0a61beb2fb58133c1588388b2dbaf
│  │  │  └─ 6e8abcbabf8f8b2119775aeeafb6959591937a
│  │  ├─ 25
│  │  │  └─ 4686d5fc0e773b92ecd6d9d40ced636338dd2b
│  │  ├─ 26
│  │  │  ├─ 25e71f0440a5353701aced674d629ca8a8aca5
│  │  │  └─ fb21983d644ddef31969241296e5aaa5c0428c
│  │  ├─ 27
│  │  │  ├─ 3208ce676b3255d431e9d439d03d533a97a903
│  │  │  └─ c54a8bb044b26d18598c4ede01708dc51a4665
│  │  ├─ 2b
│  │  │  ├─ a25d545e43bc6823bfc8d08acfbe5811eb20bc
│  │  │  ├─ c51b1752b78fd406b1b371bcdff5b4ea5dada2
│  │  │  ├─ ed580264beab46c5d2cbd3f38120aa4dbf1523
│  │  │  └─ fb97333c92176bb1cb7c24bb3d24a7d456f266
│  │  ├─ 2c
│  │  │  └─ 91ec5eaf5482ff148e02bd29e7734968fdfd7f
│  │  ├─ 2d
│  │  │  ├─ 33eb9da8b372d89c095ab901a62f95717a4ebf
│  │  │  └─ 9cf233898566f7196c0f2a38c77ad536ea186f
│  │  ├─ 2e
│  │  │  └─ 58a34b569a8c23ff370c72c91d72a6dc592d0c
│  │  ├─ 32
│  │  │  └─ 66edc7995fdf3624421609e92b646f44398e60
│  │  ├─ 34
│  │  │  ├─ 12973713c6a0846efb8e7975091d463ec97cbb
│  │  │  └─ 756e1c1cdf02884678e614f359c1551f1f5789
│  │  ├─ 35
│  │  │  ├─ b00f3463311f2afe0fd0d9d5f696dbb992dff5
│  │  │  └─ fe3aa71d1c7d80426a06bb27a02125968e0a58
│  │  ├─ 36
│  │  │  ├─ 093e1879779624f181733152bb55d71a711d3b
│  │  │  └─ da2453c230e33168d11d01fd5aeca0ed1f9f6e
│  │  ├─ 37
│  │  │  ├─ 37fa89a08a3fa5dd2c11edfff5c33e18522e19
│  │  │  ├─ 75b37e3bbc6659e266676de37fffdd7cfebb5c
│  │  │  └─ d0b25b973a6b0a75ce1a0e8d297501e885fef5
│  │  ├─ 39
│  │  │  └─ b6e1393a7c6e97dd7a6fd476b917e24003678a
│  │  ├─ 3a
│  │  │  └─ 24238cd6432934863b529232721a74cef3712f
│  │  ├─ 3b
│  │  │  ├─ 4320b5ac379c7050480628b00a48136642ecb2
│  │  │  └─ 89dac6f4a0c5978b836b82e8ea4adee147f899
│  │  ├─ 42
│  │  │  └─ 1fd8fac8e8317bc87fa0e2d01221f1d9c783a9
│  │  ├─ 43
│  │  │  └─ 7cb6722726935483be5f97b3d47489319aee35
│  │  ├─ 44
│  │  │  └─ 13476c11c6d53f2b0005a2f83b886f33abfc62
│  │  ├─ 46
│  │  │  └─ 3402265b4811f15053ade949476f09f35cbf55
│  │  ├─ 47
│  │  │  ├─ 117c889765da6bd7d9f859a2cc697be0e111c6
│  │  │  ├─ 26dd801f3400bb65bb26afef9ecea5a5bb6959
│  │  │  ├─ e258f9308ca1f44b1208cf7590a8115de93869
│  │  │  ├─ ef0aa50a148967fb4557cfc8689f49826e7802
│  │  │  └─ fd8921219babe0920522f85ac7a250c7af2c12
│  │  ├─ 49
│  │  │  └─ 7878113786f4fffda8f76c43f375d182074245
│  │  ├─ 4b
│  │  │  ├─ 6977f7188db08547ba2feeadcc7cac9043b06b
│  │  │  └─ 95c86a9b08f14cc228b17dac94b6c4575014f6
│  │  ├─ 4c
│  │  │  ├─ 0428650669d6ca0deb8c6467224643bd5880bd
│  │  │  └─ b705d1017324c04c92b50e824df759ceb74ffb
│  │  ├─ 51
│  │  │  ├─ 379d4e1fa31bbd8557becdef739cff38e6b6cc
│  │  │  └─ abeec9460154ab4f180463c9827f8489575c1e
│  │  ├─ 52
│  │  │  └─ 45af831a03335f44eb5a305edf4036dcf013e0
│  │  ├─ 54
│  │  │  ├─ 6e81cb7955a7de7171a289db175f25c4123f3b
│  │  │  └─ bed356ea321c6c6d9130098584ee4ddf0cf3db
│  │  ├─ 55
│  │  │  ├─ 1e7074c5e9502916da53bc459cc52016380457
│  │  │  └─ b8ad45fc20c11636a26d6e682571042fa7e4c3
│  │  ├─ 56
│  │  │  └─ bea6b4abc4108a0779f7f813177c486ea222f0
│  │  ├─ 57
│  │  │  ├─ 614f9c967596fad0a3989bec2b1deff33034f6
│  │  │  ├─ d5d602ecd4593b70d718c17810602e6210bf18
│  │  │  └─ ed50153a7a9f02faf57f5508543de6f48c50ad
│  │  ├─ 58
│  │  │  └─ cfd17c14763f686b18e089ab91eb70c25286a5
│  │  ├─ 59
│  │  │  ├─ 475944bcc015e10634332062e84969cd2a5e19
│  │  │  └─ d9a3a3e73ffc640517ef488f6f89d6270195d1
│  │  ├─ 5a
│  │  │  ├─ 4c6223303587843b8c49685cb893365f67708d
│  │  │  └─ a94881347468b96a74dd9c0e6a57bbcc3fd084
│  │  ├─ 5c
│  │  │  └─ 8cd2ee921aeaa1d4890f9a16af231debb5152c
│  │  ├─ 5d
│  │  │  ├─ 0d896e7964e4c0701136f3f9de1ed50b34e031
│  │  │  ├─ 4109ed158d2df67dd2630eaf2afa90043f7836
│  │  │  └─ e0f92cce9816de718e144ee5b3c429ed719bc6
│  │  ├─ 5e
│  │  │  └─ c8cc81fc6816f83b8fdf8d64997f0f15a1ce20
│  │  ├─ 5f
│  │  │  ├─ 227eb96453bd00430ac498097999397728c032
│  │  │  └─ b748d9207a99686549d6ef1415527dc544dd0f
│  │  ├─ 62
│  │  │  └─ c47a2a1bef82a55516f6a16474c75d07267498
│  │  ├─ 63
│  │  │  ├─ 91ae3df6069044cdc0b86b3685fb2214a4a79a
│  │  │  └─ b8b69faef9dcf7cf845b9924ce0a14360f701d
│  │  ├─ 64
│  │  │  └─ 0788ea81c28967d7b0687874e33087a0bed992
│  │  ├─ 65
│  │  │  └─ 794cb59d5394c6dc8a74f7f37c91e3c9af7ca8
│  │  ├─ 68
│  │  │  └─ 889d22d920e3b78febae9e5d323c717887961e
│  │  ├─ 6a
│  │  │  └─ 8da4f3f59526b81e8d4e5e10ab3acfdfb006fe
│  │  ├─ 6d
│  │  │  └─ ec3d1f12ce93a1c9ae9d2979ba5f7c930f7ee8
│  │  ├─ 6e
│  │  │  └─ 7e08a330c802940ac0a41e396ed11183178c23
│  │  ├─ 72
│  │  │  ├─ 22ec4593451db87f58d3f68e788907a457fad9
│  │  │  └─ 368e03d3f41d7bec8c2f147c12caba5ad5f33c
│  │  ├─ 73
│  │  │  ├─ 7296c4066159d46e578cc74073018a868a91ed
│  │  │  └─ f0517d2da7cafbfd4dae5ddfdf2d891c4d4b1d
│  │  ├─ 74
│  │  │  └─ 4ec6ab4c7d0c81d55ff0bfb2e4617648dde311
│  │  ├─ 78
│  │  │  └─ 51b0e71d7d038b0d7cacfd292b181ea13a991d
│  │  ├─ 7d
│  │  │  └─ 04862b9cdbd6b48e3cf1c92701221f484c1f0a
│  │  ├─ 7e
│  │  │  ├─ bb2820486cc2c61657cc160ffbf6aab4756185
│  │  │  └─ d0b4f782adff556abf843e3e05bdaa33fa68f5
│  │  ├─ 80
│  │  │  └─ 955b050514ab89957988f28b6c205606cce249
│  │  ├─ 81
│  │  │  └─ d61c6cef8f309972d5b47a38683b586e1a4e97
│  │  ├─ 82
│  │  │  ├─ 0f4c17341a9493b7e87daf18d783685640abdf
│  │  │  ├─ 2278fd6c1e95469072ca7400e3712fd3f0ed47
│  │  │  ├─ 7b36d92e05ec20105055764fd4f372a0a0534c
│  │  │  └─ 86e80ee57f490e3e832c9466192cd949010e44
│  │  ├─ 83
│  │  │  └─ a5de88669f0f5656b57e83548dc292dc750488
│  │  ├─ 85
│  │  │  └─ 69031280de69d42df9af1055959387a45c5cac
│  │  ├─ 88
│  │  │  └─ 82acf16874c5becd9a8028af9706a0c4f88400
│  │  ├─ 8a
│  │  │  ├─ 08669d4f195a892a71e60c26913837b0f4f833
│  │  │  ├─ 2c7974634f4d53aa8f640bbbd32d7e16645121
│  │  │  └─ c9d990c42715d4ae8df910c971e73733fe5c9b
│  │  ├─ 8b
│  │  │  ├─ 3f60345e3e11d0b7eb430f62cfa3f6876d26a5
│  │  │  └─ e5ef2fd34cd8fc16bfe1fd2536937e91c18399
│  │  ├─ 8c
│  │  │  └─ b3683a8ce29e8a38035add2a088b8f1f2c77ef
│  │  ├─ 90
│  │  │  ├─ 3fed1692f03695e4533df9af3baf4c120edd8c
│  │  │  └─ d4ee0072ce3fc41812f8af910219f9eea3c3de
│  │  ├─ 92
│  │  │  ├─ 15caac46fb3bee935fb9453b7055d2e1aef5b6
│  │  │  └─ 45b422e2dfac71100d0fcc2f4dd1dd5a7b9887
│  │  ├─ 93
│  │  │  └─ d3496287382826070829dda928b457cad414d8
│  │  ├─ 94
│  │  │  ├─ a82ae24787ba7e4686f0815c449ad4e17f8926
│  │  │  ├─ cc0021a92a01274b571cd361629e3693a6d642
│  │  │  └─ d479df369ae811dbbccd869358f731360be586
│  │  ├─ 95
│  │  │  └─ e5f79cda7cb7a24591bcc40f86f646408479d1
│  │  ├─ 96
│  │  │  ├─ 53e837dbecf9f1baf60866bf22de8f2d67ef73
│  │  │  └─ 853af1011c1ed4b43350021f789b0b0cc6c9a0
│  │  ├─ 9c
│  │  │  └─ 5d6768f98f4b91b6bd97ca929fb61b5ceeb774
│  │  ├─ 9f
│  │  │  ├─ 02dedfa360cf31fabc7b7ab373fad9d802a17d
│  │  │  └─ 9482c442331159d74fc0a3f54b448c70b292c1
│  │  ├─ a0
│  │  │  ├─ 104a55223b06bf6639da979ea145796af57a61
│  │  │  ├─ c08b587eb379196364094b7a64c93db996e9af
│  │  │  └─ e529a10d97d4d00e3c72bc6882c40dc5c78cbf
│  │  ├─ a1
│  │  │  └─ e7d6f864c12b24d39204782ce2972f2091ca35
│  │  ├─ a2
│  │  │  ├─ 1a5e637890bc6ba69a682a06e2d502f0b12c85
│  │  │  ├─ 5d683d324429c1468658198413e28a0a783850
│  │  │  ├─ e5af66628d222cd54129aa6742400a1b7d19f1
│  │  │  └─ f9addca5426a4585a98d2e59f0a489823344d6
│  │  ├─ a5
│  │  │  ├─ cefd44a53a56488b8b861724b123ce938fd2ba
│  │  │  └─ e67c0f276876e4d7e6000f38fc5c2473331454
│  │  ├─ a7
│  │  │  ├─ 98ab6a4dd8d2963e2a130601c2b5ae37ea17ca
│  │  │  └─ e48bb8ba57f882e120f6d3ceb7ca4f280e2e4e
│  │  ├─ aa
│  │  │  └─ a1dfc90665ae7dcf9930017882bd958542acba
│  │  ├─ ab
│  │  │  └─ 0433903dedb8e0a658ae771c6e7ec7e543a4af
│  │  ├─ ad
│  │  │  └─ 7dd21586fa74907578049eef9a6b38e6a56769
│  │  ├─ af
│  │  │  └─ 42cca0c142ceb565bcc4f65c4fa330928cf17e
│  │  ├─ b0
│  │  │  └─ 1b791166684bb60987db711e758c279dd48c3c
│  │  ├─ b2
│  │  │  └─ 079218e731b5c0341fe67b4d3bb72030498715
│  │  ├─ b3
│  │  │  └─ f1ecf44a54372bf90afbb60491417242b8769c
│  │  ├─ b6
│  │  │  └─ 734bd2f6051424efe05339229ae56f7a5fb7cc
│  │  ├─ b7
│  │  │  └─ 3f195039fa2497ef91d8bd0f50a276a021948e
│  │  ├─ b8
│  │  │  ├─ 085f5addf6a5dfe35d2f42d58aec835bd08ec2
│  │  │  └─ c0eac46e8259e40fe5b521b7adb110b79fccd4
│  │  ├─ bd
│  │  │  ├─ 43357a37d00a8ed477e7c8ce6740f2083f0ac1
│  │  │  ├─ 6ed23c8a188b9c8fbcc30eaee5a6da9272ae5c
│  │  │  ├─ d7b9bfdfd7e46f9d8f392996a095d730b18fe2
│  │  │  └─ e1c6233e7ee7bddea1fc0eaa7e8a4a9e66f65c
│  │  ├─ bf
│  │  │  ├─ 9f92b4935a1e0ea8868a5438769c643a0466e3
│  │  │  └─ ea730640223009165c43254a808e41a77b25a0
│  │  ├─ c0
│  │  │  ├─ 26cc5f014c21ddc4522142eaf876f83f7fd34f
│  │  │  ├─ 5a85c0158e9be0cf2c15d1b421e8ba214c5d38
│  │  │  └─ 765203c94ae1bf8228ab967bdd0a3fffd776de
│  │  ├─ c1
│  │  │  └─ 7f59eb221d305c124a0ac059e8bc9f16437a44
│  │  ├─ c2
│  │  │  ├─ 249780fb61b0a825e363623d2405ed0b06396a
│  │  │  ├─ 4cd3db510567bd09695a89357e8082c100e066
│  │  │  └─ 7874517e858ee0facdc4c73a1bfdc6f3f78ddd
│  │  ├─ c3
│  │  │  └─ c85dff810f6241bca6029b7c2edce217e44204
│  │  ├─ c4
│  │  │  ├─ 2f1678550c4ca3d299f5044a44404980f90f40
│  │  │  └─ db350a3fc25c49d910ec5ed47c4b1e395367b3
│  │  ├─ c6
│  │  │  └─ 2091ca5d6c5ef1b93d204a2172653b7a683deb
│  │  ├─ c7
│  │  │  └─ dbff89d8e4fa34d4931c188eb500363003f3d7
│  │  ├─ cc
│  │  │  ├─ 3146a62927f77c987af51aaf473449e206989f
│  │  │  └─ 7b141350ffde43afce3ec16ea4d7b5007cde2b
│  │  ├─ cd
│  │  │  └─ f10c215e9dd7092cda49a400e7312dd447c09b
│  │  ├─ ce
│  │  │  └─ f72dcb63a2dd819ce7d04a8d1ff0c7fc2fdd22
│  │  ├─ cf
│  │  │  ├─ 1a888657963365e91683872f2564615bdef4fd
│  │  │  └─ 80d3d7a625b90c64d728781e85d2d597ba6363
│  │  ├─ d3
│  │  │  └─ 7df3c7d982e15ad5adb174818f7ae9194cfb4b
│  │  ├─ d4
│  │  │  └─ 52442b486d795ee5c838644bbb16fc55f4babe
│  │  ├─ d6
│  │  │  └─ 8d81fdb244ce775a6fdb1e0eb26400ca19dc41
│  │  ├─ d7
│  │  │  └─ a730e973cd4d5af2df10ce78257d1e20cea7ae
│  │  ├─ db
│  │  │  └─ 5d140c7991261ac4201ee0a242c720437c27c9
│  │  ├─ dc
│  │  │  └─ 39edb5f23a35f788cba146dd7337127ba6c5ab
│  │  ├─ dd
│  │  │  ├─ 267935a02008856706c10646f62ff7830972ae
│  │  │  ├─ 394bf3d38edae7b4c96d08844c6fff71c2688b
│  │  │  └─ e53f9ea0dc7974c2dccfb6777091af6cc82195
│  │  ├─ de
│  │  │  └─ fa519c48a1623ffbff32fcec2980953ac46dd6
│  │  ├─ df
│  │  │  ├─ 42d5d650d8926dc2b44165d39dcf9fdb01f648
│  │  │  └─ bfae0864d95c0a3c225e626b8bccc75ef96f79
│  │  ├─ e0
│  │  │  └─ 9b8986067e93e26a186936b347cc4ce05c8989
│  │  ├─ e4
│  │  │  ├─ 0712b8de394381944e707f50a542aa7ff7f704
│  │  │  ├─ 77ec3a00518dc890a0df6152417dd25d6a3de5
│  │  │  └─ d6f125d9bf1b5feace16d8c0ce1483ccc169dd
│  │  ├─ e5
│  │  │  └─ 44ce1d2e9bd91b67cfaa9cfd994367a72f090c
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ b4a13c1e004693a5d3b53c2a68cdf586cb5c1c
│  │  │  └─ c6efce96ca485dd302c714401e5ff5c662b4a2
│  │  ├─ e8
│  │  │  └─ 1e779f4bae7665097ee3ce6d6b1d98134f1307
│  │  ├─ e9
│  │  │  └─ 1a3c7b4aaf7b8ca6f4a712a243ce6c36114996
│  │  ├─ ea
│  │  │  └─ 2b36a6a984e3fa03c04e4a8c4ab4187948daf9
│  │  ├─ eb
│  │  │  ├─ 9b67ca8089ea89cd038b6addfeca49b86fff35
│  │  │  └─ a8b3a63ac932a5850c09b845195d276ea29b66
│  │  ├─ ec
│  │  │  └─ c0bdd7785e889595888f37c0d456e0cc1c35c4
│  │  ├─ ed
│  │  │  └─ b0f886865002dd35cefe0b427fcd88f3c8e4f5
│  │  ├─ ef
│  │  │  └─ 7f0f9f751129fdfd76bc358922ff4330e84fb4
│  │  ├─ f0
│  │  │  ├─ 02180a7a0e5b3cf4a7607a069ddd5e3337e13b
│  │  │  └─ 9a9c7d7ffa57f9accda0a904fb8a7f448785fb
│  │  ├─ f1
│  │  │  └─ 251cacf9dda3b3bd9dc5222583fafa110ffe8f
│  │  ├─ f8
│  │  │  └─ 3ce9e61f1c78900a556fe71ace1cfa8c3def8b
│  │  ├─ f9
│  │  │  └─ 030358354640bfbb2df86ac6ebb71037bd37f9
│  │  ├─ fb
│  │  │  ├─ 968320e9ad04a314751282319241661a03d6c8
│  │  │  ├─ a20cc4e0efddd51e4c71e31a105e39351428bb
│  │  │  └─ ed18927a64e5beec69514233959365b2ba8e73
│  │  ├─ fc
│  │  │  └─ 1e89ef8416cecd827c28d09ba2d3b762c33206
│  │  ├─ fd
│  │  │  └─ e255ee32f315a68b356cf34b9c8cc8beb6feb1
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ gh-pages
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ angular.json
├─ package-lock.json
├─ package.json
├─ projects
│  ├─ home
│  │  ├─ ng-package.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  └─ favicon.ico
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.scss
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.config.ts
│  │  │  │  ├─ app.routes.ts
│  │  │  │  └─ features
│  │  │  │     ├─ home
│  │  │  │     │  └─ pages
│  │  │  │     │     ├─ home.component.html
│  │  │  │     │     ├─ home.component.scss
│  │  │  │     │     ├─ home.component.spec.ts
│  │  │  │     │     └─ home.component.ts
│  │  │  │     └─ home-routes.ts
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  ├─ public-api.ts
│  │  │  └─ styles.scss
│  │  ├─ tsconfig.app.json
│  │  └─ tsconfig.spec.json
│  ├─ home2
│  │  ├─ ng-package.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  └─ favicon.ico
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.scss
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.config.ts
│  │  │  │  ├─ app.routes.ts
│  │  │  │  └─ features
│  │  │  │     ├─ home2
│  │  │  │     │  └─ pages
│  │  │  │     │     ├─ home2.component.html
│  │  │  │     │     ├─ home2.component.scss
│  │  │  │     │     ├─ home2.component.spec.ts
│  │  │  │     │     └─ home2.component.ts
│  │  │  │     └─ home2-routes.ts
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  ├─ public-api.ts
│  │  │  └─ styles.scss
│  │  ├─ tsconfig.app.json
│  │  └─ tsconfig.spec.json
│  ├─ home3
│  │  ├─ ng-package.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  └─ favicon.ico
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.scss
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.config.ts
│  │  │  │  ├─ app.routes.ts
│  │  │  │  └─ features
│  │  │  │     ├─ home3
│  │  │  │     │  └─ pages
│  │  │  │     │     ├─ go1
│  │  │  │     │     │  ├─ go1-routes.ts
│  │  │  │     │     │  └─ pages
│  │  │  │     │     │     ├─ go1.component.html
│  │  │  │     │     │     ├─ go1.component.scss
│  │  │  │     │     │     ├─ go1.component.spec.ts
│  │  │  │     │     │     └─ go1.component.ts
│  │  │  │     │     ├─ go2
│  │  │  │     │     │  ├─ go2-routes.ts
│  │  │  │     │     │  └─ pages
│  │  │  │     │     │     ├─ go2.component.html
│  │  │  │     │     │     ├─ go2.component.scss
│  │  │  │     │     │     ├─ go2.component.spec.ts
│  │  │  │     │     │     └─ go2.component.ts
│  │  │  │     │     ├─ home3.component.html
│  │  │  │     │     ├─ home3.component.scss
│  │  │  │     │     ├─ home3.component.spec.ts
│  │  │  │     │     └─ home3.component.ts
│  │  │  │     └─ home3-routes.ts
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  ├─ public-api.ts
│  │  │  └─ styles.scss
│  │  ├─ tsconfig.app.json
│  │  └─ tsconfig.spec.json
│  ├─ home4
│  │  ├─ public
│  │  │  └─ favicon.ico
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ app.component.html
│  │  │  │  ├─ app.component.scss
│  │  │  │  ├─ app.component.spec.ts
│  │  │  │  ├─ app.component.ts
│  │  │  │  ├─ app.config.ts
│  │  │  │  ├─ app.routes.ts
│  │  │  │  └─ features
│  │  │  ├─ index.html
│  │  │  ├─ main.ts
│  │  │  └─ styles.scss
│  │  ├─ tsconfig.app.json
│  │  └─ tsconfig.spec.json
│  └─ shared
│     ├─ ng-package.json
│     ├─ package.json
│     ├─ README.md
│     ├─ src
│     │  ├─ lib
│     │  │  ├─ directives
│     │  │  │  └─ back.directive.ts
│     │  │  ├─ enums
│     │  │  │  ├─ auth-button.enum.ts
│     │  │  │  ├─ system-local-storage.enum.ts
│     │  │  │  └─ system-message-severity.enum.ts
│     │  │  └─ services
│     │  │     ├─ loading-mask.service.ts
│     │  │     ├─ navigation.service.ts
│     │  │     ├─ storage.service.ts
│     │  │     ├─ system-confirmation.service.ts
│     │  │     └─ system-message.service.ts
│     │  └─ public-api.ts
│     ├─ tsconfig.lib.json
│     ├─ tsconfig.lib.prod.json
│     └─ tsconfig.spec.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.config.ts
│  │  ├─ app.routes.ts
│  │  ├─ core
│  │  │  ├─ guards
│  │  │  │  ├─ auth.guard.spec.ts
│  │  │  │  └─ auth.guard.ts
│  │  │  ├─ interceptor
│  │  │  │  ├─ http-error.interceptor.spec.ts
│  │  │  │  ├─ http-error.interceptor.ts
│  │  │  │  ├─ jwt.interceptor.spec.ts
│  │  │  │  └─ jwt.interceptor.ts
│  │  │  ├─ models
│  │  │  │  ├─ auth.model.ts
│  │  │  │  ├─ button-list.model.ts
│  │  │  │  ├─ id-buttonlist.model.ts
│  │  │  │  └─ user-profile.model.ts
│  │  │  └─ services
│  │  │     ├─ auth-menu.service.spec.ts
│  │  │     ├─ auth-menu.service.ts
│  │  │     ├─ auth.service.spec.ts
│  │  │     ├─ auth.service.ts
│  │  │     ├─ mock.service.spec.ts
│  │  │     └─ mock.service.ts
│  │  ├─ features
│  │  ├─ layout
│  │  │  ├─ components
│  │  │  │  ├─ access-denied
│  │  │  │  │  ├─ access-denied.component.html
│  │  │  │  │  ├─ access-denied.component.scss
│  │  │  │  │  ├─ access-denied.component.spec.ts
│  │  │  │  │  └─ access-denied.component.ts
│  │  │  │  ├─ error
│  │  │  │  │  ├─ error.component.html
│  │  │  │  │  ├─ error.component.scss
│  │  │  │  │  ├─ error.component.spec.ts
│  │  │  │  │  └─ error.component.ts
│  │  │  │  ├─ layout-sidebar
│  │  │  │  │  ├─ layout-sidebar.component.html
│  │  │  │  │  ├─ layout-sidebar.component.scss
│  │  │  │  │  ├─ layout-sidebar.component.spec.ts
│  │  │  │  │  └─ layout-sidebar.component.ts
│  │  │  │  ├─ layout-topbar
│  │  │  │  │  ├─ layout-topbar.component.html
│  │  │  │  │  ├─ layout-topbar.component.scss
│  │  │  │  │  ├─ layout-topbar.component.spec.ts
│  │  │  │  │  └─ layout-topbar.component.ts
│  │  │  │  ├─ login
│  │  │  │  │  ├─ login.component.html
│  │  │  │  │  ├─ login.component.scss
│  │  │  │  │  ├─ login.component.spec.ts
│  │  │  │  │  └─ login.component.ts
│  │  │  │  └─ not-found
│  │  │  │     ├─ not-found.component.html
│  │  │  │     ├─ not-found.component.scss
│  │  │  │     ├─ not-found.component.spec.ts
│  │  │  │     └─ not-found.component.ts
│  │  │  ├─ models
│  │  │  │  ├─ sidebar-menu-rep.model.ts
│  │  │  │  └─ sidebar-menu.model.ts
│  │  │  ├─ pages
│  │  │  │  └─ layout-main
│  │  │  │     ├─ layout-main.component.html
│  │  │  │     ├─ layout-main.component.scss
│  │  │  │     ├─ layout-main.component.spec.ts
│  │  │  │     └─ layout-main.component.ts
│  │  │  └─ services
│  │  │     ├─ sidebar.service.spec.ts
│  │  │     └─ sidebar.service.ts
│  │  └─ shared
│  ├─ assets
│  │  ├─ .gitkeep
│  │  └─ mock
│  │     └─ api
│  │        └─ v1
│  │           └─ auth
│  │              ├─ current
│  │              │  └─ permissions.json
│  │              ├─ current.json
│  │              └─ login.json
│  ├─ environments
│  │  ├─ environment.dev.ts
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  ├─ styles
│  │  └─ _variables.scss
│  └─ styles.scss
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```