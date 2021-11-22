import { Component } from '@angular/core';

@Component({
  selector: 'ng-base-mfe-st-entry',
  template: `
  <div class="remote-entry">
    <h2>Soan Thao Component</h2>
  </div>
  <a routerLink="user">Nhan vao day de hien thi danh sach user</a>
  `,
  styles: [
    `
      .remote-entry {
        background-color: red;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent{}
