export class QuizQuestion {
    questionNumber?: number;
    type?: string;
    question?: string;
    responses?: Responses;
    answers?: string[];
    answer?: boolean;
}

class Responses {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
}
