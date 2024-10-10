import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  computerHardwareList: string[] = [
    'Asus ROG Strix GTX 1660',
    'Intel Core i5-12400F',
    
  ];
  computerHardwareName: string = '';

  addComputerHardwares() {
    this.computerHardwareList.push(this.computerHardwareName);
  }
}
