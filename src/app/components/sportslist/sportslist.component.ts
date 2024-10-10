  import { Component } from '@angular/core';

  @Component({
    selector: 'app-sportslist',
    templateUrl: './sportslist.component.html',
    styleUrl: './sportslist.component.css'
  })
  export class SportslistComponent {
    sportList: string[] = [
      'Basketball',
      'Soccer',
      'Tennis',
      'Basebell',
      'Swimming'
    ];
    sportName: string = '';

    addSports() {
      this.sportList.push(this.sportName);
    }
  }
