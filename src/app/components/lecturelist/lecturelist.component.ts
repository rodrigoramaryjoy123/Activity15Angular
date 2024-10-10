import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = [
    'Fundamentals of Programming',
    'Web Development ',
    'Capstone 1 and 2 ',
    
  ];
  lectureName: string = '';

  addLectures() {
    this.lectureList.push(this.lectureName);
  }
}
