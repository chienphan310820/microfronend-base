import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { FormsModule } from '@angular/forms';
import { Interceptor } from '../../../../../dashboard/src/app/interceptors/intercept/interceptors';
@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],  bootstrap: [UserComponent]
})
export class AppModule { }
