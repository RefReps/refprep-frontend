import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-area',
  templateUrl: './drag-area.component.html',
  styleUrls: ['./drag-area.component.css']
})
export class DragAreaComponent implements OnInit {
  dragListName = "Content for Module"

  @Input() content = []
  // [
  //   {name: "Basketball - Court 1", type: "video"},
  //   {name: "Review Quiz", type: "quiz"},
  //   {name: "Basketball - Court 1", type: "video"},
  // ]
  
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
