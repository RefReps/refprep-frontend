import { ActivatedRoute } from '@angular/router';
import { Course } from './../../models/course';
import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { ApiService } from 'src/service/api.service';
import {VgApiService} from '@videogular/ngx-videogular/core'

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit {

  @Input() videoId: string = '';
  videoUrl: string = '';
  videoMeta: Video = {}
  enforcements: boolean = true;

  course: Course = {}

  // vgApi: VgApiService;

  constructor(
    private Api: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getVideo()
    this.getCourse()
  }

  setup(): void {

  }

  getCourse(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get('courseId')
      if (courseId) {
        this.Api.getCourse(courseId).subscribe(course => {
          this.course = course
          this.changeEnforcements(this.course.settings?.isEnforcements != undefined ? this.course.settings?.isEnforcements : true)
          this.loadVideoInHTMLPlayer()
      })
      }
    })
  }

  changeEnforcements(value: boolean): void {
    this.enforcements = value
  }

  getVideo(): void {
    this.Api.getVideoMetadata(this.videoId)
      .subscribe(video => {
        this.videoMeta = video
      })
  }

  loadVideoInHTMLPlayer(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    this.videoUrl = `${this.Api.videoUrl}/${this.videoId}`
    if (this.enforcements == true) {
      this.disableSeeking()
    }
    this.setCheckpoints()
    this.videoEnd()
    videoPlayer.load()
  }

  disableSeeking(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    var supposedCurrentTime = videoPlayer.currentTime;
    var watchedTime =  0;
    videoPlayer.addEventListener('timeupdate', function(){
      if (!videoPlayer.seeking) {
        if(videoPlayer.currentTime > watchedTime) {
          watchedTime = videoPlayer.currentTime;
        }
        else {
          supposedCurrentTime = videoPlayer.currentTime;
        }
      }
    });

    videoPlayer.addEventListener('seeking', function() {
      var delta = videoPlayer.currentTime - watchedTime;
      if (delta > 0.01) {
        videoPlayer.currentTime = watchedTime;
      }
    });

    videoPlayer.addEventListener('ended', function(){
      supposedCurrentTime = 0;
    })
  }

  setCheckpoints(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    var counter = 1
    videoPlayer.addEventListener('timeupdate', function(){
    if ((Math.round(videoPlayer.currentTime)) == (Math.round(videoPlayer.duration*(.1*counter)))) {
        counter++
      }
    });
  }

  videoEnd(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    videoPlayer.addEventListener('ended', function(){
    })

  }

  get videoTitle(): string {
    return this.videoMeta.originalname?.replace(/.[^/.]+$/, "") || "Invalid Title"
  }

}
