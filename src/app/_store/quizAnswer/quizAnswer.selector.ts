import { QuizQuestion } from 'src/app/models/quiz';
import { createFeatureSelector } from '@ngrx/store';

export const selectQuizAnswers =
  createFeatureSelector<{ id: string; questions: QuizQuestion[] }>(
    'quizAnswers'
  );
