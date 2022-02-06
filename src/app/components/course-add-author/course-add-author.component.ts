import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-add-author',
  templateUrl: './course-add-author.component.html',
  styleUrls: ['./course-add-author.component.scss']
})
export class CourseAddAuthorComponent implements OnInit {
  //newAuthorsForm: FormGroup;
  errors: any = {}

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService,
    private apiService: ApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
