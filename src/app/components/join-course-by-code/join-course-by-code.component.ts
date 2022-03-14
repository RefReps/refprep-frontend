import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-course-by-code',
  templateUrl: './join-course-by-code.component.html',
  styleUrls: ['./join-course-by-code.component.scss'],
})
export class JoinCourseByCodeComponent implements OnInit {
  constructor(
    private Api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let code = params.get('courseCode');
      this.joinCourseByCode(code || '');
      this.router.navigate(['/courses']);
    });
  }

  joinCourseByCode(code: string): void {
    this.Api.joinCourseByCode(code).subscribe((res) => {});
  }
}
