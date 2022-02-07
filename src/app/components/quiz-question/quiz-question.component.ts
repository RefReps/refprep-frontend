import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  

  questionList: Question[] = [
    {questionNumber : 1,
            "type": "1_CHOICE", 
            "question": "What is my favorite color?",
            "responses": {
                "A": "Aqua",
                "B": "Black",
                "C": "Cream",
                "D": "Dark Orange"
            },
            "answers": ["A", "C"], 
        },
        {questionNumber : 2, 
            "type": "MULTI_CHOICE", 
            "question": "What is my favorite colors?",
            "responses": {
                "A": "Blue",
                "B": "Red",
                "C": "Yellow",
                "D": "Orange"
            },
            "answers": ["A", "B"], 
        },
        {questionNumber : 3,  
            "type": "TRUE_FALSE", 
            "question": "Blue is my favorite color.",
            "answer": true, // true | false
        },
        {questionNumber : 4,
            "type": "FREE_RESPONSE",
            "question": "What is my favorite color?", 

            "answers": ["green", "Green", "GREEN"], 
            
        }
  ]



  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}