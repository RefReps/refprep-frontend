import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-student-view',
  templateUrl: './quiz-student-view.component.html',
  styleUrls: ['./quiz-student-view.component.scss']
})
export class QuizStudentViewComponent implements OnInit {

  userAnswers: any = {}

  constructor() { }


  ngOnInit(): void {
  }

}
