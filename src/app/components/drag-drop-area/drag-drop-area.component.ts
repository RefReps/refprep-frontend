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
    {orderInModule: 1, contentName: 'Intro to the basics', onModel: 'movie'},
    {orderInModule: 2, contentName: 'Intro to fundementals', onModel: 'movie'},
    {orderInModule: 3, contentName: 'Quiz', onModel: 'description'},
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
      ele.orderInModule = index + 1;
    })
  }
}
