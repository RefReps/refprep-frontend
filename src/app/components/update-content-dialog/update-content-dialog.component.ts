import { Content } from 'src/app/models/course';
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-content-dialog',
  templateUrl: './update-content-dialog.component.html',
  styleUrls: ['./update-content-dialog.component.css']
})
export class UpdateContentDialogComponent implements OnInit {
  moduleId: string = ''
  contents: Content[] = [];

  constructor(private Api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.getContents;
  }

  getContents(): void {
    this.Api.getContents(this.moduleId)
      .subscribe(info => this.contents = info)
  }

  updateContentName(name: string) {
    if (this.data.data.contentId){
      const form = new FormData();
      form.set("name", name);
      this.Api.updateContent(this.data.data.contentId, form);
      window.location.reload();
    }
  }

}
