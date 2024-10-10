import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventoryList: string[] = [
    'Rice',
  ];
  inventoryName: string = '';

  addInventories() {
    this.inventoryList.push(this.inventoryName);
  }
}
