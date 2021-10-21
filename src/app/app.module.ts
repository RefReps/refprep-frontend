import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { VideoManagerComponent } from './components/video-manager/video-manager.component';
import { DragAreaComponent } from './components/drag-area/drag-area.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoBoxComponent,
    VideoManagerComponent,
    DragAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
