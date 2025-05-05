import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  name:string="SARB Application";

  products:any=[
    {name:"pencile",price:"10",availability:"05-05-2025",rating:4.8},
    {name:"eraser",price:"5",availability:"02-05-2025",rating:4.7},
    {name:"scale",price:"8",availability:"10-05-2025",rating:5.0},
    {name:"books",price:"20",availability:"23-05-2025",rating:4.6},
    {name:"diary",price:"50",availability:"09-05-2025",rating:5.0},
  
  ]

  flag:boolean=false;

  show(){
    this.flag=!this.flag;
  }
}
