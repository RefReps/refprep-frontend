import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-module-delete-form',
  templateUrl: './module-delete-form.component.html',
  styleUrls: ['./module-delete-form.component.css']
})
export class ModuleDeleteFormComponent implements OnInit {

  constructor(
    private Api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  submitDeleteModule(): void {
    if (this.data.data.moduleId) {
      this.Api.deleteModule(this.data.data.moduleId)
      window.location.reload()
    }
  }
}
