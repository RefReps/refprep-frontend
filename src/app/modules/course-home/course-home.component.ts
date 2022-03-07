import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {
  courseId: string = '';
  course: Course = {};
  

  constructor(
    private Api: ApiService, 
    private route: ActivatedRoute,
    private userInteraction: UserInteractionService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    })
    this.getCourseInfo();
  }
  
  getCourseInfo(): void {
    this.Api.getCourse(this.courseId)
    .subscribe(info => {
      this.course = info
      this.userInteraction.setCourse(this.course)
    })
  }

  get canEdit(): boolean {
    return this.userInteraction.isAuthor
  }

}
