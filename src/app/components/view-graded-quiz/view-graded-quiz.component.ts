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
  courseId: string = '';
  questions: QuizQuestion[] = [];
  gradedQuiz: GradedQuiz = {};
  userAnswers: UserAnswers[] = [];
  answerOverrides: AnswerOverrides[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizzesService,
    
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let qid = params.get('quizId');
      if (qid) {
        this.quizId = qid;
      }
      let sid = params.get('submissionId');
      if (sid) {
        this.submissionId = sid;
      }
      let cid = params.get('courseId');
      if (cid) {
        this.courseId = cid;
      }
    });
    if (this.quizId) {
      this.quizService.getStudentQuizAttempt(this.quizId, this.submissionId).subscribe((data) => {
        this.gradedQuiz = data
        this.getQuizQuestions()
        this.getUserAnswers()
        this.getAnswerOverrides()
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

  getAnswerOverrides(): void {
    if (typeof this.gradedQuiz.answerOverrides != 'undefined') {
      this.answerOverrides = this.gradedQuiz.answerOverrides;
   }
  }

  getQuestionCorrectness(i: number): number {
    const correct = this.answerOverrides.filter(q => 
      q.questionNumber == i )[0].isCorrect
    if (correct == true) {
      return 1
    }
    else {
      return 0
    }
  }

  // compareUserToCorrectAnswer(i: number): string {
  //   const userResponse = this.userAnswers.filter(q => 
  //     q.questionNumber == i )[0]
  //       .answers?.slice().shift() || ''
  //   const correctResponse = this.questions.filter(q =>
  //     q.questionNumber == i)[0]
  //       .answers?.slice().shift || ''
  //   if (userResponse == correctResponse) {

  //   }
  // }
}
