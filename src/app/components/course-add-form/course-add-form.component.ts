import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-add-form',
  templateUrl: './course-add-form.component.html',
  styleUrls: ['./course-add-form.component.css']
})
export class CourseAddFormComponent {

  formGroup: FormGroup;

  constructor(
    private Api: ApiService,
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.formGroup = formBuilder.group({
      name: '',
      isPublished: true,
      isTemplate: false,
    })
   }
  
  onFormSubmit() {
    this.Api.postCourse(this.formGroup.value)
    window.location.reload()
  }

}
