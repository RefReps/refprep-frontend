import { ContentProgress } from './../../models/course';
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
  contentId: string = this.activeRoute.snapshot.paramMap.get('contentId') || '';

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadStudentsProgess();
  }

  loadStudentsProgess(): void {
    this.api.getContentStudentsProgress(this.contentId).subscribe((info) => {
      console.log(info);
      this.studentProgress = info.students || [];
    });
  }
}
