import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserGrade } from 'src/app/models/userGrade';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quiz-grades-viewer',
  templateUrl: './quiz-grades-viewer.component.html',
  styleUrls: ['./quiz-grades-viewer.component.scss']
})
export class QuizGradesViewerComponent implements OnInit {

  @Input() quizId: string = '';
  userGrades: UserGrade[] = [];

  constructor(
    private Api: ApiService,

  ) { }

  ngOnInit(): void {
    this.getQuizGrades()
  }

  getQuizGrades(): void {
    this.Api.getAllQuizGrades(this.quizId)
    .subscribe(info => {
      this.userGrades = info
    })
  }

  getGradePercentage(stringDecGrade: string | undefined){
    var percentGrade: Number = Number(stringDecGrade)*100
    var stringPercentGrade: String = percentGrade.toFixed(2)
    return stringPercentGrade
  }

  getLetterGrade(stringDecGrade: string | undefined){
    var percentGrade: Number = Number(stringDecGrade)*100
    var letterGrade: String
    if(percentGrade>=97 && percentGrade<=100){
      return letterGrade = "A+"
    }
    else if(percentGrade>=93 && percentGrade<=96.99){
      return letterGrade = "A"
    }
    else if(percentGrade>=90 && percentGrade<=92.99){
      return letterGrade = "A-"
    }
    else if(percentGrade>=87 && percentGrade<=89.99){
      return letterGrade = "B+"
    }
    else if(percentGrade>=83 && percentGrade<=86.99){
      return letterGrade = "B"
    }
    else if(percentGrade>=80 && percentGrade<=82.99){
      return letterGrade = "B-"
    }
    else if(percentGrade>=77 && percentGrade<=79.99){
      return letterGrade = "C+"
    }
    else if(percentGrade>=73 && percentGrade<=76.99){
      return letterGrade = "C"
    }
    else if(percentGrade>=70 && percentGrade<=72.99){
      return letterGrade = "C-"
    }
    else if(percentGrade>=67 && percentGrade<=69.99){
      return letterGrade = "D+"
    }
    else if(percentGrade>=63 && percentGrade<=66.99){
      return letterGrade = "D"
    }
    else if(percentGrade>=60 && percentGrade<=62.99){
      return letterGrade = "D-"
    }
    else {
      return letterGrade = "F"
    }
  }

}
