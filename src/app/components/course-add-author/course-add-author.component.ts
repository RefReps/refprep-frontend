import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-add-author',
  templateUrl: './course-add-author.component.html',
  styleUrls: ['./course-add-author.component.scss']
})
export class CourseAddAuthorComponent implements OnInit {

  @Input() courseId: string = '';
  emails: string[] = [];
  removedEmails: string[] = [];
  newEmail: string = '';
  removedEmail: string = '';
  currentAuthors: Author[] = [];

  constructor(
    private Api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('courseId');
        if (id) {
          this.courseId = id;
        }
      })
      this.getCourseAuthors()
    }

  addNewAuthor() {
    this.emails.push(this.newEmail)
    this.newEmail = ''
  }

  getCourseAuthors(): void {
    this.Api.getAuthorsInCourse(this.courseId)
      .subscribe(info => this.currentAuthors = info)
  }

  removeAuthor() {
    this.removedEmails.push(this.removedEmail)
    this.Api.removeAuthorsInCourse(this.courseId, this.removedEmails)
    this.removedEmail = ''
    window.location.reload();
  }

  onSubmit() {
    this.Api.addAuthorsToCourse(this.courseId, this.emails)
    this.emails = []
    window.location.reload();
  }
}
