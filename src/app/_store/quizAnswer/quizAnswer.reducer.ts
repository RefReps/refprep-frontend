import { QuizQuestion } from 'src/app/models/quiz';
import { createReducer, Action, on } from '@ngrx/store';
import * as QuizAnswerActions from './quizAnswer.action';

const initState: { id: string; questions: QuizQuestion[] } = {
  id: '',
  questions: [],
};

export const quizAnswerReducer = createReducer(
  initState,
  on(QuizAnswerActions.addQuizAnswer, (state, { question }) => {
    const questions = state.questions.filter(
      (q) => q.questionNumber != question.questionNumber
    );
    questions.push(question);
    return { id: state.id, questions };
  }),
  on(QuizAnswerActions.clearQuizAnswers, () => ({ id: '', questions: [] })),
  on(QuizAnswerActions.saveQuizSubmissionId, (state, { id }) => {
    return { id, questions: state.questions.slice() };
  })
);
