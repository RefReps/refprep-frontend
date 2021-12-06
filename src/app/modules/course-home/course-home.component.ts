import { Component, OnInit } from '@angular/core';
import { CourseAddFormComponent } from 'src/app/components/course-add-form/course-add-form.component';
import { CourseBreifInfo } from 'src/app/models/course-breif-info';
import { DialogService } from 'src/service/dialog.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
