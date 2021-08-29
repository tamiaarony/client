import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { loadvideoservice } from './modules/load-video/load-video-service';
import { LoadVideoComponent } from './modules/load-video/load-video.component';
import { LoadVideoModule } from './modules/load-video/load-video.module';


@NgModule({
  declarations: [
    AppComponent,
    LoadVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadVideoModule
  ],
  providers: [loadvideoservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
