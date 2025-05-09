import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  add(a:number,b:number){
    return a+b;
  }

  subtract(a:number,b:number){
    return a-b;
  }

  multiply(a:number,b:number){
    return a*b;
  }

  divide(a:number,b:number){
    if(b === 0){
      throw new Error('Cannot divide by zero');
    }
    return a/b;
  }

  isEven(num:number):boolean{
    return num%2 === 0;
  }
}
