import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-add-student',
  templateUrl: './course-add-student.component.html',
  styleUrls: ['./course-add-student.component.scss']
})
export class CourseAddStudentComponent implements OnInit {

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

  addNewStudent() {
    this.emails.push(this.newEmail)
    this.newEmail = ''
  }

  removeStudent() {
    this.removedEmails.push(this.removedEmail)
    this.Api.removeStudentsInCourse(this.courseId, this.removedEmails)
    this.removedEmail = ''
  }

  onSubmit() {
    this.Api.addStudentsToCourse(this.courseId, this.emails)
    this.emails = []
  }
}

