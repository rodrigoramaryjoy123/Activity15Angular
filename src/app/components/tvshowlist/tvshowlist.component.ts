import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  tvShowList: string[] = [
    'The General Daughter',
    'Ang Probinsyano (Filipino)',
    'Batang Quiapo',

  ];
  tvShowName: string = '';

  addTvShows() {
    this.tvShowList.push(this.tvShowName);
  }
}
