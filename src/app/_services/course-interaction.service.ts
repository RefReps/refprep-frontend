import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { TokenService } from './token.service';
import { UserInteractionService } from './user-interaction.service';

@Injectable({
  providedIn: 'root'
})
export class CourseInteractionService {

  constructor(
    private tokenService: TokenService
  ) { }

  public isAuthor(course: Course): boolean {
    return course.isAuthor || (this.tokenService.getUserRole() === 'admin')
  }

}
