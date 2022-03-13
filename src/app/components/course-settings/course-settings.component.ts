import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { UserInteractionService } from './../../_services/user-interaction.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../service/api.service';
import { Course } from './../../models/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.scss'],
})
export class CourseSettingsComponent implements OnInit {
  course: Course = {};

  courseEnforcements: boolean = true;
  enforcementPercent: number = 90;
  maxQuizAttempts: number = 2;
  studentCapacity: number = 30;
  couponName: string = 'DEFAULT-1';
  couponLocked: boolean = false;
  couponExpDate = new FormControl(new Date());

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private user: UserInteractionService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => {
        let courseId = params.get('courseId');
        if (courseId) {
          this.api.getCourse(courseId).subscribe((course) => {
            this.course = course;
            this.updateCourseSettingsOnLocal(course);
          });
        }
      })
      .unsubscribe();
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action);
  }

  saveAuthorSettings(): void {
    if (this.course._id) {
      const settings: Object = {
        courseEnforcements: this.courseEnforcements,
        enforcementPercent: this.enforcementPercent,
        maxQuizAttempts: this.maxQuizAttempts,
        couponLocked: this.couponLocked,
      };
      this.api
        .updateAuthorSettings(this.course._id, settings)
        .subscribe((res) => {
          if (res.success) {
            this.updateCourseSettingsOnLocal(res.course);
            this.openSnackBar('Saved author settings!', '✓');
          }
        });
    }
  }

  saveAdminSettings(): void {
    if (this.course._id) {
      const settings: Object = {
        studentCapacity: this.studentCapacity,
        couponCodeName: this.couponName,
        couponCodeExpDate: this.couponExpDate.value,
      };
      this.api
        .updateAdminSettings(this.course._id, settings)
        .subscribe((res) => {
          if (res.success) {
            this.updateCourseSettingsOnLocal(res.course);
            this.openSnackBar('Saved course settings!', '✓');
          } else {
            this.openSnackBar(res.error.message, 'okay')
          }
        });
    }
  }

  updateCourseSettingsOnLocal(courseInfo: Course): void {
    this.courseEnforcements = courseInfo.settings?.isEnforcements || true;
    this.enforcementPercent = courseInfo.settings?.enforcementPercent || 90;
    this.maxQuizAttempts = courseInfo.settings?.maximumQuizAttempts || 2;
    this.studentCapacity = courseInfo.settings?.courseCapacity || 31;
    this.couponName = courseInfo.studentCourseCode?.code || 'NONE';
    this.couponLocked = courseInfo.studentCourseCode?.isLocked || false;
    this.couponExpDate.setValue(
      new Date(courseInfo.studentCourseCode?.activeUntil!) || new Date()
    );
  }

  toggleCourseEnforcements(): void {
    this.courseEnforcements = !this.courseEnforcements;
  }

  changeEnforcementPercent(percent: string): void {
    this.enforcementPercent = parseInt(percent);
  }

  changeMaximumQuizAttempts(value: string): void {
    this.maxQuizAttempts = parseInt(value);
  }

  toggleCouponLock(): void {
    this.couponLocked = !this.couponLocked;
  }

  changeStudentCapacity(value: string): void {
    this.studentCapacity = parseInt(value);
  }

  changeCouponCodeName(value: string): void {
    this.couponName = value;
  }

  changeCouponExpDate(date: string): void {
    this.couponExpDate.setValue(new Date(date));
  }

  get isAdmin(): boolean {
    return this.user.isAdmin;
  }
}
