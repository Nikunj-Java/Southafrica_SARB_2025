import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { MyUser } from '../MyUser';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  constructor(private myservice: CrudService){  }

  myusers:MyUser[]=[];
  newUser:MyUser={name:'',email:''}

  ngOnInit(): void {
   this.loadUsers()
  }

  loadUsers(){
    this.myservice.getUsers().subscribe(data=>this.myusers=data)
  }

  //add the users
  addUser(){
    this.myservice.addUser(this.newUser).subscribe(()=>{
      this.newUser={name:'',email:''};
      this.loadUsers();
    });
  }
}
