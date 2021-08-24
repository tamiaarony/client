import { Component } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app-component.css']
})
export class AppComponent {
  title = 'speech-to-text';
  constructor(){
   
    this.nav = navigator;
    this.displayMediaOptions = {
      video: {
        cursor: "always"
      },
      audio: false
    };
  }
  @ViewChild('video', {static: true}) video!: ElementRef<HTMLVideoElement>;
  videoElem:any;
  nav: any;
  displayMediaOptions:any;
  logElem:string = "";

dumpOptionsInfo() {
  const videoTrack = this.videoElem.srcObject.getVideoTracks()[0];

  console.info("Track settings:");
  console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
  console.info("Track constraints:");
  console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}
 async startCapture()
{
  this.videoElem=this.video.nativeElement;
  console.log(this.videoElem)
  try {
    this.videoElem.srcObject =await this.nav.mediaDevices.getDisplayMedia(this.displayMediaOptions);
    this.dumpOptionsInfo();
  } catch(err) {
    console.error("Error: " + err);
  }
}

stopCapture()
{
  this.videoElem.pause();
  (this.videoElem.srcObject as MediaStream).getVideoTracks()[0].stop();
  this.videoElem.srcObject = null;
  // let tracks = this.videoElem.srcObject.getTracks();
  // tracks.forEach(function(track:any) {
  //   track.stop();
  // });
  // this.videoElem.srcObject = null;
}
}
