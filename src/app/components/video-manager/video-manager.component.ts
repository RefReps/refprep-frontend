import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

import { Video } from 'src/models/Video/video.model';

@Component({
  selector: 'app-video-manager',
  templateUrl: './video-manager.component.html',
  styleUrls: ['./video-manager.component.css']
})
export class VideoManagerComponent implements OnInit {

  videos: Video[] = [];
  selectedVideo?: Video;

  constructor(private apiService: ApiService) { 
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.apiService.getAll()
      .subscribe(videos => this.videos = videos);
  }

}
