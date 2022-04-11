import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CourseInteractionService } from './course-interaction.service';
import { TokenService } from './token.service';
import { selectCourse } from '../_store/course/course.selector';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {
  course$ = this.store.select(selectCourse);
  course: Course = {};

  constructor(
    private tokenService: TokenService,
    private store: Store,
  ) { 
    this.observeCourse();
  }

  private observeCourse(): void {
    this.course$.subscribe((state) => {
      this.course = state.course;
    });
  }

  get isAdmin(): boolean {
    return this.tokenService.getUserRole() === 'admin'
  }

  // Return true if the user is an author of the course or an admin
  get isAuthor(): boolean {
    return this.isAdmin || this.course?.isAuthor || false
  }

}
