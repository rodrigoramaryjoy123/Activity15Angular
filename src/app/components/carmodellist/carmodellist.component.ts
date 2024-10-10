import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[] = [
    'Toyota',
    
  ];
  carModelName: string = '';

  addCarModels() {
    this.carModelList.push(this.carModelName);
  }
}
