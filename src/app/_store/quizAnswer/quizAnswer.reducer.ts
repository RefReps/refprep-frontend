import { QuizQuestion } from 'src/app/models/quiz';
import { createReducer, Action, on } from '@ngrx/store';
import * as QuizAnswerActions from './quizAnswer.action';

const initState: QuizQuestion[] = [];

export const quizAnswerReducer = createReducer(
  initState,
  on(QuizAnswerActions.addQuizAnswer, (state, { question }) => {
    state = state.filter((q) => q.questionNumber != question.questionNumber);
    state.push(question);
    return state;
  }),
  on(QuizAnswerActions.clearQuizAnswers, () => [])
);
