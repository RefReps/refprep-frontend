import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent implements OnInit {

  quizForm = new FormGroup({
    quizName: new FormControl(''),
    quizQuestion: new FormControl(''),
    quesType: new FormGroup({
      selectedQuestType: new FormControl(''),
    }),
    multipleChoiceType: new FormGroup({
      answersAllowed: new FormControl(''),
      option1Value: new FormControl(''),
      option2Value: new FormControl(''),
      option3Value: new FormControl(''),
      option4Value: new FormControl(''),
      correctAnswer: new FormControl(''),
    }),
    trueFalseType: new FormGroup({
      trueFalse: new FormControl(''),
    }),
    textBoxType: new FormGroup({
      freeResponse: new FormControl(''),
      otherAccepted: new FormControl(''),
      otherAccepted1: new FormControl(''),
      otherAccepted2: new FormControl(''),
      otherAccepted3: new FormControl(''),
      otherAccepted4: new FormControl(''),
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


}
