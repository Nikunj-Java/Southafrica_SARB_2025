import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  currentDate = new Date().toDateString();

  weatherData = [
    { date: new Date().toDateString(), type: 'Sunny', temp: 30 },
    { date: new Date(Date.now() + 1 * 86400000).toDateString(), type: 'Cloudy', temp: 24 },
    { date: new Date(Date.now() + 2 * 86400000).toDateString(), type: 'Rainy', temp: 22 },
    { date: new Date(Date.now() + 3 * 86400000).toDateString(), type: 'Sunny', temp: 31 },
    { date: new Date(Date.now() + 4 * 86400000).toDateString(), type: 'Cloudy', temp: 26 },
    { date: new Date(Date.now() + 5 * 86400000).toDateString(), type: 'Sunny', temp: 40 },
  ];

  getIconPath(type: string): string {
    switch (type.toLowerCase()) {
      case 'sunny': return 'assets/weather.png';
      case 'cloudy': return 'assets/cludy.png';
      case 'rainy': return 'assets/rainy.png';
      default: return '';
    }
  }
}
