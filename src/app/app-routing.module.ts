import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoHomeComponent } from './components/course-info-home/course-info-home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CourseHomeComponent } from './modules/course-home/course-home.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { HomeComponent } from './modules/home/home.component';
import { TestComponentComponent } from './modules/test-component/test-component.component';

const routes: Routes = [ // Always put more specific routes on the top
  {
    path: '', 
    component: DefaultComponent, 
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'}, 
      {path: 'courses/:courseId/module/:moduleId', component: CourseHomeComponent},
      {path: 'courses/:courseId', component: CourseHomeComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'home', component: HomeComponent},
      {path: 'test', component: TestComponentComponent}
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
