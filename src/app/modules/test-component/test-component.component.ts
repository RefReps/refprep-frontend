import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  course: Course = {
    "_id": "61a5685c462f70ef5a2b51f0",
    "name": "Basketball 101",
    "isTemplate": true,
    "isPublished": true,
    "isDeleted": false,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
