import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = [
    'BGC Stopover Pavilion',

  ]
  buildingName: string = '';

  addBuildings() {
    this.buildingList.push(this.buildingName);
  }
}
