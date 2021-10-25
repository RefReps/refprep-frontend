import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInfo } from 'src/app/models/course-info';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-info-home',
  templateUrl: './course-info-home.component.html',
  styleUrls: ['./course-info-home.component.css']
})
export class CourseInfoHomeComponent implements OnInit {

  courseId: string = '';
  courseInfo: CourseInfo = {};

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
