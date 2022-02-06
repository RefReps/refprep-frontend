import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';
import { CourseInfoHomeComponent } from '../course-info-home/course-info-home.component';

@Component({
  selector: 'app-course-sidebar',
  templateUrl: './course-sidebar.component.html',
  styleUrls: ['./course-sidebar.component.css']
})
export class CourseSidebarComponent implements OnInit {
  constructor(
    private userInteractionService: UserInteractionService,
  ) { }

  ngOnInit(): void {
  }

  get isAuthor(): boolean {
    return this.userInteractionService.isAuthor
  }

  get isAdmin(): boolean {
    return this.userInteractionService.isAdmin
  }

  get courseId(): string {
    return this.userInteractionService.getCourse._id!
  }

}