import { Component, Input, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-display-contents',
  templateUrl: './display-contents.component.html',
  styleUrls: ['./display-contents.component.css']
})
export class DisplayContentsComponent implements OnInit {

  @Input() moduleId: string = '';
  contents: Content[] = [];

  constructor(
    private Api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getContents()
  }

  getContents(): void {
    this.Api.getContents(this.moduleId)
      .subscribe(info => this.contents = info)
  }

}
