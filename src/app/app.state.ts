import { QuizQuestion } from './models/quiz';

export interface AppState {
  readonly quiz: QuizQuestion[];
}
