import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomList: string[] = [
    'Room 1 - Computer Lab',
  ];
  classroomName: string = '';

  addClassrooms() {
    this.classroomList.push(this.classroomName);
  }
}
