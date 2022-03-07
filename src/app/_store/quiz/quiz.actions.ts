import { QuizQuestion } from 'src/app/models/quiz';

import { props, createAction, Action } from '@ngrx/store';

export const addQuestion = createAction(
  '[Quiz] Add Question',
  props<{ question: QuizQuestion }>()
);

export const removeQuestion = createAction(
  '[Quiz] Remove Question',
  props<{ number: number }>()
);

export const clearQuestions = createAction('[Quiz] Clear Questions');
