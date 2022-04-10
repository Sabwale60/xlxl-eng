import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddListRoutingModule } from './add-list-routing.module';
import { AddListComponent } from './add-list.component';

import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [
    AddListComponent
  ],
  imports: [
  CommonModule,
    AddListRoutingModule,
    MaterialModule
  ]
})
export class AddListModule { }
