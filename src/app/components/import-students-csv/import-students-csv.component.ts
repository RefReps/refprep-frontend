import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-students-csv',
  templateUrl: './import-students-csv.component.html',
  styleUrls: ['./import-students-csv.component.css']
})
export class ImportStudentsCsvComponent implements OnInit {
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
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        this.headLines.push(tarr);


        let tarrR = [];
        let arrl = allTextLines.length;
        let rows = [];
        for (let i = 1; i < arrl; i++) {
          rows.push(allTextLines[i].split(","));
        }
        for (let j = 0; j < arrl; j++) {
          tarrR.push(rows[j]);
        }
        this.rowLines.push(tarrR);
      };
    }
  }
  constructor() { }



}
