import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[] = [
    
  ];
  bookName: string = '';

  addBooks() {
    this.bookList.push(this.bookName);
  }
}
