import { Course } from 'src/app/models/course';
import { QuizQuestion } from './models/quiz';

export interface AppState {
  readonly quiz: QuizQuestion[];
  readonly quizAnswers: { id: string; questions: QuizQuestion[] };
  readonly course: Course;
}
