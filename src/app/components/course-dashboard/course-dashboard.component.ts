import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { CourseAddFormComponent } from '../course-add-form/course-add-form.component';
import { CourseDuplicateFormComponent } from '../course-duplicate-form/course-duplicate-form.component';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {

  courses: Course[] = []

  constructor(
    private Api: ApiService,
    private dialogService: DialogService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getCourses()
  }

  joinCourseByCode(code: string): void {
    this.Api.joinCourseByCode(code).subscribe(res => {
      if (res.success) {
        this.getCourses()
        this.openSnackBar('Successfully joined the course!', 'Awesome!')
      } else {
        this.openSnackBar(res.error?.message || '', 'Okay')
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action)
  }

  getCourses(): void {
    this.Api.getAllCourses()
      .subscribe(info => this.courses = info)
  }
  
  openAddCourseDialog(): void {
    this.dialogService.open(CourseAddFormComponent, {})
  }

  openDuplicateCourseDialog(): void {
    this.dialogService.open(CourseDuplicateFormComponent, {})
  }

}
