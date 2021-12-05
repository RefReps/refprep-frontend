import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-curriculum',
  templateUrl: './edit-curriculum.component.html',
  styleUrls: ['./edit-curriculum.component.css']
})
export class EditCurriculumComponent implements OnInit {
  courseId: string = '';
  courseInfo: Course = {};

  
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
    this.Api.getCourse(this.courseId)
      .subscribe(info => this.courseInfo = info)
  }
}
