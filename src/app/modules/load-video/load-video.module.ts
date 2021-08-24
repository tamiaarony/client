import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadVideoComponent } from './load-video.component';
import { LoadvideoRoutingModule } from './load-video-routing.module';



@NgModule({
  declarations: [LoadVideoComponent],
  imports: [
    CommonModule,
    LoadvideoRoutingModule
  ]
})
export class LoadVideoModule { }
