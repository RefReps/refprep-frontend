import { QuizQuestion } from './models/quiz';

export interface AppState {
  readonly quiz: QuizQuestion[];
  readonly quizAnswers: { id: string; questions: QuizQuestion[] };
}
