import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-create-new-course',
  templateUrl: './create-new-course.component.html',
  styleUrls: ['./create-new-course.component.css']
})
export class CreateNewCourseComponent implements OnInit {
  courseName = ''
  isTemplateCourse = 'false'
  isPublished = 'true'
  constructor(private apiService: ApiService) { }

  createCourse(courseName: string) {
    this.apiService.postNewCourse(courseName, this.isPublished, this.isTemplateCourse).subscribe(
      (event: any) => {
        window.location.reload();
      }
    )
  }

  ngOnInit(): void {
  }

}
