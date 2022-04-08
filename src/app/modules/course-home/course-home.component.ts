import { loadCourse } from './../../_store/course/course.actions';
import { selectCourse } from './../../_store/course/course.selector';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/course';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css'],
})
export class CourseHomeComponent implements OnInit {
  courseId: string = '';
  course: Course = {};
  course$ = this.store.select(selectCourse);

  constructor(
    private Api: ApiService,
    private route: ActivatedRoute,
    private userInteraction: UserInteractionService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    });
    this.getCourseInfo();
  }

  getCourseInfo(): void {
    this.Api.getCourseForStudent(this.courseId).subscribe((info) => {
      this.course = info.course;
      this.store.dispatch(loadCourse({ course: info.course }));
    });
  }

  get canEdit(): boolean {
    return this.userInteraction.isAuthor;
  }
}
