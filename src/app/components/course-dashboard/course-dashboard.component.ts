import { UserInteractionService } from './../../_services/user-interaction.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { CourseAddFormComponent } from '../course-add-form/course-add-form.component';
import { CourseDuplicateFormComponent } from '../course-duplicate-form/course-duplicate-form.component';
import { TokenService } from 'src/app/_services/token.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {

  userId: string = ''
  user: User = {};
  courses: Course[] = [];

  constructor(
    private tokenService: TokenService,
    private Api: ApiService,
    private dialogService: DialogService,
    private userInt: UserInteractionService,
    private _snackBar: MatSnackBar
    ) {
      this.userId = this.tokenService.getUserId()
     }

  ngOnInit(): void {
    this.getCourses();
    this.getUserInfo();
  }

  joinCourseByCode(code: string): void {
    this.Api.joinCourseByCode(code).subscribe(res => {
      if (res.success) {
        this.getCourses()
        this.openSnackBar('Successfully joined the course!', 'Awesome!')
      } else {
        this.openSnackBar(res.error?.message || '', 'Okay')
      }
    })
  }

  openSnackBar(message: string, action: string) {
    const ONE_SECOND = 1000
    const config: MatSnackBarConfig = { duration: ONE_SECOND * 2 };
    this._snackBar.open(message, action, config)
  }

  getCourses(): void {
    this.Api.getAllCourses()
      .subscribe(info => this.courses = info)
  }
  
  getUserInfo(): void {
    this.Api.getUser(this.userId)
      .subscribe(info => 
        this.user = info.user
        )
    }

  openAddCourseDialog(): void {
    this.dialogService.open(CourseAddFormComponent, {})
  }

  openDuplicateCourseDialog(): void {
    this.dialogService.open(CourseDuplicateFormComponent, {})
  }

  get isAdmin(): boolean {
    return this.userInt.isAdmin
  }

}
