import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  frameworkList: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'Laravel',
    'Django'
  ];
  frameworkName: string = '';

  addFrameworks() {
    this.frameworkList.push(this.frameworkName);
  }
}
