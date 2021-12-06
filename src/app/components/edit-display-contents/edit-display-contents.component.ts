import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-display-contents',
  templateUrl: './edit-display-contents.component.html',
  styleUrls: ['./edit-display-contents.component.css']
})
export class EditDisplayContentsComponent implements OnInit {

  @Input() moduleId: string = '';
  contents: Content[] = [];

  constructor(
    private Api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getContents()
  }

  getContents(): void {
    this.Api.getContents(this.moduleId)
      .subscribe(info => this.contents = info)
  }

  onDrop(event: any) {
    const contentId = this.contents[event.previousIndex]._id
    if (event.previousContainer === event.container && contentId) {
      this.updateContentOrder(contentId, event.currentIndex + 1)
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  updateContentOrder(contentId: string, newOrder: number): void {
    const form = new FormData()
    form.append('contentOrder', newOrder.toString())
    this.Api.updateContent(contentId, form)
  }

}
