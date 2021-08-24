import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { LoadVideoComponent } from "./load-video.component";

const routes: Routes = [
    {path:"",component:LoadVideoComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoadvideoRoutingModule { }