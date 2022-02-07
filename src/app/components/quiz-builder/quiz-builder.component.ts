import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuizQuestion } from 'src/app/models/quiz-question';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent {
  isLinear = false;

  quizId: string;
  questions: QuizQuestion[] = []

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
    answer: [''],
    answers: [''],
  });

  trueFalseType = this.formBuilder.group({
    answer: [''],
  });

  textBoxType = this.formBuilder.group({
    answers: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.quizId = data.data.quizId
     }

  onSubmit(): void {
    this.saveQuestion()
    console.warn('Your quiz question has been submitted', this.quizForm.value, this.multipleChoiceType.value);
  }

  onPost(): void {
    if (!this.quizId) {
      return 
    }
    this.saveQuestion()
    this.api.batchPutQuestions(this.quizId, {questions: this.questions})
    while(this.questions.length > 0) {
      this.questions.pop();
  }
    // window.location.reload()
  }

  saveQuestion(): void {
    this.questions.push({
      questionNumber: 100,
      type: this.quizForm.get('type')?.value,
      question: this.quizForm.get('question')?.value,
      responses: {
        A: this.multipleChoiceType.get('A')?.value,
        B: this.multipleChoiceType.get('B')?.value,
        C: this.multipleChoiceType.get('C')?.value,
        D: this.multipleChoiceType.get('D')?.value,
      },
      answer: this.trueFalseType.get('answer')?.value,
      answers: this.answers
    })
    console.log(this.questions)
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
