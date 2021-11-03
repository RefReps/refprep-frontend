import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInfo } from 'src/app/models/course-info';
import { ModuleInfo } from 'src/app/models/module-info';
import { SectionsInfo } from 'src/app/models/sections-info';
import { Video } from 'src/models/Video/video.model';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-curriculum',
  templateUrl: './edit-curriculum.component.html',
  styleUrls: ['./edit-curriculum.component.css']
})
export class EditCurriculumComponent implements OnInit {

  constructor(
    private Api: ApiService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

  }
}
