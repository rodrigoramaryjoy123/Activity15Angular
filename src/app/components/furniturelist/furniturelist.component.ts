import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furnitureList: string[] = [
    'Sofa',
    'Dining Table',
  ];
  furnitureName: string = '';

  addFurnitures() {
    this.furnitureList.push(this.furnitureName);
  }
}
