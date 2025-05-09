import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../data.service';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async() => {
   await TestBed.configureTestingModule({
      declarations: [DemoComponent],
      imports:[HttpClientTestingModule],
      providers:[DataService]
    }).compileComponents();
    
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
      const fixture = TestBed.createComponent(DemoComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain('my demo');
    });
});
