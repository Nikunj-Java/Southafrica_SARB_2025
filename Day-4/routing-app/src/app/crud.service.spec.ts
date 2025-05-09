import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
import { CrudService } from './crud.service';
import { MyUser } from './MyUser';

describe('CrudService', () => {
  let service: CrudService;
  let httpMock:HttpTestingController;

   

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CrudService]
    });
    service = TestBed.inject(CrudService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new User',()=>{
    const newMyUser: MyUser={name: "testing",email: "testing@testmail.com"}
    service.addUser(newMyUser).subscribe((post)=>{
      expect(post).toEqual({...newMyUser,name:"testing"})
    })

    const req=httpMock.expectOne('http://localhost:3000/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.name).toEqual(newMyUser.name)
    
    req.flush({...newMyUser,name:"testing"});
  })

  it('should retrieve users from API via GET', () => {
    service.getUsers().subscribe(myusers => {
      expect(myusers.length).toBeGreaterThanOrEqual(1);
      
    });

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');
    
  });

  it('should delete a user via DELETE', () => {
    const userId = Number("1b52");

    service.deleteUser(userId).subscribe(response => {
      expect(response).toBeTruthy;
    });

    const req = httpMock.expectOne(`${service.url}/${userId}`);
    expect(req.request.method).toBe('DELETE');
    
  });

  it('should update a user via PUT', () => {
    const updatedUser: MyUser = {name: 'John Updated', email: 'john.updated@example.com' };

    service.updateUser(updatedUser).subscribe(user => {
      expect(user).toEqual(updatedUser);
    });

    const req = httpMock.expectOne(`${service.url}/${updatedUser.id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedUser);
    req.flush(updatedUser);
  });

});
