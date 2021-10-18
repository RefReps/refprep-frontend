import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { VideoManagerComponent } from './components/video-manager/video-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
