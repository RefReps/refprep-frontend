import { addQuestion, moveQuestion, clearQuestions } from './../../_store/quiz/quiz.actions';
import { selectQuiz } from './../../_store/quiz/quiz.selector';
import { Store } from '@ngrx/store';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz, QuizQuestion } from 'src/app/models/quiz';
import { ApiService } from 'src/service/api.service';
import { DialogService } from 'src/service/dialog.service';
import { QuizBuilderComponent } from '../quiz-builder/quiz-builder.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-course-quiz-edit',
  templateUrl: './course-quiz-edit.component.html',
  styleUrls: ['./course-quiz-edit.component.css'],
})
export class CourseQuizEditComponent implements OnInit, OnDestroy {
  quizId: string = '';
  quizInfo: Quiz = {};
  quizQuestions$ = this.store.select(selectQuiz);

  constructor(
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private quizService: QuizzesService,
    private store: Store
  ) {}
  ngOnDestroy(): void {
    this.store.dispatch(clearQuestions())
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('quizId');
      if (id) {
        this.quizId = id;
      }
    });

    if (this.quizId) {
      this.quizService.getActiveQuiz(this.quizId).subscribe((activeVersion) => {
        this.quizInfo = activeVersion.quiz || {};
        activeVersion.quizVersion?.questions?.forEach((question) => {
          this.store.dispatch(addQuestion({ question }));
        });
      });
    }
  }

  openQuizBuilderDialog(contentId: string): void {
    this.dialogService.open(QuizBuilderComponent, { contentId });
  }

  onDrop(event: any): void {
    if (event.previousContainer === event.container) {
      this.store.dispatch(
        moveQuestion({
          questionNumber: event.previousIndex + 1,
          newNumber: event.currentIndex + 1,
        })
      );
    }
  }

  onQuizSave(): void {
    if (this.quizId) {
      this.quizQuestions$
        .subscribe((quiz) => {
          this.quizService
            .batchPutQuestionsOnQuiz(this.quizId, quiz, [])
            .subscribe((res) => {
              res.quizVersion?.questions?.forEach((question) => {
                this.store.dispatch(addQuestion({ question }));
              });
            });
        })
        .unsubscribe();
    }
  }
}
