import { Component, Input, OnInit } from '@angular/core';
import { Course, Content } from 'src/app/models/course';
import { TokenService } from 'src/app/_services/token.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-display-contents',
  templateUrl: './display-contents.component.html',
  styleUrls: ['./display-contents.component.css']
})
export class DisplayContentsComponent implements OnInit {

  @Input() moduleId: string = '';
  @Input() contents: Content[] = [];

  constructor(
    private Api: ApiService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  canAccessContent(content: Content): boolean {
    return this.isAuthor() || (this.isAccessibleByDate(content) && this.isAccessibleByProgress(content))
  }

  isAccessibleByDate(content: Content): boolean {
    return new Date() > new Date(content.dropDate!)
  }


  isAccessibleByProgress(content: Content): boolean {
    return content.isCompleted || false
  }

  getContentDropDate(content: Content): string {
    let date = new Date(content.dropDate!)
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + date.toLocaleTimeString('en-US')
  }

  isAuthor(): boolean {
    return this.tokenService.getIsAuthor()
  }

  isStudent(): boolean {
    return this.tokenService.getUserRole() === 'user'
  }

  getRoute(content: Content): string[] {
    if (!this.canAccessContent(content)) {
      return []
    }
    switch (content.onModel) {
      case 'Quiz':
        return ['./quiz', content.toDocument || '']
      case 'Video':
        return ['./video', content.toDocument || '']
      default:
        return []
    }
  }
}
