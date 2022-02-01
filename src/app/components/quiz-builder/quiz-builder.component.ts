import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent implements OnInit {

  quizForm = this.formBuilder.group({
    quizName: [''],
    quizQuestion: [''],
    quesType: this.formBuilder.group({
      selectedQuestType: [''],
    }),
    multipleChoiceType: this.formBuilder.group({
      answersAllowed: [''],
      option1Value: [''],
      option2Value: [''],
      option3Value: [''],
      option4Value: [''],
      correctAnswer: [''],
    }),
    trueFalseType: this.formBuilder.group({
      trueFalse: [''],
    }),
    textBoxType: this.formBuilder.group({
      freeResponse: [''],
      otherAccepted: [''],
      otherAccepted1: [''],
      otherAccepted2: [''],
      otherAccepted3: [''],
      otherAccepted4: [''],
    }),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Your quiz question has been submitted', this.quizForm.value);
    this.quizForm.reset;
  }

  get quizName() {
    return this.quizForm.get('quizName')?.value;
  }

  get option1Value() {
    return this.quizForm.get(['multipleChoiceType', 'option1Value'])?.value;
  }

  get option2Value() {
    return this.quizForm.get(['multipleChoiceType', 'option2Value'])?.value;
  }

  get option3Value() {
    return this.quizForm.get(['multipleChoiceType', 'option3Value'])?.value;
  }

  get option4Value() {
    return this.quizForm.get(['multipleChoiceType', 'option4Value'])?.value;
  }

}
