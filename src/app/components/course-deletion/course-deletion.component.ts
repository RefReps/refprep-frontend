import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-deletion',
  templateUrl: './course-deletion.component.html',
  styleUrls: ['./course-deletion.component.scss']
})
export class CourseDeletionComponent implements OnInit {

  formGroup: FormGroup;
  courseName: string = '';
  course: Course = {};
  courseId: string = '';
  match: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formGroup = formBuilder.group({
      courseName: '',
    })
    this.courseId = data.data.course._id;
    this.courseName = data.data.course.name;
    console.log(this.courseName);
   }

  ngOnInit(): void {
  }

  matchCourseName() {
    if (this.formGroup.value.courseName === this.courseName) {
      this.match = true;
    } else {
      this.match = false;
    }
  }

  //check input if input equals course name then delete course
  onFormSubmit() {
    this.matchCourseName();
    if (!this.match) {
      return;
    }
    console.log(this.formGroup.value.courseName)
    console.log(this.courseName)
    if (this.formGroup.value.courseName === this.courseName) {
      this.apiService.deleteCourse(this.courseId).subscribe(
        (data) => {
          window.location.reload();
        });
    } 
  }
}
