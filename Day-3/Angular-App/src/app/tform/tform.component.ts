import { Component } from '@angular/core';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent {

  fname:string="";
  lname:string="";
  email:string="";
  password:string="";

  onSubmit(){
    alert("FormSubmitted Successfully");
    console.log(this.fname+" "+this.lname);
    this.fname="",this.lname="";this.email="";this.password="";
  }


}
