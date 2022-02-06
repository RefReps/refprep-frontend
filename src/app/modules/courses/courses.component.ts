import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []

  constructor(
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.tokenService.removeIsAuthor()
  }


}
