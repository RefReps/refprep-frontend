import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [ // Declare all components in the shared/components
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
  ],
  exports: [ // Export all components in the shared/components
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
