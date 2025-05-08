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
   
  isEditMode:boolean=false;
   

  ngOnInit(): void {
   this.loadUsers()
  }

  //Retrive Users
  loadUsers(){
    this.myservice.getUsers().subscribe(data=>this.myusers=data)
  }

  //add & Update the users
  SaveUser(){

    if(this.isEditMode && this.newUser.id){

      this.myservice.updateUser(this.newUser).subscribe(()=>{
        this.newUser={name:'',email:''};
        this.resetForm();
        this.loadUsers();

      });
    }else{
      this.myservice.addUser(this.newUser).subscribe(()=>{
        this.newUser={name:'',email:''};
        this.resetForm();
        this.loadUsers();
      });
    }
    
  }

  editUser(myuser:MyUser){
    this.newUser={...myuser};
    this.isEditMode=true;
  }


  //delete user
  deletUser(id:number){
    this.myservice.deleteUser(id).subscribe(()=>this.loadUsers());
  }

  resetForm(){
    this.newUser={name:'',email:''};
    this.isEditMode=false;

  }
}
