import { QuizQuestion } from "./quiz-question";

export class QuizVersion {
    _id?: string;
    questions?: QuizQuestion[]
    versionNumber?: number;
    quizSubmissions?: object;
}
