import { Component } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent {
  tourList: string[] = [
    'Boracay Island',
    'Palawan (El Nido and Coron)',
    'Banaue Rice Terraces',
    'Chocolate Hills, Bohol',
    'Vigan City'
  ];
  tourName: string = '';

  addTours() {
    this.tourList.push(this.tourName);
  }
}
