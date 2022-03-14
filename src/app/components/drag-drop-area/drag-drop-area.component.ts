import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Content } from 'src/app/models/course';

@Component({
  selector: 'app-drag-drop-area',
  templateUrl: './drag-drop-area.component.html',
  styleUrls: ['./drag-drop-area.component.css'],
})
export class DragDropAreaComponent {
  @Input() contentList: Content[] = [
    {contentOrder: 1, name: 'Intro to the basics', onModel: 'Video'},
    {contentOrder: 2, name: 'Intro to fundementals', onModel: 'Video'},
    {contentOrder: 3, name: 'Quiz', onModel: 'Quiz'},
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
      ele.contentOrder = index + 1;
    })
  }
}
