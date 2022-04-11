import { ApiService } from 'src/service/api.service';
import { selectCourse } from './../_store/course/course.selector';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { TokenService } from './token.service';
import { UserInteractionService } from './user-interaction.service';
import { loadCourse } from '../_store/course/course.actions';

@Injectable({
  providedIn: 'root'
})
export class CourseInteractionService {
  course$ = this.store.select(selectCourse);

  constructor(
    private tokenService: TokenService,
    private Api: ApiService,
    private store: Store,
  ) { }

  public setCourseFromObj(course: Course): void {
    this.store.dispatch(loadCourse({ course }));
  }

  public setCourseFromId(courseId: string): void {
    this.Api.getCourseForStudent(courseId).subscribe((res) => {
      this.store.dispatch(loadCourse({ course: res.course }));
    });
  }

  public isAuthor(course: Course): boolean {
    return course.isAuthor || (this.tokenService.getUserRole() === 'admin')
  }

}
