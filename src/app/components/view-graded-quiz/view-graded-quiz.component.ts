import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { QuizQuestion } from 'src/app/models/quiz';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { saveQuizSubmissionId } from 'src/app/_store/quizAnswer/quizAnswer.action';

@Component({
  selector: 'app-view-graded-quiz',
  templateUrl: './view-graded-quiz.component.html',
  styleUrls: ['./view-graded-quiz.component.scss']
})
export class ViewGradedQuizComponent implements OnInit {
  quizId: string = '';
  questions: QuizQuestion[] = [];
  userAnswers?: QuizQuestion[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizzesService,
    private store: Store,
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
  //  this.getUserQuizAnswers()
  }

  // getUserQuizAnswers() {
  //   this.quizService.fetchUserQuizAnswers(this.quizId).subscribe(info => {
  //     this.store.select(
  //       selectQuizAnswers
  //     )
  //   })
  // }

}
