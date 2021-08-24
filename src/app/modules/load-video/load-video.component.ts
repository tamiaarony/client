import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from '@angular/router';
import { loadvideoservice } from './load-video-service';
@Component({
  selector: 'app-load-video',
  templateUrl: './load-video.component.html',
  styleUrls: []
})

export class LoadVideoComponent implements OnInit {

  url:any='https://www.youtube.com/watch?v=r0sS66mVoas';
  displayURL?:any;
  Text?:string
  constructor(private _loadservice:loadvideoservice,private sanitizer: DomSanitizer) { 
    this.displayURL = sanitizer.bypassSecurityTrustResourceUrl(this.url);
    // this._loadservice.getTranscrire(this.url).subscribe(data=>{
    //   this.Text=data
    // })
  }
  getVideoTag(file:any) {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<video width="1280" height="720" autoplay muted controls>
          <source src="${file}" type="video/mp4">No HTML5 supported.</source>
       </video>`
    );
  }
  // onSelectFile(event:any) {
  //   const file = event.target.files && event.target.files[0];
  //   console.log(event.target.files[0])
  //   if (file) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = (event) => {
  //       this.url = (<FileReader>event.target).result;
  //       console.log()
  //       this.Transcrire()
  //     }
  //   }
  // }
  ngOnInit(): void {
  }

}
