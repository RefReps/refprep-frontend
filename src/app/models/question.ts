export class Question {
    type? : string;
    question? : string;
    response? : Responses;
    answers? : string[];  
    answer? : boolean;

}
class Responses {
    A? : string;
    B? : string;
    C? : string;
    D? : string;
}