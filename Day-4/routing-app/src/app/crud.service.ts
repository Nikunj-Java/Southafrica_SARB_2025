import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyUser } from './MyUser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  url:string="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  //get the users
  getUsers():Observable<MyUser[]>{
    return this.http.get<MyUser[]>(this.url);
  }

  //addUsers
  addUser(myuser:MyUser):Observable<MyUser>{
    return this.http.post<MyUser>(this.url,myuser)
  }

  //delete Service
  deleteUser(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  //update user
  updateUser(myuser:MyUser):Observable<MyUser>{
    return this.http.put<MyUser>(`${this.url}/${myuser.id}`,myuser);
  }
  
}
