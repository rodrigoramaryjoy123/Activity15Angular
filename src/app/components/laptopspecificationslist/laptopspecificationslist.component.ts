import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent {
  laptopSpecificationList: string[] = [
    'Intel Core i5',
  ];
  laptopSpecificationName: string = '';

  addLaptopSpecifications() {
    this.laptopSpecificationList.push(this.laptopSpecificationName);
  }
}
