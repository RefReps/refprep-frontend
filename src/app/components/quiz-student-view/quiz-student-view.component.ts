import { saveQuizSubmissionId } from './../../_store/quizAnswer/quizAnswer.action';
import { selectQuizAnswers } from './../../_store/quizAnswer/quizAnswer.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz, QuizQuestion } from 'src/app/models/quiz';
import { QuizzesService } from 'src/app/_services/quizzes.service';

@Component({
  selector: 'app-quiz-student-view',
  templateUrl: './quiz-student-view.component.html',
  styleUrls: ['./quiz-student-view.component.scss'],
})
export class QuizStudentViewComponent implements OnInit {
  quizId: string = '';
  submissionId: string = '';
  questions: QuizQuestion[] = [];
  quiz: Quiz = {}
  questionAnswer$ = this.store.select(selectQuizAnswers);

  constructor(
    private quizService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { }

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
                    this.router.navigate(['/courses', id, 'quiz', this.quizId]);
                  });
                });
            });
        })
        .unsubscribe();
    }
  }
}
