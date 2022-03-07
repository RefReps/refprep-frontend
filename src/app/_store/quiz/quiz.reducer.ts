import { QuizQuestion } from 'src/app/models/quiz';
import { createReducer, Action, on } from '@ngrx/store';
import * as QuizActions from './quiz.actions';

const initState: QuizQuestion[] = [];

export const quizReducer = createReducer(
  initState,
  on(QuizActions.addQuestion, (state, { question }) => {
    state = state.filter((q) => q.questionNumber != question.questionNumber);
    state.push(question);
    return state;
  }),
  on(QuizActions.removeQuestion, (state, { number }) => {
    return state.filter((q) => q.questionNumber != number);
  }),
  on(QuizActions.clearQuestions, () => {
    return [];
  })
);
