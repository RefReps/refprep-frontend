import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-students-csv',
  templateUrl: './import-students-csv.component.html',
  styleUrls: ['./import-students-csv.component.css']
})
export class ImportStudentsCsvComponent implements OnInit {
  file: File | undefined;
  fileName: string | undefined;

  populated: boolean | undefined;

  headLines: any = [];
  rowLines: any = [];
  ngOnInit(): void {
  }
  changeListener(files: any) {
    let fileList = (<HTMLInputElement>files.target).files;
    if (fileList && fileList.length > 0) {

      let file: File = fileList[0];


      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = e => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r|\n|\r/);

        let headers = allTextLines[0].split(",");
        let data = headers;
        let headingTitle = [];
        for (let j = 0; j < headers.length; j++) {
          if (data[j].toLowerCase() == "email") {
            headingTitle.push(data[j]);
          }
        }
        this.headLines.push(headingTitle);


        let Rows = [];
        let arrl = allTextLines.length;
        let rowsValue = [];
        for (let i = 1; i < arrl; i++) {
          rowsValue.push(allTextLines[i].split(","));
        }
        for (let j = 0; j < arrl; j++) {
          Rows.push(rowsValue[j]);
        }
        this.rowLines.push(Rows);
        console.log(Rows)
      };
      this.populated = true;
    }
  }
  constructor() { }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
  }

  onSubmit() {

  }

}
