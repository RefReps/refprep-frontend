import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { CoursesComponent } from 'src/app/modules/courses/courses.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ // Declarations are any Layouts, and Modules folder
    DefaultComponent,
    CoursesComponent,
    HomeComponent,
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
