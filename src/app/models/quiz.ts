export interface ActiveVersion {
  quiz?: Quiz;
  quizVersion?: QuizVersion;
}

export interface QuizStart {
  quizQuestions: QuizQuestion[];
  quizSubmission: QuizSubmission;
}

export class Quiz {
  _id?: string;
  name?: string;
  quizVersions?: QuizVersion[];
  activeVersion?: number;
}

export class QuizVersion {
  _id?: string;
  questions?: QuizQuestion[];
  versionNumber?: number;
  quizSubmissions?: QuizSubmission[];
}

export class QuizQuestion {
  questionNumber?: number;
  questionType?: string;
  question?: string;
  responses?: Responses;
  answers?: string[];
  answer?: boolean;
  points?: Number;
}

class Responses {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
}

// interface Responses { // This might be our solution to dynamic responses
//     [key: string]: string;
// }

export class QuizSubmission {
  _id?: string;
  userId?: string;
  quizId?: string;
  quizVersionId?: string;
  submitted?: boolean;
  submissionNumber?: Number;
  userAnswers?: [];
  answerOverrides?: [];
  isGraded?: boolean;
  grade?: Number;
  dateStarted?: string;
  dateFinished?: string;
}

export class UserGrade {
  _id?: string;
  grade?: Number;
  dateStarted?: string;
  dateFinished?: string;
  submissionNumber?: number;
  email?: string;
}
