import { ActivatedRoute } from '@angular/router';
import { Course } from './../../models/course';
import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { ApiService } from 'src/service/api.service';
import {VgApiService} from '@videogular/ngx-videogular/core'
import { UserInteractionService } from 'src/app/_services/user-interaction.service';

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
  watchedTime: number = 0;
  highestWatchPercentage: number = 0;

  course: Course = {}

  // vgApi: VgApiService;

  constructor(
    private Api: ApiService,
    private route: ActivatedRoute,
    private userInteraction: UserInteractionService,
  ) { }

  ngOnInit(): void {
    this.getVideo()
    this.getCourse()
    this.updateProgress(0);
   }

  // Get the contentId from the url from the route
  get contentId(): string {
    return this.route.snapshot.paramMap.get('contentId') || '';
  }

  // send api request to update the user's progress on the video
  updateProgress(amount: number): void {
    // do not update progress if the user is an author
    if (this.isAuthor) {
      return
    }
    this.Api.updateVideoProgressOnContent(this.contentId, amount).subscribe(res => {
      this.highestWatchPercentage = res.percentComplete
    })
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
    if (this.enforcements == true && !this.isAuthor) {
      this.disableSeeking()
    } 
    this.setCheckpoints()
    videoPlayer.load()

    videoPlayer.addEventListener('loadeddata', this.loadHighestWatchTime.bind(this))
  }

  loadHighestWatchTime(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    // set the video to the highest watched time of the user on the video 
    // if the user has watched the video before
    if (this.highestWatchPercentage > 0) {
      this.watchedTime = this.highestWatchPercentage / 100 * videoPlayer.duration
      videoPlayer.currentTime = this.watchedTime
    }
  }

  disableSeeking(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    videoPlayer.addEventListener('timeupdate', this.disableSeekingTimeUpdateListener.bind(this));

    videoPlayer.addEventListener('seeking', this.disableSeekingSeekingListener.bind(this));

    videoPlayer.addEventListener('ended', this.videoEnd.bind(this));
  }

  disableSeekingTimeUpdateListener(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    if (!videoPlayer.seeking) {
      if(videoPlayer.currentTime > this.watchedTime) {
        this.watchedTime = videoPlayer.currentTime;
      }
    }

    // cast watchedTime to percentage of video duration
    var percentageWatched = Math.round((this.watchedTime / videoPlayer.duration) * 100)
    // update the watched time of the video every 10 of the watchedTime (10% of the video)
    if (percentageWatched % 10 == 0 && this.highestWatchPercentage < percentageWatched) {
      this.updateProgress(percentageWatched)
    }
  }

  disableSeekingSeekingListener(): void {
    const videoPlayer = <HTMLVideoElement>document.getElementById('videoPlayer')
    var delta = videoPlayer.currentTime - this.watchedTime;
    if (delta > 0.01) {
      videoPlayer.currentTime = this.watchedTime;
    }
  }

  videoEnd(): void {
    this.updateProgress(100)
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

  get videoTitle(): string {
    return this.videoMeta.originalname?.replace(/.[^/.]+$/, "") || "Invalid Title"
  }

  get isAuthor(): boolean {
    return this.userInteraction.isAuthor
  }

}
