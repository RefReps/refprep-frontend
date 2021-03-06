import { saveQuizSubmissionId, clearQuizAnswers } from './../../_store/quizAnswer/quizAnswer.action';
import { selectQuizAnswers } from './../../_store/quizAnswer/quizAnswer.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveVersion, Quiz, QuizQuestion } from 'src/app/models/quiz';
import { QuizzesService } from 'src/app/_services/quizzes.service';

@Component({
  selector: 'app-quiz-student-view',
  templateUrl: './quiz-student-view.component.html',
  styleUrls: ['./quiz-student-view.component.scss'],
})
export class QuizStudentViewComponent implements OnInit, OnDestroy {
  quizId: string = '';
  submissionId: string = '';
  questions: QuizQuestion[] = [];
  quiz: Quiz = {}
  quizInfo: ActiveVersion = {};
  questionAnswer$ = this.store.select(selectQuizAnswers);

  constructor(
    private quizService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnDestroy(): void {
    this.store.dispatch(clearQuizAnswers())
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('quizId');
      if (id) {
        this.quizId = id;
      }
    });

    if (this.quizId) {
      this.quizService.startQuiz(this.quizId).subscribe((data) => {
        this.questions = data.quizQuestions;
        this.store.dispatch(
          saveQuizSubmissionId({ id: data.quizSubmission._id || '' })
        );
      });
    }
    this.getQuizName()
  }

  getQuizName() {
    this.quizService.getActiveQuiz(this.quizId).subscribe((info) => {
      this.quizInfo = info;
    });
  }

  submitQuiz(): void {
    if (this.quizId) {
      this.questionAnswer$
        .subscribe((quiz) => {
          this.quizService
            .saveUserQuizAnswers(this.quizId, quiz.id, quiz.questions)
            .subscribe(() => {
              this.quizService
                .finishSubmission(this.quizId, quiz.id)
                .subscribe(() => {
                  this.route.paramMap.subscribe((params) => {
                    let id = params.get('courseId');
                    this.router.navigate(['/courses', id, 'quiz', this.quizId, 'viewQuiz', quiz.id]);
                  });
                });
            });
        })
        .unsubscribe();
    }
  }
}
