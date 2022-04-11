import { Course } from './../../models/course';
import { ApiService } from 'src/service/api.service';
import { CourseInteractionService } from 'src/app/_services/course-interaction.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentGrades } from 'src/app/models/course';
import { QuizzesService } from 'src/app/_services/quizzes.service';
import { TokenService } from 'src/app/_services/token.service';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { Content } from 'src/app/models/course';

@Component({
  selector: 'app-course-student-grades',
  templateUrl: './course-student-grades.component.html',
  styleUrls: ['./course-student-grades.component.scss']
})
export class CourseStudentGradesComponent implements OnInit {
  courseId: string = '';
  course: Course = {};
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
    // get course id and student id from url
    this.route.paramMap.subscribe((params) => {
      let courseId = params.get('courseId');
      let studentId = params.get('studentId');
      if (courseId) {
        this.courseId = courseId;
      }
      if (studentId) {
        this.studentId = studentId;
      }
      this.getGrades();
      this.getCourseSkeleton();
    });
  }

  getCourseSkeleton(): void {
    this.api.getCourseSkeleton(this.courseId).subscribe((info) => {
      this.course = info.course;
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
          this.email = grades[0].email || '';
          this.firstName = grades[0].firstName || '';
          this.lastName = grades[0].lastName || '';
        });
      }
    });
  }

  // get quiz from student's grades
  getQuiz(quizId: string): StudentGrades {
    return this.studentGrades.find((quiz) => quiz.quizId === quizId) || {};
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
      average = 1;
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

  sortContentsByContentOrder(contents: Content[]): Content[] {
    return contents.sort((a, b) => a.contentOrder! - b.contentOrder!);
  }  

}
