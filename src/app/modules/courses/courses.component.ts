import { Component, OnInit } from '@angular/core';
import { CourseAddFormComponent } from 'src/app/components/course-add-form/course-add-form.component';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []
  createCourseComponent = CourseAddFormComponent

  constructor() { }

  ngOnInit(): void {
  }
}
