import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterPageComponent } from './layout/master-page/master-page.component';
import { AboutModule } from './features/about/about.module';
import { ContactModule } from './features/contact/contact.module';
import { HomeModule } from './features/home/home.module';
import { ServiceModule } from '@features/service/service.module';
import { GalleryModule } from '@features/gallery/gallery.module';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@features/home/home.module').then((m):typeof HomeModule => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => import('@features/home/home.module').then((m):typeof HomeModule => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('@features/about/about.module').then((m):typeof AboutModule => m.AboutModule)
      },
      {
        path: 'services',
        loadChildren: () => import('@features/service/service.module').then((m):typeof ServiceModule => m.ServiceModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('@features/gallery/gallery.module').then((m):typeof GalleryModule => m.GalleryModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('@features/contact/contact.module').then((m):typeof ContactModule => m.ContactModule)
      }
      // ,
      // {
      //   path: '**',
      //   loadChildren: () => import('@features/notfound/notfound.module').then((m):typeof NotFoundModule => m.NotFoundModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
