import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = [
    

  ];
  studentName: string = '';

  addStudents() {
    this.studentList.push(this.studentName);
  }
}
