import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionsInfo } from 'src/app/models/sections-info';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-select-section',
  templateUrl: './select-section.component.html',
  styleUrls: ['./select-section.component.css']
})
export class SelectSectionComponent implements OnInit {

  courseId: string = "";
  sectionId: string = "";

  selectedValue: string ="";

  sectionInfo: SectionsInfo [] = [];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let courseId = params.get('courseId');
      if(courseId){
        this.courseId = courseId;
      }
      let sectionId = params.get('sectionId');
      if(sectionId){
        this.sectionId = sectionId;
      }
    })
    this.getCourseSections();
  }

  getCourseSections(): void{
    this.api.getCourseSections(this.courseId)
    .subscribe(info => this.sectionInfo = info);
  }

}
