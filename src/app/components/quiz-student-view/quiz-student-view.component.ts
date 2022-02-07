import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-student-view',
  templateUrl: './quiz-student-view.component.html',
  styleUrls: ['./quiz-student-view.component.scss']
})
export class QuizStudentViewComponent implements OnInit {

  userAnswers: any = {"1": "ABC", "2" : "Dog", "3" : true, "4" : "C"}
  
  constructor() { }

  ngOnInit(): void {
  }

}
