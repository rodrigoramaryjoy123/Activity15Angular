import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrl: './foodmenu.component.css'
})
export class FoodmenuComponent {
  foodList: string[] = [
    'Adobo',
    'Sinigang',
    'Lechon',
    'Pancit',
    'Lumpiang Shanghai'
  ];
  foodName: string = '';

  addFoods() {
    this.foodList.push(this.foodName);
  }
}
