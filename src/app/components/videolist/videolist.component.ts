import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: string[] = [
    ' Programming Basics',
    ' Web Development',
    'Frontend Frameworks',
    'Backend Development',
    'Version Control',

  ];
  videoName: string = '';

  addVideos() {
    this.videoList.push(this.videoName);
  }
}
