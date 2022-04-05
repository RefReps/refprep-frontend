import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentGrades } from 'src/app/models/course';
import { QuizzesService } from 'src/app/_services/quizzes.service';

@Component({
  selector: 'app-course-student-grades',
  templateUrl: './course-student-grades.component.html',
  styleUrls: ['./course-student-grades.component.scss']
})
export class CourseStudentGradesComponent implements OnInit {
  courseId: string = '';
  studentGrades: StudentGrades[] = [];

  constructor(
    private route: ActivatedRoute,
    private QuizService: QuizzesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    });
    this.getGrades();
  }

  getGrades(): void {
    this.QuizService.getAllStudentGrades(this.courseId).subscribe((grades) => {
      this.studentGrades = grades;
    });
  }

  // viewBySubmissionDate() {
  //   const sortedGrades = this.studentGrades.slice();
  //   this.studentGrades = sortedGrades.sort((a.dateFinished, b.dateFinished) => {
  //     return (a.dateFinished < b.dateFinished ? -1 : 1)
  //   }
  // }

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
