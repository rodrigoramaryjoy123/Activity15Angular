import { Component } from '@angular/core';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationeryList: string[] = [
    'Notebook',
    'Pen',
    'Pencil',
    'Eraser',
    'Highlighter'
  ];
  stationeryName: string = '';

  addStationeries() {
    this.stationeryList.push(this.stationeryName);
  }
}
