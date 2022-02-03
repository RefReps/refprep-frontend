import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ // Declare all components in the shared/components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ComponentsModule,

  ],
  exports: [ // Export all components in the shared/components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
