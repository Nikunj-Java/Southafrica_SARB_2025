import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  users:any=[
    {name:'nikunj soni',email:'nikunj@gmail.com',job:'trainer',country:'India'},
    {name:'Alice',email:'alice@gmail.com',job:'Service',country:'UK'},
    {name:'Jhon',email:'jhon@gmail.com',job:'Business',country:'USA'},
    {name:'Bob',email:'bob@gmail.com',job:'labour worker',country:'China'},
    {name:'Charlie',email:'charlie@gmail.com',job:'intern',country:'SA'},
  ];

  flag:boolean=false;
  show(){
    this.flag=!this.flag;
  }

  public day=new Date().getDay();
}
