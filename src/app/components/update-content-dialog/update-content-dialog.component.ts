import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-update-content-dialog',
  templateUrl: './update-content-dialog.component.html',
  styleUrls: ['./update-content-dialog.component.css']
})
export class UpdateContentDialogComponent implements OnInit {
  moduleId: string = ''
  contents: Content[] = [];

  constructor(private Api: ApiService) { }


  ngOnInit(): void {
    this.getContents;
  }

  getContents(): void {
    this.Api.getContents(this.moduleId)
      .subscribe(info => this.contents = info)
  }

}
