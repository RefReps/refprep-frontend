import { CourseSettingsComponent } from './components/course-settings/course-settings.component';
import { JoinCourseByCodeComponent } from './components/join-course-by-code/join-course-by-code.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CourseCreationComponent } from './modules/course-creation/course-creation.component';
import { LoginComponent } from './layouts/login/login.component';
import { CourseHomeComponent } from './modules/course-home/course-home.component';
import { CourseVideoComponent } from './modules/course-video/course-video.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { EditCurriculumHomeComponent } from './modules/edit-curriculum-home/edit-curriculum-home.component';
import { HomeComponent } from './modules/home/home.component';
import { TestComponentComponent } from './modules/test-component/test-component.component';
import { AuthGuard } from './_helpers/auth.guard';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CourseStudentsComponent } from './modules/course-students/course-students.component';
import { CourseAuthorsComponent } from './modules/course-authors/course-authors.component';
import { CourseQuizComponent } from './modules/course-quiz/course-quiz.component';
import { QuizStudentViewComponent } from './components/quiz-student-view/quiz-student-view.component';
import { ViewGradedQuizComponent } from './components/view-graded-quiz/view-graded-quiz.component';
import { CourseQuizEditComponent } from './components/course-quiz-edit/course-quiz-edit.component';

const routes: Routes = [ // Always put more specific routes on the top

  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'courses', pathMatch: 'full'}, 
      {path: 'courses/:courseId/content/:contentId/video/:videoId', component: CourseVideoComponent},
      {path: 'courses/:courseId/quiz/:quizId', component: CourseQuizComponent},
      {path: 'courses/:courseId/quiz/:quizId/take', component: QuizStudentViewComponent},
      {path: 'courses/:courseId/quiz/:quizId/viewQuiz/:submissionId', component: ViewGradedQuizComponent},
      {path: 'courses/:courseId/quiz/:quizId/edit', component: CourseQuizEditComponent },
      {path: 'courses/:courseId', component: CourseHomeComponent},
      {path: 'courses/:courseId/authors', component: CourseAuthorsComponent},
      {path: 'courses/:courseId/students', component: CourseStudentsComponent},
      {path: 'courses/:courseId/settings', component: CourseSettingsComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'home', component: HomeComponent},
      {path: 'test', component: TestComponentComponent},
      {path: 'courses/:courseId/videoUpload', component: VideoUploadComponent},
      {path: 'courses/:courseId/editCurriculum', component: EditCurriculumHomeComponent},
      {path: 'course-creation', component: CourseCreationComponent},
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'join/:courseCode',
    component: JoinCourseByCodeComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}