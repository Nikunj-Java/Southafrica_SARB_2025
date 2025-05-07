import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { customPipes } from './CustomePipe';
import { CustomDatePipe } from './CustomDatePipe';
import { TformComponent } from './tform/tform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    customPipes, //<----define here
    CustomDatePipe, TformComponent, RformComponent//
  ],
  imports: [
    FormsModule,//<--- needed for  template Driven Form Approach
    ReactiveFormsModule, //<-- needed for Reactive Form Approach
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
