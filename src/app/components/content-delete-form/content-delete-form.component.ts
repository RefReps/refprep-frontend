import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-content-delete-form',
  templateUrl: './content-delete-form.component.html',
  styleUrls: ['./content-delete-form.component.css']
})
export class ContentDeleteFormComponent implements OnInit {

  constructor(
    private Api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  submitDeleteContent(): void {
    if (this.data.data.contentId) {
      this.Api.deleteContent(this.data.data.contentId)
      window.location.reload()
    }
  }

}
