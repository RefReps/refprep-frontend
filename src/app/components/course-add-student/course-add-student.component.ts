import { Course } from './../../models/course';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/service/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-add-student',
  templateUrl: './course-add-student.component.html',
  styleUrls: ['./course-add-student.component.scss'],
})
export class CourseAddStudentComponent implements OnInit {
  @Input() courseId: string = '';
  emails: string[] = [];
  addedEmails: string[] = [];
  removedEmails: string[] = [];
  newEmail: string = '';
  removedEmail: string = '';
  currentStudents = new BehaviorSubject<User[]>([]);

  valueEmittedFromChildComponent: string = '';

  course: Course = {};

  constructor(
    private Api: ApiService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
        this.getCourseStudents();
        this.fetchCourse();
      }
    });
  }

  addNewStudent(): void {
    if (!this.newEmail) return;
    this.emails.push(this.newEmail);
    this.newEmail = '';
  }

  getCourseStudents(): void {
    this.Api.getStudentsInCourse(this.courseId).subscribe((info) => {
      this.currentStudents.next(info.users);
    });
  }

  removeStudent() {
    if (!this.removedEmail) return;
    this.removedEmails.push(this.removedEmail);
    this.Api.removeStudentsInCourse(
      this.courseId,
      this.removedEmails
    ).subscribe((res) => {
      this.removedEmail = '';
      this.getCourseStudents();
    });
  }

  parentEventHandlerFunction(valueEmitted: any){
    this.valueEmittedFromChildComponent = valueEmitted
    this.getCourseStudents()
  }

  onSubmit() {
    this.Api.addStudentsToCourse(this.courseId, this.emails).subscribe(
      (res) => {
        this.emails = [];
        this.getCourseStudents();
      }
    );
  }

  fetchCourse() {
    this.Api.getCourse(this.courseId).subscribe((course) => {
      this.course = course;
    });
  }

  get courseCode(): string {
    return this.course.studentCourseCode?.code || '';
  }

  get courseLink(): string {
    if (!this.courseCode) return 'No Course Code';
    const { hostname, host, protocol, port } = window.location;
    return `${protocol}//${port == '80' ? hostname : host}/join/${
      this.courseCode
    }`;
  }

  openSnackBar(message: string) {
    const ONE_SECOND = 1000;
    const config: MatSnackBarConfig = { duration: ONE_SECOND };
    this._snackBar.open(message, undefined, config);
  }
}
