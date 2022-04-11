import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course, Content } from 'src/app/models/course';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/_services/token.service';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-display-contents',
  templateUrl: './display-contents.component.html',
  styleUrls: ['./display-contents.component.css']
})
export class DisplayContentsComponent implements OnInit {

  @Input() moduleId: string = '';
  @Input() contents: Content[] = [];
  courseId: string = '';
  courseInfo: Course = {};

  constructor(
    private Api: ApiService,
    private tokenService: TokenService,
    private userInteraction: UserInteractionService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    });
    this.getCourseInfo();
  }

  getCourseInfo(): void {
    this.Api.getCourse(this.courseId)
      .subscribe(info => this.courseInfo = info)
  }

  canAccessContent(content: Content): boolean {
    return (this.isAccessibleByDate(content) && this.isAccessibleByProgress(content)) || this.isOpen(content) || this.isAuthor()
  }

  isAccessibleByDate(content: Content): boolean {
    return new Date() > new Date(content.dropDate!)
  }

  isOpen(content: Content): boolean {
    return content.isKeepOpen || this.isAuthor()
  }

  isAccessibleByProgress(content: Content): boolean {
    return content.isOpen || this.isAuthor()
  }

  isContentPublished(content: Content) {
    return content.isPublished
  }

  getContentDropDate(content: Content): string {
    let date = new Date(content.dropDate!)
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + date.toLocaleTimeString('en-US')
  }

  isAdmin(): boolean {
    return this.userInteraction.isAdmin;
  }
  isAuthor(): boolean {
    return this.userInteraction.isAuthor;
  }

  isStudent(): boolean {
    return this.tokenService.getUserRole() === 'user'
  }

  openSnackBar(content: Content): void {
    if (!this.isAccessibleByDate(content) && !(this.isAuthor() || this.isAdmin() )) {
      let message = 'Content not yet available'
      const ONE_SECOND = 1000
      const config: MatSnackBarConfig = { duration: ONE_SECOND * 2 };
      this._snackBar.open(message, 'x', config);
    }
    else if (!this.isAccessibleByProgress(content) && !this.userInteraction.isAdmin) {
      let message = 'Complete previous content to progress'
      const ONE_SECOND = 1000
      const config: MatSnackBarConfig = { duration: ONE_SECOND * 2 };
      this._snackBar.open(message, 'x', config);
    }
  }

  getRoute(content: Content): string[] {
    if (!this.canAccessContent(content)) {
      return []
    }
    switch (content.onModel) {
      case 'Quiz':
        return ['./quiz', content.toDocument || '']
      case 'Video':
        return ['./content', content._id || '', 'video', content.toDocument || '']
      case 'Announcement':
        return ['./announcement', content.toDocument || ''] 
      default:
        return []
    }
  }
}
