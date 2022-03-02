export class QuizQuestion {
    questionNumber?: number;
    type?: string;
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
