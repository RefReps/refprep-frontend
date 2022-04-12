import { Component, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CSVRecord } from 'src/app/models/CSVRecord';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-import-students-csv',
  templateUrl: './import-students-csv.component.html',
  styleUrls: ['./import-students-csv.component.css']
})
export class ImportStudentsCsvComponent implements OnInit {
  @Input() courseId: string = '';
  records: any[] = [];
  populated: boolean = false;

  file: File | undefined;
  fileName: string | undefined;

  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('csvReader') csvReader: any;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    });
  }

  uploadListener($event: any): void {
    let file = $event.srcElement.file;
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);

        this.populated = true;
      };

      reader.onerror = function () {
        console.log('error is occurred while reading file!');
      };
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let currentRecord = (<string>csvRecordsArray[i]).split(',');
      if (currentRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.email = currentRecord[0].trim();
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }
  
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }


  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }

  onSubmit(){
    this.api.addStudentsToCourse(this.courseId, this.records.map(record => {
      this.buttonClicked.emit("Student Store Updated")
      window.location.reload()
      return record.email
    })).subscribe(
      (res) => {
        this.records = [];
      }
    );
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
}

}