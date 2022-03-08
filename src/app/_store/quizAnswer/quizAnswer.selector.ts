import { QuizQuestion } from 'src/app/models/quiz';
import { createFeatureSelector } from '@ngrx/store';

export const selectQuizAnswers =
  createFeatureSelector<ReadonlyArray<QuizQuestion>>('quizAnswers');
