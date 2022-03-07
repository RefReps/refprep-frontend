import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Content } from 'src/app/models/course';

@Component({
  selector: 'app-drag-area',
  templateUrl: './drag-area.component.html',
  styleUrls: ['./drag-area.component.css']
})
export class DragAreaComponent implements OnInit {
  dragListName = "Content for Module"

  content: Content[] = 
  [
    {name: "Basketball - Court 1", onModel: "Video"},
    {name: "Review Quiz", onModel: "Quiz"},
    {name: "Basketball - Court 1", onModel: "Video"},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
