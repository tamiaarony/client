import { Input } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Event } from '@angular/router';
import { loadvideoservice } from './load-video-service';
@Component({
  selector: 'app-load-video',
  templateUrl: './load-video.component.html',
  styleUrls: []
})

export class LoadVideoComponent implements OnInit {
  @Input()
  stream:any;
  displayURL?:any;
  Text?:string
  constructor(private _loadservice:loadvideoservice,private sanitizer: DomSanitizer,private _act:ActivatedRoute) { 
    // this.displayURL = sanitizer.bypassSecurityTrustResourceUrl(this.url);
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
    // this._act.paramMap.subscribe(params=>{
    //   if(params.has("stream"))
    //   {
    //     this.stream=params.get("stream")!;
    //     console.log(typeof(this.stream))
    //     this._loadservice.getTranscrire(this.stream).subscribe(data=>{
    //       this.Text=data
    //     })
    //   }
    // })
    if(this.stream){
      console.log(typeof(this.stream))
          this._loadservice.getTranscrire(this.stream).subscribe(data=>{
            this.Text=data
          })
    }
  }

}
