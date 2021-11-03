import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
export class RemoteEntryComponent implements OnInit{
  results;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
    console.log(data);
    this.results = data;
  });
}
}
