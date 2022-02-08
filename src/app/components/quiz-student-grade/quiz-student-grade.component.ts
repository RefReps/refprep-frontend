import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserGrade } from 'src/app/models/userGrade';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quiz-student-grade',
  templateUrl: './quiz-student-grade.component.html',
  styleUrls: ['./quiz-student-grade.component.scss']
})
export class QuizStudentGradeComponent implements OnInit {

  @Input() quizId: string = '';
  email: string = '';
  userGrade: UserGrade = {}
  
  constructor(
    private Api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('email');
        if(id) {
          this.email = id;
        }
      })
    this.getQuizGrade();
  }

  getQuizGrade(): void {
    this.Api.getQuizGrade(this.quizId, this.email)
      .subscribe(info => this.userGrade = info)
  }

}
