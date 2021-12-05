import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.css']
})
export class CourseEditFormComponent implements OnInit {

  @Input() course: Course = {}
  isChecked = true;
  
  constructor(
    private Api: ApiService,
    ) { }
    
  ngOnInit(): void {
  }
    
  onFormSubmit(): void {
    if (this.course && this.course._id){
      const form: FormData = new FormData()
      for (let [key, value] of Object.entries(this.course)) {
        form.append(key, value)
      }
      this.Api.updateCourse(this.course._id, form)
      window.location.reload()
    }
  }

}
