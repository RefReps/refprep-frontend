import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-module-form-add',
  templateUrl: './module-form-add.component.html',
  styleUrls: ['./module-form-add.component.css']
})
export class ModuleFormAddComponent {
  formGroup: FormGroup;

  constructor(
    private Api: ApiService,
    formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.formGroup = formBuilder.group({
      name: '',
      sectionId: data.data.sectionId,
      moduleOrder: 50,
      isPublished: true,
      dropDate: Date.now(),
    })
   }
  
  onFormSubmit() {
    this.Api.postModule(this.formGroup.value)
    window.location.reload()
  }

}
