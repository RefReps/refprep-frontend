import { QuizQuestion } from 'src/app/models/quiz';
import { createReducer, Action, on } from '@ngrx/store';
import * as QuizActions from './quiz.actions';

const initState: QuizQuestion[] = [];

export const quizReducer = createReducer(
  initState,
  on(QuizActions.addQuestion, (state, { question }) => {
    const newState = state.filter(
      (q) => q.questionNumber != question.questionNumber
    );
    newState.push(Object.assign({}, question));
    return newState;
  }),
  on(QuizActions.moveQuestion, (state, { questionNumber, newNumber }) => {
    if (questionNumber > newNumber) {
      let questions = state.map((question) => {
        let newQuestion = Object.assign({}, question);

        if (
          question.questionNumber! < questionNumber &&
          question.questionNumber! >= newNumber
        ) {
          newQuestion.questionNumber!++;
        }

        if (question.questionNumber == questionNumber) {
          newQuestion.questionNumber = newNumber;
        }

        return newQuestion;
      });

      questions = questions.sort(
        (q1, q2) => q1.questionNumber! - q2.questionNumber!
      );

      return questions;
    } else if (questionNumber < newNumber) {
      let questions = state.map((question) => {
        let newQuestion = Object.assign({}, question);

        if (
          question.questionNumber! > questionNumber &&
          question.questionNumber! <= newNumber
        ) {
          newQuestion.questionNumber!--;
        }

        if (question.questionNumber == questionNumber) {
          newQuestion.questionNumber = newNumber;
        }

        return newQuestion;
      });
      questions = questions.sort(
        (q1, q2) => q1.questionNumber! - q2.questionNumber!
      );

      return questions;
    } else {
      return state;
    }
  }),
  on(QuizActions.removeQuestion, (state, { number }) => {
    let currentNumber = 1;
    // Remove question and then collapse numbers
    return state
      .filter((q) => q.questionNumber != number)
      .map((q) => {
        let question = Object.assign({}, q, { questionNumber: currentNumber });
        currentNumber++;
        return question;
      });
  }),
  on(QuizActions.clearQuestions, () => {
    return [];
  })
);
