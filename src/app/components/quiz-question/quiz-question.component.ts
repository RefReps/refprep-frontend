import { Component, Input, Output } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuizAnswerSaverService } from 'src/app/_services/quiz-answer-saver.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
   @Input() question: Question = {}
   @Input() quizId: string = ''

  // need to formate {"1": "Answer"}
  constructor(
    private quizAnswerService: QuizAnswerSaverService,
    private router: Router,
    private api: ApiService,
  ) {   
  }
  
  ngOnInit(): void { 
  }

  updateAnswers(value: string) {
    let answer: any = {[this.question.questionNumber!]: value}
    console.log(answer)
    this.quizAnswerService.saveAnswer(answer)
  }

  submitQuiz(): void  {
    if (this.quizId) {
      this.api.submissionSave(this.quizId, this.quizAnswerService.getAnswers()).subscribe(data => {
        this.api.gradeQuiz(this.quizId).subscribe(data => {
          console.log(data)
        })
      })
    }
  }
  

 
}
