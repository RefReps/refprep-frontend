import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

import { ModuleInfo } from 'src/app/models/module-info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.css']
})

export class SelectModuleComponent implements OnInit {

  courseId: string = '';
  sectionId: string = '';
  moduleId: string = '';

  selectedValue: string= '';

  moduleInfo: ModuleInfo[] = [];
  
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
      this.getSectionModules();
    }

    getSectionModules(): void{
      this.api.getSectionModules(this.courseId, this.sectionId)
      .subscribe(info => this.moduleInfo = info);
    }

}
