import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { SidebarIconComponent } from '../components/sidebar-icon/sidebar-icon.component';
import { ComponentsModule } from '../components/components.module';
import { MatCard } from '@angular/material/card';
import { CourseHomeComponent } from '../modules/course-home/course-home.component';


@NgModule({
  declarations: [ // Declare all components in the shared/components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    ComponentsModule,

  ],
  exports: [ // Export all components in the shared/components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
