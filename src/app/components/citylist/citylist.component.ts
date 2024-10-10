import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = [
    'Caloocan',
  ];
  cityName: string = '';

  addCities() {
    this.cityList.push(this.cityName);
  }
}
