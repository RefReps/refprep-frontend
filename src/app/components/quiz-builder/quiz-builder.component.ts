import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent implements OnInit {
  isLinear = false;

  quizForm = this.formBuilder.group({
    quizQuestion: [''],
    selectedQuestType: [''],
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
    answer: [''],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Your quiz question has been submitted', this.quizForm.value, this.multipleChoiceType.value);
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
