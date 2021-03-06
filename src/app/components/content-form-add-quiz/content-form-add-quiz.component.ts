import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { QuizBuilderComponent } from '../quiz-builder/quiz-builder.component';

@Component({
  selector: 'app-content-form-add-quiz',
  templateUrl: './content-form-add-quiz.component.html',
  styleUrls: ['./content-form-add-quiz.component.scss']
})
export class ContentFormAddQuizComponent {
  moduleId: string;
  quizForm: FormGroup;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private Api: ApiService,
    private dialogService: DialogService,
    private quizService: QuizzesService
  ) {
    this.moduleId = data.data.moduleId
    this.quizForm = this.formBuilder.group({
      name: ['']
    })
  }

  get quizName() {
    return this.quizForm.get('name')?.value
  }


  finish(): void {
    window.location.reload();
  }

  openAddQuestionDialog(quizName: string): void {
    this.dialogService.open(QuizBuilderComponent, { quizName })
  }

  onFormSubmit() {
    if (this.moduleId && this.quizName) {
      this.quizService.postNewQuiz(this.quizName).subscribe(quiz => {
        const form = new FormData()
        const data = {
          name: this.quizName,
          contentOrder: 50,
          toDocument: quiz._id,
          onModel: 'Quiz',
          moduleId: this.moduleId,
          isPublished: 'true',
          dropDate: Date.now(),
        }
        for (let [key, value] of Object.entries(data)) {
          form.append(key, value)
        }
        this.Api.postContent(form)
        window.location.reload()
      })
    }
  }

}
