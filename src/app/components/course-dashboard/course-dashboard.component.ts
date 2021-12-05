import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {

  courses: Course[] = []

  constructor(private Api: ApiService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(): void {
    this.Api.getAllCourses()
      .subscribe(info => this.courses = info)
  }

}
