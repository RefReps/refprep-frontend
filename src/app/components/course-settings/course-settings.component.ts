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
  couponLocked: boolean = false;
  couponExpDate: Date = new Date();

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private user: UserInteractionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params) => {
        let courseId = params.get('courseId');
        if (courseId) {
          this.api.getCourse(courseId).subscribe((course) => {
            this.course = course;
            console.log(this.course);
          });
        }
      })
      .unsubscribe();
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

  get isAdmin(): boolean {
    return this.user.isAdmin;
  }
}
