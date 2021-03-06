import { ActivatedRoute, Router } from '@angular/router';
import { UpdateContentDateDialogComponent } from './../update-content-date-dialog/update-content-date-dialog.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { ContentDeleteFormComponent } from '../content-delete-form/content-delete-form.component';
import { QuizBuilderComponent } from '../quiz-builder/quiz-builder.component';
import { UpdateContentDialogComponent } from '../update-content-dialog/update-content-dialog.component';

@Component({
  selector: 'app-edit-display-contents',
  templateUrl: './edit-display-contents.component.html',
  styleUrls: ['./edit-display-contents.component.css']
})
export class EditDisplayContentsComponent implements OnInit {

  @Input() moduleId: string = '';
  courseId: string = ''
  contents: Content[] = [];

  constructor(
    private Api: ApiService,
    private DialogService: DialogService,
    private route: Router,
    private routeParams: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // get courseId from route params
    this.routeParams.params.subscribe(params => {
      this.courseId = params.courseId
    })
    this.getContents()
  }

  onEditClick(content: Content) {
    switch (content.onModel) {
      case 'Quiz':
        this.DialogService.open(QuizBuilderComponent, { quizId: content.toDocument })
        break;

      default:
        break;
    }
  }

  getContents(): void {
    this.Api.getContents(this.moduleId).subscribe(
      info => this.contents = info)
  }

  isContentPublished(content: Content) {
    return content.isPublished
  }

  openDeleteContentDialog(contentId: string): void {
    this.DialogService.open(ContentDeleteFormComponent, { contentId })
  }

  openUpdateContentDialog(contentId: string): void {
    this.DialogService.open(UpdateContentDialogComponent, { contentId })
  }

  publishContent(contentId: string): void {
    this.Api.publishContent(contentId).subscribe(
      info => {
        window.location.reload()
      })
  }

  openContent(contentId: string): void {
    this.Api.openContent(contentId).subscribe(
      info => {
        window.location.reload()
      })
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

  openChangeDropDateDialog(contentId: string): void {
    this.DialogService.open(UpdateContentDateDialogComponent, {contentId})
  }

  navigateToStudentProgressPage(contentId: string): void {
    // change route to student progress
    this.route.navigate(['/courses', this.courseId, 'content', contentId, 'progress'])
  }

  parseDate(date: string) {
    const dateObj = new Date(date)
    return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`
  }

}
