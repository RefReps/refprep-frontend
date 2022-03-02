import { QuizVersion } from "./quiz-version";

export class Quiz {
    _id?: string;
    name?: string;
    quizVersions?: Object;
    activeVersion?: number;

}

export interface ActiveVersion {
    quiz?: Quiz;
    activeVersion?: QuizVersion
}
