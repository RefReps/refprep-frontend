import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserGrade } from 'src/app/models/userGrade';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quiz-grades-viewer',
  templateUrl: './quiz-grades-viewer.component.html',
  styleUrls: ['./quiz-grades-viewer.component.scss']
})
export class QuizGradesViewerComponent implements OnInit {

  @Input() quizId: string = '';
  userGrades: UserGrade[] = [];

  constructor(
    private Api: ApiService,

  ) { }

  ngOnInit(): void {
    this.getQuizGrades()
  }

  getQuizGrades(): void {
    this.Api.getAllQuizGrades(this.quizId)
    .subscribe(info => {
      this.userGrades = info
    })
  }

}
