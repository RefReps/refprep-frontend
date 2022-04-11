import { ContentProgress, Course } from './../../models/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-student-progress-view',
  templateUrl: './student-progress-view.component.html',
  styleUrls: ['./student-progress-view.component.scss'],
})
export class StudentProgressViewComponent implements OnInit {
  studentProgress: ContentProgress[] = [];
  course: Course = {};
  contentId: string = this.activeRoute.snapshot.paramMap.get('contentId') || '';
  
  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadStudentsProgess();
  }

hasStudentCompleted(progress: ContentProgress): boolean {
  if (progress.content?.onModel === 'video') {
    if (progress.percentComplete! === 100) {
      return true;
    }
  } 
  else {
    if (progress.percentComplete! >= this.course.settings?.enforcementPercent!) {
    return true;
    }
  }
  return false;
}

  loadStudentsProgess(): void {
    this.api.getContentStudentsProgress(this.contentId).subscribe((info) => {
      this.studentProgress = info.students || [];
      this.course = info.course || {};
    });
}

  forceCompleteContent(progress: number, userId: string): void {
    this.api.contentProgressForce(this.contentId, userId, progress).subscribe((info) => {
      this.loadStudentsProgess();
    });
  }
}
