import { ApiService } from 'src/service/api.service';
import { CourseInteractionService } from 'src/app/_services/course-interaction.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentGrades } from 'src/app/models/course';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { TokenService } from 'src/app/_services/token.service';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';

@Component({
  selector: 'app-course-student-grades',
  templateUrl: './course-student-grades.component.html',
  styleUrls: ['./course-student-grades.component.scss']
})
export class CourseStudentGradesComponent implements OnInit {
  courseId: string = '';
  studentGrades: StudentGrades[] = [];
  studentId: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(
    private userInteractionService: UserInteractionService,
    private route: ActivatedRoute,
    private QuizService: QuizzesService,
    private token: TokenService,
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('courseId');
      if (id) {
        this.courseId = id;
      }
    });
    //get student id from url params
    this.route.paramMap.subscribe((params) => {
      let id = params.get('studentId');
      if (id) {
        this.studentId = id;
      }
      this.getGrades();
    });
  }

  getGrades(): void {
    this.api.getCourse(this.courseId).subscribe((course) => {
      //gets student's grades for an author
      if ((course.isAuthor || this.userInteractionService.isAdmin) && this.studentId) {
        this.QuizService.getSingleStudentsGradesForAuthor(this.courseId, this.studentId).subscribe((grades) => {
          this.studentGrades = grades;
          this.email = grades[0].email || '';
          this.firstName = grades[0].firstName || '';
          this.lastName = grades[0].lastName || '';
        });
      }
      //gets all quiz grades if a student
      else if (!this.isAuthor) {
        this.QuizService.getAllStudentGrades(this.courseId).subscribe((grades) => {
          this.studentGrades = grades;
          this.email = this.token.getEmail();
          this.firstName = this.token.getUserFirstName();
          this.lastName = this.token.getUserLastName();
        });
      }
    });
}

  //get student average grade 
  getAverageGrade(): string {
    let total = 0;
    let average = 0;
    let length = 0;
    for (let i = 0; i < this.studentGrades.length; i++) {
      if (this.studentGrades[i].isTaken) {
        total += this.studentGrades[i].grade || 0;
        length++;
      }
    }
    if (length == 0) {
      average = 0;
    }
    else {
      average = total / length;
    }
    return average.toFixed(4);
  }

  get isAuthor(): boolean {
    return this.userInteractionService.isAuthor
  }

  getGradePercentage(stringDecGrade: string | Number | undefined) {
    var percentGrade: Number = Number(stringDecGrade) * 100;
    var stringPercentGrade: String = percentGrade.toFixed(2);
    return stringPercentGrade;
  }

  getLetterGrade(stringDecGrade: string | Number | undefined) {
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
