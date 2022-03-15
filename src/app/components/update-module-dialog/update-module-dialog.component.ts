import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Section } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-update-module-dialog',
  templateUrl: './update-module-dialog.component.html',
  styleUrls: ['./update-module-dialog.component.css']
})
export class UpdateModuleDialogComponent implements OnInit {
  @Input() sectionId: string = '';
  sectionInfo: Section = {
    _id: this.sectionId
  };
  constructor(
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  updateModuleName(name: string) {
    if (this.data.data.moduleId){
      const form = new FormData();
      form.set("name", name);
      this.api.updateModule(this.data.data.moduleId, form);
      window.location.reload();
    }
  }

}
