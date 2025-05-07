import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { customPipes } from './CustomePipe';
import { CustomDatePipe } from './CustomDatePipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    customPipes, //<----define here
    CustomDatePipe//
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
