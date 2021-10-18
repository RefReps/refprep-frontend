import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { VideoManagerComponent } from './components/video-manager/video-manager.component';

const routes: Routes = [
  {path: 'video-box', component: VideoBoxComponent},
  {path: 'video-man', component: VideoManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
