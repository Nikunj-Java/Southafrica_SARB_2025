import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
 
describe('AppComponent', () => {

  
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

   

  it(`should have as title 'tesing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tesing-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Testing - APP');
  });
 
});
