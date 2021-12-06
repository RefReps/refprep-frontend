import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-display-sections',
  templateUrl: './edit-display-sections.component.html',
  styleUrls: ['./edit-display-sections.component.css']
})
export class EditDisplaySectionsComponent implements OnInit {

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
