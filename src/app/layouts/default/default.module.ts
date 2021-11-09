import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { CoursesComponent } from 'src/app/modules/courses/courses.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CourseHomeComponent } from 'src/app/modules/course-home/course-home.component';
import { TestComponentComponent } from 'src/app/modules/test-component/test-component.component';
import { EditCurriculumHomeComponent } from 'src/app/modules/edit-curriculum-home/edit-curriculum-home.component';



@NgModule({
  declarations: [ // Declarations are the current layout, and Modules folder
    DefaultComponent,
    CoursesComponent,
    HomeComponent,
    CourseHomeComponent,
    TestComponentComponent,
    EditCurriculumHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ComponentsModule
  ]
})
export class DefaultModule { }
