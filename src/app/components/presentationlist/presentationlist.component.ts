import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentationList: string[] = [
    'The Daily',
  ];
  presentationName: string = '';

  addPresentations() {
    this.presentationList.push(this.presentationName);
  }
}
