import { QuizQuestion } from 'src/app/models/quiz';

import { props, createAction, Action } from '@ngrx/store';

export const addQuizAnswer = createAction(
  '[QuizAnswer] Add Answer',
  props<{ question: QuizQuestion }>()
);

export const clearQuizAnswers = createAction('[QuizAnswer] Clear Answers');
