import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoHomeComponent } from './components/course-info-home/course-info-home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [ // Always put more specific routes on the top
  {
    path: '', 
    component: DefaultComponent, 
    children: [
      {path: '', component: HomeComponent}, 
      {path: 'courses/:courseId/module/:moduleId', component: CourseInfoHomeComponent},
      {path: 'courses/:courseId', component: CourseInfoHomeComponent},
      {path: 'courses', component: CoursesComponent}
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
