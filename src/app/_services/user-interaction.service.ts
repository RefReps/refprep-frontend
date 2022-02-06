import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CourseInteractionService } from './course-interaction.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {
  course: Course = {}

  constructor(
    private tokenService: TokenService,
    private courseInteraction: CourseInteractionService,
  ) { }

  public setCourse(course: Course) {
    this.course = course
    this.tokenService.saveIsAuthor(this.courseInteraction.isAuthor(course))
  }

  get getCourse(): Course {
    return this.course
  }

  get isAdmin(): boolean {
    return this.tokenService.getUserRole() === 'admin'
  }

  // Return true if the user is an author of the course or an admin
  get isAuthor(): boolean {
    return this.tokenService.getIsAuthor()
  }
}
