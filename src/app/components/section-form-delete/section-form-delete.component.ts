import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-section-form-delete',
  templateUrl: './section-form-delete.component.html',
  styleUrls: ['./section-form-delete.component.css']
})
export class SectionFormDeleteComponent implements OnInit {

  constructor(
    private Api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  submitDeleteSection(): void {
    if (this.data.data.sectionId) {
      this.Api.deleteSection(this.data.data.sectionId)
      window.location.reload()
    }
  }

}
