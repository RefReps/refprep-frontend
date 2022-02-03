import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/service/dialog.service';
import { CourseAddFormComponent } from '../course-add-form/course-add-form.component';
import { CourseDuplicateFormComponent } from '../course-duplicate-form/course-duplicate-form.component';

@Component({
  selector: 'app-course-creation-home',
  templateUrl: './course-creation-home.component.html',
  styleUrls: ['./course-creation-home.component.css']
})
export class CourseCreationHomeComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
  }
  openAddCourseDialog(): void {
    this.dialogService.open(CourseAddFormComponent, {})
  }

  openDuplicateCourseDialog(): void {
    this.dialogService.open(CourseDuplicateFormComponent, {})
  }

}
