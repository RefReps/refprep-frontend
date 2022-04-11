import { UserInteractionService } from './../../_services/user-interaction.service';
import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-add-author',
  templateUrl: './course-add-author.component.html',
  styleUrls: ['./course-add-author.component.scss'],
})
export class CourseAddAuthorComponent implements OnInit {
  @Input() courseId: string = '';
  emails: string[] = [];
  removedEmails: string[] = [];
  newEmail: string = '';
  removedEmail: string = '';
  currentAuthors = new BehaviorSubject<User[]>([]);

  constructor(
    private Api: ApiService, 
    private route: ActivatedRoute, 
    private userInteraction: UserInteractionService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
        this.getCourseAuthors();
      }
    });
  }

  addNewAuthor() {
    if (!this.newEmail) return;
    this.emails.push(this.newEmail);
    this.newEmail = '';
  }

  getCourseAuthors(): void {
    this.Api.getAuthorsInCourse(this.courseId).subscribe((users) => {
      this.currentAuthors.next(users);
    });
  }

  removeAuthor() {
    this.removedEmails.push(this.removedEmail);
    this.Api.removeAuthorsInCourse(this.courseId, this.removedEmails).subscribe(
      (res) => {
        this.removedEmail = '';
        this.getCourseAuthors();
      }
    );
  }

  onSubmit() {
    this.Api.addAuthorsToCourse(this.courseId, this.emails).subscribe((res) => {
      this.emails = [];
      this.getCourseAuthors();
    });
  }

  get isAuthor() {
    return this.userInteraction.isAuthor;
  }

  get isAdmin() {
    return this.userInteraction.isAdmin;
  }
}
