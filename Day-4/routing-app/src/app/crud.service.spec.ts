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
    req.flush({...newMyUser,name:"testing"});
  })
});
