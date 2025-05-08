import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="https://jsonplaceholder.typicode.com/users";

  //inject the Dependency
  constructor(private http:HttpClient) { }

  getAllUsers():Observable <UserClass[]>{
    return this.http.get<UserClass[]>(this.url)
  }

  
}
