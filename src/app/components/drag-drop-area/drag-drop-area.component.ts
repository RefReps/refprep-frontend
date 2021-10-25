import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-drag-drop-area',
  templateUrl: './drag-drop-area.component.html',
  styleUrls: ['./drag-drop-area.component.css'],
})
export class DragDropAreaComponent {
  @Input() contentList: Content[] = [
    {order: 1, name: 'Intro to the basics', contentType: 'movie'},
    {order: 2, name: 'Intro to fundementals', contentType: 'movie'},
    {order: 3, name: 'Quiz', contentType: 'description'},
  ]

  drop(event: CdkDragDrop<Content[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updateOrdering()
    } 
    // else {
    //   transferArrayItem(event.previousContainer.data,
    //       event.container.data,
    //       event.previousIndex,
    //       event.currentIndex);
    // }
  }

  updateOrdering(): void {
    this.contentList.forEach((ele, index) => {
      ele.order = index + 1;
    })
  }
}
