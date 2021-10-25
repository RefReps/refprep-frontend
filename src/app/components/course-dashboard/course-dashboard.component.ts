import { Component, OnInit } from '@angular/core';
import { CourseBreifInfo } from 'src/app/models/course-breif-info';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {

  courses: CourseBreifInfo[] = []

  constructor(private Api: ApiService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(): void {
    this.Api.getAllCoursesInfo()
      .subscribe(courses => this.courses = courses)
  }

}
