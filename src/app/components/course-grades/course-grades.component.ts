import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradeOverview } from 'src/app/models/course';
import { QuizzesService } from 'src/app/_services/quizzes.service';

@Component({
  selector: 'app-course-grades',
  templateUrl: './course-grades.component.html',
  styleUrls: ['./course-grades.component.scss']
})
export class CourseGradesComponent implements OnInit {
  courseId: string = '';
  allGrades: GradeOverview[] = [];

  constructor(
    private route: ActivatedRoute,
    private QuizService: QuizzesService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    });
    this.getAllGrades();
    console.log(this.allGrades);
  }

  getAllGrades(): void {
    this.QuizService.getOverallGrades(this.courseId).subscribe((grades) => {
      this.allGrades = grades;
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