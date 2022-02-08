import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuizAnswerSaverService } from 'src/app/_services/quiz-answer-saver.service';


@Component({
  selector: 'app-quiz-student-view',
  templateUrl: './quiz-student-view.component.html',
  styleUrls: ['./quiz-student-view.component.scss']
})
export class QuizStudentViewComponent implements OnInit {

  questions: Question[] = [
    {
			"type": "1_CHOICE",
			"questionNumber": 1,
			"question": "What is my favorite color?",
			"responses": {
				"A": "Red",
				"B": "Blue",
				"C": "Cream",
				"D": "Black"
			},
			"answers": ["B"]
		},
		{
			"type": "TRUE_FALSE",
			"questionNumber": 2,
			"question": "This answer is false.",
			"responses": {
				"A": "A",
				"B": "B",
				"C": "C",
				"D": "D"
			},
			"answer": false
		},
		{
			"type": "FREE_RESPONSE",
			"questionNumber": 3,
			"question": "Enter Sandman",
			"answers": ["Sandman", "sandman", "SANDMAN"]
		},
    {
			"type": "1_CHOICE",
			"questionNumber": 1,
			"question": "What is my favorite color?",
			"responses": {
				"A": "Red",
				"B": "Blue",
				"C": "Cream",
				"D": "Black"
			},
			"answers": ["B"]
		},
		{
			"type": "TRUE_FALSE",
			"questionNumber": 2,
			"question": "This answer is false.",
			"responses": {
				"A": "A",
				"B": "B",
				"C": "C",
				"D": "D"
			},
			"answer": false
		},
		{
			"type": "FREE_RESPONSE",
			"questionNumber": 3,
			"question": "Enter Sandman",
			"answers": ["Sandman", "sandman", "SANDMAN"]
		},
    {
			"type": "1_CHOICE",
			"questionNumber": 1,
			"question": "What is my favorite color?",
			"responses": {
				"A": "Red",
				"B": "Blue",
				"C": "Cream",
				"D": "Black"
			},
			"answers": ["B"]
		},
		{
			"type": "TRUE_FALSE",
			"questionNumber": 2,
			"question": "This answer is false.",
			"responses": {
				"A": "A",
				"B": "B",
				"C": "C",
				"D": "D"
			},
			"answer": false
		},
		{
			"type": "FREE_RESPONSE",
			"questionNumber": 3,
			"question": "Enter Sandman",
			"answers": ["Sandman", "sandman", "SANDMAN"]
		},
    {
			"type": "1_CHOICE",
			"questionNumber": 1,
			"question": "What is my favorite color?",
			"responses": {
				"A": "Red",
				"B": "Blue",
				"C": "Cream",
				"D": "Black"
			},
			"answers": ["B"]
		},
		{
			"type": "TRUE_FALSE",
			"questionNumber": 2,
			"question": "This answer is false.",
			"responses": {
				"A": "A",
				"B": "B",
				"C": "C",
				"D": "D"
			},
			"answer": false
		},
		{
			"type": "FREE_RESPONSE",
			"questionNumber": 3,
			"question": "Enter Sandman",
			"answers": ["Sandman", "sandman", "SANDMAN"]
		},
    {
			"type": "1_CHOICE",
			"questionNumber": 1,
			"question": "What is my favorite color?",
			"responses": {
				"A": "Red",
				"B": "Blue",
				"C": "Cream",
				"D": "Black"
			},
			"answers": ["B"]
		},
		{
			"type": "TRUE_FALSE",
			"questionNumber": 2,
			"question": "This answer is false.",
			"responses": {
				"A": "A",
				"B": "B",
				"C": "C",
				"D": "D"
			},
			"answer": false
		},
		{
			"type": "FREE_RESPONSE",
			"questionNumber": 3,
			"question": "Enter Sandman",
			"answers": ["Sandman", "sandman", "SANDMAN"]
		},
  ]
 

  constructor(
    private quizAnswersSaver: QuizAnswerSaverService,
  ) { }


  ngOnInit(): void {
  }

}
