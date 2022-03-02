import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Quiz } from 'src/app/models/quiz';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { QuizBuilderComponent } from '../quiz-builder/quiz-builder.component';

@Component({
  selector: 'app-course-quiz-edit',
  templateUrl: './course-quiz-edit.component.html',
  styleUrls: ['./course-quiz-edit.component.css']
})
export class CourseQuizEditComponent implements OnInit {

  questions: Question[] = [];
  quizId: string = '';
  quizInfo: Quiz = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private dialogService: DialogService) { }


  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('quizId');
        if (id) {
          this.quizId = id
        }
      })

    if (this.quizId) {
      this.api.getQuizInfo(this.quizId).subscribe(data => {
        console.log(data)
        for (let i of Object.keys(data.questions)) {
          this.questions.push(data.questions[i])
        }
      })
    }
    this.getQuizName()
  }

  openQuizBuilderDialog(contentId: string): void {
    this.dialogService.open(QuizBuilderComponent, { contentId })
  }

  getQuizName() {
    this.api.getQuizInfo(this.quizId)
      .subscribe(info => {
        this.quizInfo = info
      })
  }

}
