import { ContentProgress, Course } from './../../models/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-student-progress-view',
  templateUrl: './student-progress-view.component.html',
  styleUrls: ['./student-progress-view.component.scss'],
})
export class StudentProgressViewComponent implements OnInit {
  studentProgress: ContentProgress[] = [];
  course: Course = {};
  contentId: string = this.activeRoute.snapshot.paramMap.get('contentId') || '';
  courseId: string = this.activeRoute.snapshot.paramMap.get('courseId') || '';
  
  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadStudentsProgess();
  }

hasStudentCompleted(progress: ContentProgress): boolean {
  if (progress.percentComplete! >= this.course.settings?.enforcementPercent!) {
    return true;
  }
  return false;
}

  loadStudentsProgess(): void {
    this.api.getContentStudentsProgress(this.contentId).subscribe((info) => {
      this.studentProgress = info.students || [];
    });
    this.api.getCourse(this.courseId).subscribe((info) => {
      this.course = info;
  });
}
}
