import { addQuizAnswer } from './../../_store/quizAnswer/quizAnswer.action';
import { selectQuizAnswers } from './../../_store/quizAnswer/quizAnswer.selector';
import { Component, Input, Output } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { QuizQuestion } from 'src/app/models/quiz';
import { QuizAnswerSaverService } from 'src/app/_services/quiz-answer-saver.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
   @Input() question: QuizQuestion = {};
   @Input() quizId: string = ''; // dont need this input
   questionAnswers$ = this.store.select(selectQuizAnswers)

  constructor(
    private store: Store,
  ) {   
  }
  
  ngOnInit(): void { 
  }

  updateAnswers(value: string) {
    const question: QuizQuestion = {questionNumber: this.question.questionNumber, answers: [value]}
    this.store.dispatch(addQuizAnswer({question}))
  }
}
