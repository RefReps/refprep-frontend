import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent implements OnInit {
  videoId: string | undefined;

  constructor(
    private Api: ApiService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('videoId');
        if (id) {
          this.videoId = id;
        }
      })
  }

}
