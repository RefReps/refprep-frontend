import { Injectable } from '@angular/core';

const QUESTION_ANSWERS = 'question_answers';

@Injectable({
  providedIn: 'root'
})
export class QuizAnswerSaverService {

  constructor() { }

  getAnswers(): {} {
    return JSON.parse(localStorage.getItem(QUESTION_ANSWERS)!)
    
  }

  saveAnswer(answer: any): void {
    let answers: any = {}
    if (this.getAnswers()) {
      answers = this.getAnswers()
    }
    answers[Object.keys(answer)[0]] = answer[Object.keys(answer)[0]]
    localStorage.setItem(QUESTION_ANSWERS, JSON.stringify(answers))
  }

  removeAnswer(): void {
    localStorage.removeItem(QUESTION_ANSWERS)
  }

}
