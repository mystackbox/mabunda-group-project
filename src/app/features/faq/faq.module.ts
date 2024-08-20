import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './pages/faq/faq.component';
import { FaqRoutingModule } from './faq-routing.module';

@NgModule({
  declarations: [ FaqComponent ],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})

export class FaqModule { }
