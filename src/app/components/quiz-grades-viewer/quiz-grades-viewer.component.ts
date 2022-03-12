import { QuizzesService } from './../../_services/quizzes.service';
import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActiveVersion } from 'src/app/models/quiz';
import { UserGrade } from 'src/app/models/quiz';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-quiz-grades-viewer',
  templateUrl: './quiz-grades-viewer.component.html',
  styleUrls: ['./quiz-grades-viewer.component.scss'],
})
export class QuizGradesViewerComponent implements OnInit {
  @Input() quizId: string = '';
  userGrades: UserGrade[] = [];
  quizInfo: ActiveVersion = {};
  highestGrades: UserGrade[] = [];
  highestGradeOnly = false;

  constructor(private Api: ApiService, private QuizService: QuizzesService) {}

  ngOnInit(): void {
    this.getQuizName();
    this.getQuizGrades();
  }

  getQuizName() {
    this.QuizService.getActiveQuiz(this.quizId).subscribe((info) => {
      this.quizInfo = info;
    });
  }

  getQuizGrades(): void {
    this.QuizService.getAllQuizGrades(this.quizId).subscribe((info) => {
      this.userGrades = info;
    });
    this.viewOnlyHighestGrade
  }

  viewOnlyHighestGrade() {
    this.userGrades = Array.from(this.userGrades.reduce((m, obj) => {
      const curr = m.get(obj.email);
      return m.set(obj.email, curr ? (curr.grade < obj.grade! ? obj : curr) : obj);
    }, new Map).values());
      console.log(this.userGrades)
  }


  sortGrades(sort: Sort) {
    const data = this.userGrades.slice();
    if (!sort.active || sort.direction === '') {
      this.userGrades = data;
      return;
    }
    this.userGrades = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const isDesc = sort.direction === 'desc';
      switch (sort.active) {
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'submission':
          return compare(a.submissionNumber, b.submissionNumber, isAsc);
        case 'grade':
          this.viewOnlyHighestGrade();
          return compare(a.grade, b.grade, isDesc)
        // if (a.email == b.email) {
          //   return compare(a.grade, b.grade, isDesc);
          // } else {
          //   return compare(a.email, b.email, isAsc);
          // }
        case 'dateStarted':
          return compare(a.dateStarted, b.dateStarted, isAsc);
        case 'dateFinished':
          return compare(a.dateFinished, b.dateFinished, isAsc);
        default:
          return 0;
      }
    });
  }

  getGradePercentage(stringDecGrade: Number | undefined) {
    var percentGrade: Number = Number(stringDecGrade) * 100;
    var stringPercentGrade: String = percentGrade.toFixed(2);
    return stringPercentGrade;
  }

  getLetterGrade(stringDecGrade: Number | undefined) {
    var percentGrade: Number = Number(stringDecGrade) * 100;
    var letterGrade: String;
    if (percentGrade >= 97 && percentGrade <= 100) {
      return (letterGrade = 'A+');
    } else if (percentGrade >= 93 && percentGrade <= 96.99) {
      return (letterGrade = 'A');
    } else if (percentGrade >= 90 && percentGrade <= 92.99) {
      return (letterGrade = 'A-');
    } else if (percentGrade >= 87 && percentGrade <= 89.99) {
      return (letterGrade = 'B+');
    } else if (percentGrade >= 83 && percentGrade <= 86.99) {
      return (letterGrade = 'B');
    } else if (percentGrade >= 80 && percentGrade <= 82.99) {
      return (letterGrade = 'B-');
    } else if (percentGrade >= 77 && percentGrade <= 79.99) {
      return (letterGrade = 'C+');
    } else if (percentGrade >= 73 && percentGrade <= 76.99) {
      return (letterGrade = 'C');
    } else if (percentGrade >= 70 && percentGrade <= 72.99) {
      return (letterGrade = 'C-');
    } else if (percentGrade >= 67 && percentGrade <= 69.99) {
      return (letterGrade = 'D+');
    } else if (percentGrade >= 63 && percentGrade <= 66.99) {
      return (letterGrade = 'D');
    } else if (percentGrade >= 60 && percentGrade <= 62.99) {
      return (letterGrade = 'D-');
    } else {
      return (letterGrade = 'F');
    }
  }
}

function compare(
  a: string | Number | undefined,
  b: string | Number | undefined,
  isAsc: boolean
) {
  if (typeof a != 'undefined' && typeof b != 'undefined') {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  } else {
    return 0;
  }
}

