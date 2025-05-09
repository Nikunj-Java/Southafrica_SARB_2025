import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { CrudComponent } from './crud.component';
import { CrudService } from '../crud.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
      declarations: [CrudComponent],
      imports:[HttpClientTestingModule,FormsModule ],
      providers:[CrudService]
    });
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
