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
import { CourseAddAuthorComponent } from './components/course-add-author/course-add-author.component';
import { CourseAddStudentComponent } from './components/course-add-student/course-add-student.component';

const routes: Routes = [ // Always put more specific routes on the top

  {
    path: '', 
    component: DefaultComponent, 
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'}, 
      {path: 'courses/:courseId/video/:videoId', component: CourseVideoComponent},
      {path: 'courses/:courseId', component: CourseHomeComponent},
      {path: 'courses/:courseId/authors', component: CourseAddAuthorComponent},
      {path: 'courses/:courseId/students', component: CourseAddStudentComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'home', component: HomeComponent},
      {path: 'test', component: TestComponentComponent},
      {path: 'courses/:courseId/videoUpload', component: VideoUploadComponent},
      {path: 'courses/:courseId/editCurriculum', component:EditCurriculumHomeComponent},
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