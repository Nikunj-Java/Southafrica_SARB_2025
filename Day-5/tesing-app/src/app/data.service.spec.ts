// data.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { PostClass } from './PostClass';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure all requests are handled
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all posts using GET',()=>{
    service.getAllPosts().subscribe(posts=>{
      expect(posts.length).toBeGreaterThanOrEqual(1);
    });
    const req= httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');
     
  })

  
   
  

  
});
