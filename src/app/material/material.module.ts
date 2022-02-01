import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    exports: [
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatListModule,
        MatSelectModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ]
  })
  export class MaterialModule { }