import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { UserService } from './services/user/user.services';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [RemoteEntryComponent, UserService],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'user',
        component: UserService,
      }
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
