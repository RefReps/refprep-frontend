import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ApiService } from 'src/service/api.service';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-content-form-add-text',
  templateUrl: './content-form-add-text.component.html',
  styleUrls: ['./content-form-add-text.component.css']
})
export class ContentFormAddTextComponent implements OnInit {
  moduleId: string

  constructor(
    
    private apiService: ApiService, 
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.moduleId = data.data.moduleId
     }

  ngOnInit(): void {

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
    toolbarHiddenButtons: [[
      'link',
      'unlink',
      'insertImage',
      'insertVideo',
    ]],
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


  getTitle(){
    return this.announcementForm.get('title')?.value
  }

  getBody(){
    return this.announcementForm.get('body')?.value
  }

  onSubmit() {
    if(this.data.data.moduleId){
      this.apiService.postAnnouncement(this.moduleId, this.announcementForm.value).subscribe(res => {
        window.location.reload()
      })
      
    }
  }

}
