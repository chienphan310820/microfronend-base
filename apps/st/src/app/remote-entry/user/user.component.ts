import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'ng-base-mfe-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    results;
    constructor(private userService: UserService) { }

    ngOnInit(): void {
      this.userService.getUsers().subscribe((data) => {
        console.log('AppComponent: getUsers', data);
        this.results = data;
      });
  }
}
