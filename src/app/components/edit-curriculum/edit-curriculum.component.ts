import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInfo } from 'src/app/models/course-info';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-curriculum',
  templateUrl: './edit-curriculum.component.html',
  styleUrls: ['./edit-curriculum.component.css']
})
export class EditCurriculumComponent implements OnInit {
  courseId: string = '';
  courseInfo: CourseInfo = {};

  
  @Input() toEdit?: boolean=true;

  constructor(
    private Api: ApiService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('courseId');
        if (id) {
          this.courseId = id;
        }
      })
    this.getCourseInfo();
  }

  getCourseInfo(): void {
    this.Api.getCourseInfo(this.courseId)
      .subscribe(info => this.courseInfo = info)
  }
}
