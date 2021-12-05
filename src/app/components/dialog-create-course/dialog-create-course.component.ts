import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseAddFormComponent } from '../course-add-form/course-add-form.component';

@Component({
  selector: 'app-dialog-create-course',
  templateUrl: './dialog-create-course.component.html',
  styleUrls: ['./dialog-create-course.component.css']
})
export class DialogCreateCourseComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CourseAddFormComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

  ngOnInit(): void {
  }

}
