import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [RemoteEntryComponent, UserComponent],
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
        component: UserComponent,
      }
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
