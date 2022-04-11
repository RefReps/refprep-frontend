import { parseHostBindings } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Action } from '@ngrx/store';
import { Announcement } from 'src/app/models/announcement'
import { TokenService } from 'src/app/_services/token.service';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { DialogComponent } from '../dialog/dialog.component';
import { UpdateAnnouncementDialogComponent } from '../update-announcement-dialog/update-announcement-dialog.component';

@Component({
  selector: 'app-course-announcement',
  templateUrl: './course-announcement.component.html',
  styleUrls: ['./course-announcement.component.css']
})
export class CourseAnnouncementComponent implements OnInit {

  announcementId: string = '';
  announcementInfo: Announcement = {}
  body: string = '';
  @Input() moduleId: string = '';

  // @ViewChild('createText', { static: false }) div!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private element: ElementRef,
    private renderer: Renderer2,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private DialogService: DialogService) {  }

  public parsedHTML: any;
  documentBody: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('announcementId');
      if (id) {
        this.announcementId = id;
      }
      this.getAnnouncementInfo()
      // this.getAnnouncementBody()
      // this.parsingHTML()
    });
  }

  
  announcementForm = this.formBuilder.group({
    title: '',
    body: ''
  });

  name = 'Angular 6';
  htmlContent = ''


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  }

  stringToHTML = function (string: string) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(string, 'text/html');
    return doc.body;
  }

  getAnnouncementInfo() {
    this.api.getAnnouncementContent(this.announcementId)
    .subscribe((info) => {
    this.announcementInfo = info.announcement
    this.body = this.announcementInfo.body || ''
    this.parsedHTML = this.stringToHTML(this.body || '');
  })
  }
  
  get isAdmin(): boolean {
    return this.tokenService.getUserRole() === 'admin'
  }

  get isAuthor(): boolean {
    return this.tokenService.getUserRole() === 'author'
  }



  openUpdateAnnouncementDialog(announcementId: string): void {
    this.DialogService.open(UpdateAnnouncementDialogComponent, {announcementId})
  }

}

