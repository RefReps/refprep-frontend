import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CourseHomeComponent } from './modules/course-home/course-home.component';
import { CourseVideoComponent } from './modules/course-video/course-video.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { EditCurriculumHomeComponent } from './modules/edit-curriculum-home/edit-curriculum-home.component';
import { HomeComponent } from './modules/home/home.component';
import { TestComponentComponent } from './modules/test-component/test-component.component';

const routes: Routes = [ // Always put more specific routes on the top
  {
    path: '', 
    component: DefaultComponent, 
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'}, 
      {path: 'courses/:courseId/video/:videoId', component: CourseVideoComponent},
      {path: 'courses/:courseId', component: CourseHomeComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'home', component: HomeComponent},
      {path: 'test', component: TestComponentComponent},
      {path: 'courses/:courseId/videoUpload', component: VideoUploadComponent},
      {path: 'courses/:courseId/editCurriculum', component:EditCurriculumHomeComponent}

    ]
  },
  {
    path: '**',
    component: DefaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }