import { removeQuestion } from './../../_store/quiz/quiz.actions';
import { selectQuiz } from './../../_store/quiz/quiz.selector';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
  quizQuestions$ = this.store.select(selectQuiz)

  // need to formate {"1": "Answer"}
  constructor(
    private quizAnswerService: QuizAnswerSaverService,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
  }

  get answer(): string {
    return this.question.answers?.slice().shift() || ' '
  }

  updateAnswers(value: string) {
    let answer: any = { [this.question.questionNumber!]: value }
    this.quizAnswerService.saveAnswer(answer)
  }

  removeQuestion() {
    this.store.dispatch(removeQuestion({number: this.question.questionNumber || 0}))
  }

  onDrop(event: any) {

  }

}
