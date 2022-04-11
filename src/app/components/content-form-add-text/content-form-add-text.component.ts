import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-content-form-add-text',
  templateUrl: './content-form-add-text.component.html',
  styleUrls: ['./content-form-add-text.component.css']
})
export class ContentFormAddTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  name = 'Angular 6';
  htmlContent = '';
  parsedHTML: any;

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
  };

  onSubmit() {
    let parsedHTML = this.stringToHTML(this.htmlContent);
    console.log(parsedHTML);
    return parsedHTML;
  }


}
