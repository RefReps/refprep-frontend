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
    ) { }

  ngOnInit(): void {
    this.getCourses()
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
