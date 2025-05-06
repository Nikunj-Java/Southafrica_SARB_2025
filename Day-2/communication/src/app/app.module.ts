import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { ChildComponent } from './child/child.component';
import { DirectivesComponent } from './directives/directives.component';
import { WeatherComponent } from './weather/weather.component';
import { ChangeColorDirective } from './changeColorDirective';
import { HighLightDirective } from './highLightDirective';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DirectivesComponent,
    WeatherComponent,
    ChangeColorDirective,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
