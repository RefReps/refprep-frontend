import { Component, OnInit } from '@angular/core';
import { CourseAddFormComponent } from 'src/app/components/course-add-form/course-add-form.component';
import { ModuleFormAddComponent } from 'src/app/components/module-form-add/module-form-add.component';
import { SectionFormAddComponent } from 'src/app/components/section-form-add/section-form-add.component';
import { Course } from 'src/app/models/course';
import { DialogService } from 'src/service/dialog.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  course: Course = {
    "_id": "61a5685c462f70ef5a2b51f0",
    "name": "Basketball 101",
    "isTemplate": true,
    "isPublished": true,
    "isDeleted": false,
  }

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  openAddCourseDialog() {
    this.dialogService.open(CourseAddFormComponent, {})
  }

  openAddSectionDialog() {
    this.dialogService.open(SectionFormAddComponent, {courseId: '123412341234123412341234'})
  }

  openAddModuleDialog() {
    this.dialogService.open(ModuleFormAddComponent, {sectionId: '432143214321432143214321'})
  }

}
