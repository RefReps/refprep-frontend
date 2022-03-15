import { ConstantPool } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Section } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-update-section-dialog',
  templateUrl: './update-section-dialog.component.html',
  styleUrls: ['./update-section-dialog.component.css']
})
export class UpdateSectionDialogComponent implements OnInit {
  @Input() sectionId: string = '';
  sectionInfo: Section = {
    _id: this.sectionId
  };

  constructor(private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  updateSectionName(name: string) {
    if (this.data.data.sectionId){
      const form = new FormData();
      form.set("name", name);
      this.api.updateSection(this.data.data.sectionId, form);
      window.location.reload();
    }
  }
}
