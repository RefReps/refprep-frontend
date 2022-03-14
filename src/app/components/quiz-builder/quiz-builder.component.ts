import { selectQuiz } from './../../_store/quiz/quiz.selector';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Quiz, QuizQuestion } from 'src/app/models/quiz';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { ApiService } from 'src/service/api.service';
import { Store } from '@ngrx/store';
import { addQuestion } from 'src/app/_store/quiz/quiz.actions';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent {
  isLinear = false;

  quizId: string = '';
  quizQuestions$ = this.store.select(selectQuiz);

  quizForm = this.formBuilder.group({
    question: [''],
    type: [''],
  });

  multipleChoiceType = this.formBuilder.group({
    answersAllowed: [''],
    A: [''],
    B: [''],
    C: [''],
    D: [''],
    answers: [''],
  });

  trueFalseType = this.formBuilder.group({
    answers: [''],
  });

  textBoxType = this.formBuilder.group({
    answers: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.quizId = data.data.quizId
  }

  addMultipleChoice(): void {
    const question: QuizQuestion = {};
    this.quizQuestions$.subscribe(questions => {
      question.question = this.quizForm.get('question')?.value;
      question.questionNumber = questions.length + 1;
      question.questionType = this.quizForm.get('type')?.value;
      question.responses = {
        A: this.multipleChoiceType.get('A')?.value,
        B: this.multipleChoiceType.get('B')?.value,
        C: this.multipleChoiceType.get('C')?.value,
        D: this.multipleChoiceType.get('D')?.value,
      }
      question.answers = [this.multipleChoiceType.get('answers')?.value];
      question.points = 1;
    }).unsubscribe()
    this.store.dispatch(addQuestion({ question }));
  };

  addTrueFalse(): void {
    const question: QuizQuestion = {};
    this.quizQuestions$.subscribe(questions => {
      question.question = this.quizForm.get('question')?.value;
      question.questionNumber = questions.length + 1;
      question.questionType = this.quizForm.get('type')?.value;
      question.answers = [this.trueFalseType.get('answers')?.value];
      question.points = 1;
    }).unsubscribe()
    this.store.dispatch(addQuestion({ question }));
  }

  addFreeResponse(): void {
    let question: QuizQuestion = {};
    this.quizQuestions$.subscribe(questions => {
      question.question = this.quizForm.get('question')?.value;
      question.questionNumber = questions.length + 1;
      question.questionType = this.quizForm.get('type')?.value;
      question.answers = [this.textBoxType.get('answers')?.value];
      question.points = 1;
    }).unsubscribe()
    this.store.dispatch(addQuestion({question: {...question}}));
  }

  saveQuestionToStore(): void {
    let questionType = this.quizForm.get('type')?.value;

    switch (questionType) {
      case '1_CHOICE':
        this.addMultipleChoice();
        break;
      case 'TRUE_FALSE':
        this.addTrueFalse();
        break;
      case 'FREE_RESPONSE':
        this.addFreeResponse();
        break;
    }
  }

  get answers(): string[] {
    if (this.quizForm.get('type')?.value == 'FREE_RESPONSE') {
      if (this.textBoxType.get('answers')?.value == undefined) {
        return []
      }
      return [this.textBoxType.get('answers')?.value]
    }
    return [this.multipleChoiceType.get('answers')?.value]
  }

  get answer(): boolean {
    return this.trueFalseType.get('answer')?.value == 'true'
  }

}
