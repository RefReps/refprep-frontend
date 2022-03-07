import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizQuestion, QuizStart, QuizSubmission } from '../models/quiz';

import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  baseUrl: string = isDevMode() ? dev.apiUrl : prod.apiUrl
  quizUrl: string = '${this.baseUrl}/api/quiz';

  constructor(private http: HttpClient) {}

  // Saves user's answers quiz questions to the submissionId on the quizId
  saveUserQuizAnswers(
    quizId: string,
    submissionId: string,
    questions: QuizQuestion[]
  ): Observable<QuizQuestion[]> {
    return this.http
      .put<QuizSubmission>(
        `${this.quizUrl}/${quizId}/submission/${submissionId}`,
        questions
      )
      .pipe(map((submission) => submission.userAnswers || []));
  }

  // Gets a user questions
  fetchUserQuizAnswers(quizId: string): Observable<QuizQuestion[]> {
    return this.http
      .get<QuizStart>(`${this.quizUrl}/${quizId}/start`)
      .pipe(map((quizStart) => quizStart.quizQuestions));
  }

  // Gets the questions that are in a quiz
  startQuiz(quizId: string): Observable<QuizStart> {
    return this.http
      .get<QuizStart>(`${this.quizUrl}/${quizId}/start`)
      .pipe(map((quizStart) => quizStart));
  }
}
