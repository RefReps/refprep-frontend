import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseInteractionService } from 'src/app/_services/course-interaction.service';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { CourseDeletionComponent } from '../course-deletion/course-deletion.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course: Course = {}

  constructor(
    private courseInteractionService: CourseInteractionService,
    private userInteractionService: UserInteractionService,
    private apiService: ApiService,
    private dialogService: DialogService,
    
  ) { }

  get courseSubtitle(): string {
    if (this.userInteractionService.isAdmin) {
      return 'Admin in this course'
    }
    else if (this.courseInteractionService.isAuthor(this.course)) {
      return 'Author in this course'
    } else {
      return 'Student in this course'
    }
  }

  //delete course from database
  deleteCourse(course: Course) {
    this.dialogService.open(CourseDeletionComponent, { course })
  }

  //duplicate course in database
  duplicateCourse() {
    //this.courseInteractionService.duplicateCourse(this.course)
    console.log('duplicate course')
  }

  openMenu(event: MouseEvent) {
    event.stopPropagation()
    event.preventDefault()
  }

  get isAdmin(): boolean {
    return this.userInteractionService.isAdmin
  }
}
