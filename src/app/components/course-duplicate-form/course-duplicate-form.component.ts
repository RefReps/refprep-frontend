import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';
import { Course } from 'src/app/models/course';



@Component({
  selector: 'app-course-duplicate-form',
  templateUrl: './course-duplicate-form.component.html',
  styleUrls: ['./course-duplicate-form.component.scss']
})
export class CourseDuplicateFormComponent implements OnInit{
  formGroup: FormGroup;
  courses: Course[] = []


  constructor(
    private Api: ApiService,
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.formGroup = formBuilder.group({
      newName: '',
      isPublished: true,
      isTemplate: false,
    })
   }

   ngOnInit(): void {
    this.getCourses()
  }

   getCourses(): void {
    this.Api.getAllCourses()
      .subscribe(info => this.courses = info)
  }

  onFormSubmit() {
    this.Api.postCourse(this.formGroup.value)
    window.location.reload()
  }

}
