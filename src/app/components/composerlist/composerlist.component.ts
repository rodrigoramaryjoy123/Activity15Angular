import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composerList: string[] = [
    'Justin Vasquez',
    'Micheal Pangilan',
  ];
  composerName: string = '';

  addComposers() {
    this.composerList.push(this.composerName);
  }
}
