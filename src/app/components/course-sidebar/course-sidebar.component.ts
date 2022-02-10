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
  courseId: string = '';

  constructor(
    private userInteractionService: UserInteractionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    })
  }

  get isAuthor(): boolean {
    return this.userInteractionService.isAuthor
  }

  get isAdmin(): boolean {
    return this.userInteractionService.isAdmin
  }

}