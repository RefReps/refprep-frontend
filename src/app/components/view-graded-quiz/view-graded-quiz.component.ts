import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/course';
import { ActiveVersion, AnswerOverrides, GradedQuiz, QuizQuestion, UserAnswers } from 'src/app/models/quiz';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { selectQuiz } from 'src/app/_store/quiz/quiz.selector';
import { saveQuizSubmissionId } from 'src/app/_store/quizAnswer/quizAnswer.action';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-view-graded-quiz',
  templateUrl: './view-graded-quiz.component.html',
  styleUrls: ['./view-graded-quiz.component.scss']
})
export class ViewGradedQuizComponent implements OnInit {
  quizId: string = '';
  submissionId: string = '';
  courseId: string = '';
  passingGrade: number = 0;
  quizInfo: ActiveVersion = {};
  gradedQuiz: GradedQuiz = {};
  courseInfo: Course = {};
  questions: QuizQuestion[] = [];
  userAnswers: UserAnswers[] = [];
  answerOverrides: AnswerOverrides[] = [];


  constructor(
    private route: ActivatedRoute,
    private quizService: QuizzesService,
    private api: ApiService,
    
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
  this.getQuizName()
  this.getCourseInfo()
  }

  getQuizName() {
    this.quizService.getActiveQuiz(this.quizId).subscribe((info) => {
      this.quizInfo = info;
    });
  }

  getCourseInfo() {
    this.api.getCourse(this.courseId).subscribe((info) => {
      this.courseInfo = info;
      if (typeof this.courseInfo.settings?.enforcementPercent != 'undefined') {
        this.passingGrade = this.courseInfo.settings?.enforcementPercent*.01
      }
    })
    
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

  getGradePercentage(stringDecGrade: Number | undefined) {
    var percentGrade: Number = Number(stringDecGrade) * 100;
    var stringPercentGrade: String = percentGrade.toFixed(2);
    return stringPercentGrade;
  }

  getLetterGrade(stringDecGrade: Number | undefined) {
    var percentGrade: Number = Number(stringDecGrade) * 100;
    var letterGrade: String;
    if (percentGrade >= 97 && percentGrade <= 100) {
      return (letterGrade = 'A+');
    } else if (percentGrade >= 93 && percentGrade <= 96.99) {
      return (letterGrade = 'A');
    } else if (percentGrade >= 90 && percentGrade <= 92.99) {
      return (letterGrade = 'A-');
    } else if (percentGrade >= 87 && percentGrade <= 89.99) {
      return (letterGrade = 'B+');
    } else if (percentGrade >= 83 && percentGrade <= 86.99) {
      return (letterGrade = 'B');
    } else if (percentGrade >= 80 && percentGrade <= 82.99) {
      return (letterGrade = 'B-');
    } else if (percentGrade >= 77 && percentGrade <= 79.99) {
      return (letterGrade = 'C+');
    } else if (percentGrade >= 73 && percentGrade <= 76.99) {
      return (letterGrade = 'C');
    } else if (percentGrade >= 70 && percentGrade <= 72.99) {
      return (letterGrade = 'C-');
    } else if (percentGrade >= 67 && percentGrade <= 69.99) {
      return (letterGrade = 'D+');
    } else if (percentGrade >= 63 && percentGrade <= 66.99) {
      return (letterGrade = 'D');
    } else if (percentGrade >= 60 && percentGrade <= 62.99) {
      return (letterGrade = 'D-');
    } else {
      return (letterGrade = 'F');
    }
  }
}
