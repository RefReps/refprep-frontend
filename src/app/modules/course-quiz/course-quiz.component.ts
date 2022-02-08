import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInteractionService } from 'src/app/_services/user-interaction.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-course-quiz',
  templateUrl: './course-quiz.component.html',
  styleUrls: ['./course-quiz.component.scss']
})
export class CourseQuizComponent implements OnInit {
  quizId: string = ''

  constructor(
    private Api: ApiService,
    private route: ActivatedRoute,
    private userInteractionService: UserInteractionService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('quizId');
        if (id) {
          this.quizId = id
        }
      })
  }

  get isAuthor(): boolean {
    return this.userInteractionService.isAuthor || this.userInteractionService.isAdmin
  }
}
