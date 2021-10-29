import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInfo } from 'src/app/models/course-info';
import { ApiService } from 'src/service/api.service';
import { CourseInfoHomeComponent } from '../course-info-home/course-info-home.component';

@Component({
  selector: 'app-course-sidebar',
  templateUrl: './course-sidebar.component.html',
  styleUrls: ['./course-sidebar.component.css']
})
export class CourseSidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}