import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: '', component: GalleryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
