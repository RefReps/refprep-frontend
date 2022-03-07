import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-display-sections',
  templateUrl: './display-sections.component.html',
  styleUrls: ['./display-sections.component.css']
})
export class DisplaySectionsComponent implements OnInit {

  @Input() courseId: string = '';
  sections: Section[] = [];

  constructor(
    private Api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getSections()
  }

  getSections(): void {
    this.Api.getSections(this.courseId)
      .subscribe(info => this.sections = info)
  }

}
