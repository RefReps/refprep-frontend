import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AnswerOverrides, GradedQuiz, QuizQuestion, UserAnswers } from 'src/app/models/quiz';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { selectQuiz } from 'src/app/_store/quiz/quiz.selector';
import { saveQuizSubmissionId } from 'src/app/_store/quizAnswer/quizAnswer.action';

@Component({
  selector: 'app-view-graded-quiz',
  templateUrl: './view-graded-quiz.component.html',
  styleUrls: ['./view-graded-quiz.component.scss']
})
export class ViewGradedQuizComponent implements OnInit {
  quizId: string = '';
  submissionId: string = '';
  questions: QuizQuestion[] = [];
  gradedQuiz: GradedQuiz = {};
  userAnswers: UserAnswers[] = []

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizzesService,
    
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('quizId');
      if (id) {
        this.quizId = id;
      }
    });
    this.route.paramMap.subscribe((params) => {
      let id = params.get('submissionId');
      if (id) {
        this.submissionId = id;
      }
    });
    if (this.quizId) {
      this.quizService.getStudentQuizAttempt(this.quizId, this.submissionId).subscribe((data) => {
        this.gradedQuiz = data
        this.getQuizQuestions()
        this.getUserAnswers()
    })
  }

  }

  getQuizQuestions() {
    if (typeof this.gradedQuiz.quizQuestions != 'undefined') {
      this.questions = this.gradedQuiz.quizQuestions;
   }
  }

  getUserAnswers() {
    if (typeof this.gradedQuiz.userAnswers != 'undefined') {
      this.userAnswers = this.gradedQuiz.userAnswers;
   }
  }

   getUserAnswerByQuestionNumber(i: number): string {
      return this.userAnswers.filter(q => 
      q.questionNumber == i )[0]
        .answers?.slice().shift() || ''
  }
}
