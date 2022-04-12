import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-section-form-add',
  templateUrl: './section-form-add.component.html',
  styleUrls: ['./section-form-add.component.css']
})
export class SectionFormAddComponent {
  formGroup: FormGroup;

  constructor(
    private Api: ApiService,
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.formGroup = formBuilder.group({
      name: '',
      courseId: data.data.courseId,
      sectionOrder: 50,
      isPublished: true,
      dropDate: Date.now(),
    })
   }
  
  onFormSubmit() {
    this.Api.postSection(this.formGroup.value)
    window.location.reload()
  }

}
