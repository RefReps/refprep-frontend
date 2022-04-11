import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from 'src/service/api.service';


@Component({
  selector: 'app-update-announcement-dialog',
  templateUrl: './update-announcement-dialog.component.html',
  styleUrls: ['./update-announcement-dialog.component.css']
})
export class UpdateAnnouncementDialogComponent implements OnInit {
  moduleId: string;

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,     
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.moduleId = data.data.moduleId
     }

  ngOnInit(): void {
  }

  announcementForm = this.formBuilder.group({
    title: '',
    body: ''
  });

  name = '';
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

  onUpdate(){
    this.api.updateAnnouncement(this.moduleId, this.announcementForm.value)
    console.log(this.moduleId)
  }

}
