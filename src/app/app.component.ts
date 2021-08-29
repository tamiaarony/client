import { Component, Type } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { ElementRef, ViewChild } from '@angular/core';
import { loadvideoservice } from './modules/load-video/load-video-service';
/*ניסיון העלאה לגיט*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app-component.css']
})
export class AppComponent {
  title = 'speech-to-text';
  title1 = 'speech-to-text';
  constructor(){
   
    this.nav = navigator;
  }
  @ViewChild('video', {static: true}) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('audio', {static: true}) audio!: ElementRef<HTMLAudioElement>;

  videoElem:any;
  audioElem:any;
  nav: any;
  audioCtx:any;
  streamNode:any;
  source:any;
  streamtrack:any;
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
  this.audioElem=this.audio.nativeElement;
  try { 
    const stream=await this.nav.mediaDevices.getDisplayMedia({audio: true, video: true}); 
    this.videoElem.srcObject=stream;
    this.audioCtx = new AudioContext();
    this.source = this.audioCtx.createMediaStreamSource(stream)
    this.streamNode = this.audioCtx.createMediaStreamDestination();
    this.source.connect(this.streamNode);
    this.audioElem.controls = true;
    document.body.appendChild(this.audioElem);
    this.audioElem.srcObject = this.streamNode.stream;
    this.streamtrack=this.streamNode.stream.getAudioTracks();
    // console.log(this.streamNode.stream.getAudioTracks())
    // console.log(this.streamNode.stream)
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
