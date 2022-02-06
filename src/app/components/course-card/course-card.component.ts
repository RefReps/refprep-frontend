import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseInteractionService } from 'src/app/_services/course-interaction.service';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';

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


}
