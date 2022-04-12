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
  points?: number;
}

class Responses {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
}

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
  submissionId?: string;
  userId?: string;
  quizId?: string;
  grade?: Number;
  dateStarted?: string;
  dateFinished?: string;
  submissionNumber?: number;
  email?: string;
}

export class GradedQuiz {
  userId?: string;
  submissionId?: string;
  quizId?: string;
  submissionNumber?: Number;
  grade?: Number;
  userAnswers?: UserAnswers[];
  answerOverrides?: AnswerOverrides[];
  quizQuestions?: QuizQuestion[];
  dateStarted?: string;
  dateFinished?: string;
}

export class AnswerOverrides {
  questionNumber?: Number;
  isCorrect?: boolean;
  isPointDifferent?: boolean;
  pointAward?: number;
}

export class UserAnswers {
  _id?: string;
  questionNumber?: number;
  answers?: string[]

}