import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestion } from 'src/app/models/quiz';
import { QuizAnswerSaverService } from 'src/app/_services/quiz-answer-saver.service';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { ApiService } from 'src/service/api.service';


@Component({
  selector: 'app-quiz-student-view',
  templateUrl: './quiz-student-view.component.html',
  styleUrls: ['./quiz-student-view.component.scss']
})
export class QuizStudentViewComponent implements OnInit {
  quizId: string = '';
  submissionId: string = '';
  questions: QuizQuestion[] = [];
 

  constructor(
    private quizAnswerService: QuizAnswerSaverService,
	  private quizService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let id = params.get('quizId');
      if(id) {
        this.quizId = id
      }
    })

    this.route.paramMap
    .subscribe(params => {
      let subid = params.get('submissionId');
      if(subid) {
        this.submissionId = subid
      }
    })

	  if (this.quizId) {
		  this.quizService.startQuiz(this.quizId).subscribe(data => {
        this.questions = data.quizQuestions
		  })
	  }
  }

  submitQuiz(): void  {
    if (this.quizId) {
      this.quizService.saveUserQuizAnswers(this.quizId, this.submissionId, this.questions).subscribe(data => {
        this.quizService.finishSubmission(this.quizId, this.submissionId).subscribe(data => {
          this.route.paramMap
          .subscribe(params => {
            let id = params.get('courseId');
            this.router.navigate(['/courses', id])
          })
        })
      })
    }
  }

}
