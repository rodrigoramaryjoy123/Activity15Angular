import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languageList: string[] = [
    'Filipino',
    'English',
  ];
  languageName: string = '';

  addLanguages() {
    this.languageList.push(this.languageName);
  }
}
