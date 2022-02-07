import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-add-author',
  templateUrl: './course-add-author.component.html',
  styleUrls: ['./course-add-author.component.scss']
})
export class CourseAddAuthorComponent implements OnInit {

  @Input() courseId: string = '';
  emails: string[] = [];
  addedEmails: string[] = [];
  removedEmails: string[] = [];
  newEmail: string = '';
  removedEmail: string = '';

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
    }

  addNewAuthor() {
    this.emails.push(this.newEmail)
    this.newEmail = ''
  }

  removeAuthor() {
    this.removedEmails.push(this.removedEmail)
    this.Api.removeAuthorsInCourse(this.courseId, this.removedEmails)
    this.removedEmail = ''
  }

  onSubmit() {
    this.Api.addAuthorsToCourse(this.courseId, this.emails)
    this.emails = []
  }
}
