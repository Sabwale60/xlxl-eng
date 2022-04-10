import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllListsRoutingModule } from './all-lists-routing.module';
import { AllListsComponent } from './all-lists.component';


@NgModule({
  declarations: [
    AllListsComponent
  ],
  imports: [
    CommonModule,
    AllListsRoutingModule
  ]
})
export class AllListsModule { }
