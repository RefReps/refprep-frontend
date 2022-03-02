export class QuizSubmission {
    id?: string;
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
