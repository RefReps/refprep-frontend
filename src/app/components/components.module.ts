import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'

import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { DragAreaComponent } from './drag-area/drag-area.component';
import { SidebarIconComponent } from './sidebar-icon/sidebar-icon.component';
import { VideoBoxComponent } from './video-box/video-box.component';
import { VideoManagerComponent } from './video-manager/video-manager.component';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { CourseInfoHomeComponent } from './course-info-home/course-info-home.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ModuleDisplayComponent } from './module-display/module-display.component';
import { DragDropAreaComponent } from './drag-drop-area/drag-drop-area.component';



@NgModule({
  declarations: [ // Declare all components in the app/component folder (Don't forget to export)
    DragAreaComponent,
    VideoBoxComponent,
    VideoManagerComponent,
    CourseDashboardComponent,
    SidebarIconComponent,
    CourseInfoHomeComponent,
    ContentHeaderComponent,
    ModuleDisplayComponent,
    DragDropAreaComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
  ],  
  exports: [ // Export all components in the app/component folder
    DragAreaComponent,
    VideoBoxComponent,
    VideoManagerComponent,
    CourseDashboardComponent,
    SidebarIconComponent,
    CourseInfoHomeComponent,
    ContentHeaderComponent,
    ModuleDisplayComponent,
    DragDropAreaComponent,
  ],
})
export class ComponentsModule { }
