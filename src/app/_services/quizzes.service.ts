import { ActiveVersion, Quiz, UserGrade } from './../models/quiz';
import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizQuestion, QuizStart, QuizSubmission } from '../models/quiz';

import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  baseUrl: string = isDevMode() ? dev.apiUrl : prod.apiUrl;
  quizUrl: string = `${this.baseUrl}/api/quiz`;

  constructor(private http: HttpClient) {}

  getQuizInfo(quizId: string): Observable<ActiveVersion> {
    return this.http.get<ActiveVersion>(`${this.quizUrl}/${quizId}`);
  }

  // Saves user's answers quiz questions to the submissionId on the quizId
  saveUserQuizAnswers(
    quizId: string,
    submissionId: string,
    questions: QuizQuestion[]
  ): Observable<QuizQuestion[]> {
    return this.http
      .put<QuizSubmission>(
        `${this.quizUrl}/${quizId}/submission/${submissionId}`,
        { questions }
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

  getActiveQuiz(quizId: string): Observable<ActiveVersion> {
    return this.http.get<ActiveVersion>(`${this.quizUrl}/${quizId}`);
  }

  postNewQuiz(name: string): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.quizUrl}`, { name });
  }

  finishSubmission(
    quizId: string,
    submissionId: string
  ): Observable<QuizSubmission> {
    return this.http
      .post<{ submisson: QuizSubmission }>(
        `${this.quizUrl}/${quizId}/grade/${submissionId}`,
        {}
      )
      .pipe(map((res) => res.submisson));
  }

  batchPutQuestionsOnQuiz(
    quizId: string,
    questions: QuizQuestion[],
    deleteQuestions: number[]
  ): Observable<ActiveVersion> {
    return this.http.put<ActiveVersion>(`${this.quizUrl}/${quizId}/batch`, {
      questions,
      deleteQuestions,
    });
  }

  getAllQuizGrades(quizId: string): Observable<UserGrade[]> {
    return this.http
      .get<{ submissions: UserGrade[] }>(
        `${this.quizUrl}/${quizId}/view-grades`
      )
      .pipe(map((res) => res.submissions));
  }

  getAllUserGrades(quizId: string): Observable<UserGrade[]> {
    return this.http
      .get<{ submissions: UserGrade[] }>(`${this.quizUrl}/${quizId}/grade`)
      .pipe(map((res) => res.submissions));
  }
}
