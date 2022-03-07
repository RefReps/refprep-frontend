import { QuizQuestion } from './../../models/quiz';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectQuiz =
  createFeatureSelector<ReadonlyArray<QuizQuestion>>('quiz');
