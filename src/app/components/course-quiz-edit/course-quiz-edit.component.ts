import { QuizzesService } from 'src/app/_services/quizzes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz, QuizQuestion } from 'src/app/models/quiz';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { QuizBuilderComponent } from '../quiz-builder/quiz-builder.component';

@Component({
  selector: 'app-course-quiz-edit',
  templateUrl: './course-quiz-edit.component.html',
  styleUrls: ['./course-quiz-edit.component.css']
})
export class CourseQuizEditComponent implements OnInit {

  questions: QuizQuestion[] = [];
  quizId: string = '';
  quizInfo: Quiz = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private dialogService: DialogService,
    private quizService: QuizzesService) { }


  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('quizId');
        if (id) {
          this.quizId = id
        }
      })

    if (this.quizId) {
      this.quizService.getActiveQuiz(this.quizId).subscribe(activeVersion => {
        this.quizInfo = activeVersion.quiz || {}
        this.questions = activeVersion.quizVersion?.questions || []
      })
      // this.api.getQuizInfo(this.quizId).subscribe(data => {
      //   console.log(data)
      //   for (let i of Object.keys(data.questions)) {
      //     this.questions.push(data.questions[i])
      //   }
      // })
    }
  }

  openQuizBuilderDialog(contentId: string): void {
    this.dialogService.open(QuizBuilderComponent, { contentId })
  }

}
