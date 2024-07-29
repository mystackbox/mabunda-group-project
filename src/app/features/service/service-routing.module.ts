import { NgModule } from '@angular/core';
import { ServiceComponent } from './pages/service/service.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: '', component: ServiceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
