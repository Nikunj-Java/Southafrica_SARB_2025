import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['pdata'],
  outputs:['cevent']
})
export class ChildComponent {

  pdata:string="";
  cevent= new EventEmitter<String>();
  
  onChange(value:string){
    this.cevent.emit(value);
  }
}
