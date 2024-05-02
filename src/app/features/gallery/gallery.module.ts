import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
