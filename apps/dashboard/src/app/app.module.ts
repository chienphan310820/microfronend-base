import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [AppComponent, UserComponent, LoginComponent, RegisterComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'home/gn',
          loadChildren: () =>
            import('gn/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'home/st',
          loadChildren: () =>
            import('st/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    RouterModule.forChild(
      [
        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'home',
          component: HomeComponent,
        }
      ]
    ),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
