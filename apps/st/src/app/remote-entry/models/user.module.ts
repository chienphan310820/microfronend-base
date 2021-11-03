import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UserService } from '../services/user.services';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserService,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [UserService]
})
export class AppModule { }
