import { selectQuiz } from './../../_store/quiz/quiz.selector';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Quiz, QuizQuestion } from 'src/app/models/quiz';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { ApiService } from 'src/service/api.service';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { addQuestion } from 'src/app/_store/quiz/quiz.actions';

@Component({
  selector: 'app-quiz-builder',
  templateUrl: './quiz-builder.component.html',
  styleUrls: ['./quiz-builder.component.css']
})
export class QuizBuilderComponent {
  isLinear = false;

  quizId: string = '';
  questions: QuizQuestion[] = [];
  quiz: Quiz = {};
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
    private api: ApiService,
    private quizService: QuizzesService,
    private route: ActivatedRoute,
    private router: Router,
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
      question.answers = [];
      question.points = 1;
      this.store.dispatch(addQuestion({ question }));
    }).unsubscribe()
    console.log(question);
  };

  addTrueFalse(): void {
    const question: QuizQuestion = {};
    this.quizQuestions$.subscribe(questions => {
      question.question = this.quizForm.get('question')?.value;
      question.questionNumber = questions.length + 1;
      question.questionType = this.quizForm.get('type')?.value;
      question.answers = [];
      question.points = 1;
      console.log(question);
      this.store.dispatch(addQuestion({ question }));
    }).unsubscribe()
  }

  addFreeResponse(): void {
    let question: QuizQuestion = {};
    this.quizQuestions$.subscribe(questions => {
      console.log('...hi...')
      question.question = this.quizForm.get('question')?.value;
      question.questionNumber = questions.length + 1;
      question.questionType = this.quizForm.get('type')?.value;
      question.answers = [];
      question.points = 1;
      this.store.dispatch(addQuestion({ question }));
    }).unsubscribe()
    console.log(question);
  }

  addQuestion(): void {
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
    }

  }

  onSubmit(): void {
    if (this.quizId) {
      this.quizQuestions$
        .subscribe((quiz) => {
          this.quizService
            .batchPutQuestionsOnQuiz(this.quizId, quiz, [])
            .subscribe(() => {
              this.route.paramMap.subscribe((params) => {
                let id = params.get('courseId');
                this.router.navigate(['/courses', id, 'quiz', this.quizId, '/batch']);
              });
            });
        }).unsubscribe();
    }
    console.warn('Your quiz question has been submitted', this.quizForm.value, this.multipleChoiceType.value);
  }


  onPost(): void {
    if (!this.quizId) {
      return
    }
    this.saveQuestion()
    this.quizService.batchPutQuestionsOnQuiz(this.quizId, this.questions, [])
    while (this.questions.length > 0) {
      this.questions.pop();
    }
    // window.location.reload()
  }

  saveQuestion(): void {
    this.questions.push({
      questionNumber: 100,
      questionType: this.quizForm.get('type')?.value,
      question: this.quizForm.get('question')?.value,
      responses: {
        A: this.multipleChoiceType.get('A')?.value,
        B: this.multipleChoiceType.get('B')?.value,
        C: this.multipleChoiceType.get('C')?.value,
        D: this.multipleChoiceType.get('D')?.value,
      },
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
