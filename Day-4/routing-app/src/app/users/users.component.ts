import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //DI
  constructor(private service:UserService){}
 
  users:UserClass[];
  ngOnInit(): void {
    this.service.getAllUsers().subscribe(result=>this.users=result)
  }
}
