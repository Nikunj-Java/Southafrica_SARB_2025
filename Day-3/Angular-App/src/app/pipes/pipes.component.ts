import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name:string="My Name Is  Nikunj And I am FSD Trainer";
  pi:number=3.1415927
  a=0.12345;
  b=9876.54321;
  today=new Date();
  object={name:"Nikunj Soni",email:"nikunj@tetsmail.com",address:"India"}
}
