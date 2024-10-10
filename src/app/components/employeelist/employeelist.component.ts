import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeList: string[] = [
    
  ];
  employeeName: string = '';

  addEmployees() {
    this.employeeList.push(this.employeeName);
  }
}
