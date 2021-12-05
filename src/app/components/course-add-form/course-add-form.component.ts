import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-add-form',
  templateUrl: './course-add-form.component.html',
  styleUrls: ['./course-add-form.component.css']
})
export class CourseAddFormComponent implements OnInit {

  data = {
    name: 'Course Not Named',
    isTemplate: 'false',
    isPublished: 'true',
  }
  
  constructor(
    private Api: ApiService,
    ) { }
    
  ngOnInit(): void {
  }
    
  onSubmit(): void {
    const form: FormData = new FormData()
    for (let [key, value] of Object.entries(this.data)) {
      form.append(key, value)
    }
    this.Api.postCourse(form)
    window.location.reload()
  }

}
