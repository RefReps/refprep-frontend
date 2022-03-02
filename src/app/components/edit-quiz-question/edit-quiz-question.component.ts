import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuizAnswerSaverService } from 'src/app/_services/quiz-answer-saver.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-quiz-question',
  templateUrl: './edit-quiz-question.component.html',
  styleUrls: ['./edit-quiz-question.component.css']
})
export class EditQuizQuestionComponent implements OnInit {

  @Input() question: Question = {}
  @Input() quizId: string = ''

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
}
