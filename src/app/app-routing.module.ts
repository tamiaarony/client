import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"load-video/:stream",  loadChildren: () => import("./modules/load-video/load-video.module").then(m => m.LoadVideoModule)}
];


/*hjj*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
