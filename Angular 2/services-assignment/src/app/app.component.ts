import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService,CounterService]
})
export class AppComponent implements OnInit{
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    console.log(this.userService.activeUsers);
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;   
  }


}
