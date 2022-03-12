import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, QuizQuestion } from 'src/app/models/quiz';
import { QuizAnswerSaverService } from 'src/app/_services/quiz-answer-saver.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-quiz-question',
  templateUrl: './edit-quiz-question.component.html',
  styleUrls: ['./edit-quiz-question.component.css']
})
export class EditQuizQuestionComponent implements OnInit {

  @Input() question: QuizQuestion = {}
  @Input() quizId: string = ''
  quizInfo: Quiz = {};

  // need to formate {"1": "Answer"}
  constructor(
    private quizAnswerService: QuizAnswerSaverService,
    private router: Router,
    private api: ApiService,
  ) {
  }

  ngOnInit(): void {
  }

  updateAnswers(value: string) {
    let answer: any = { [this.question.questionNumber!]: value }
    this.quizAnswerService.saveAnswer(answer)
  }

  // getQuizName() {
  //   this.api.getQuizInfo(this.quizId)
  //     .subscribe(info => {
  //       this.quizInfo = info
  //     })
  // }
}
