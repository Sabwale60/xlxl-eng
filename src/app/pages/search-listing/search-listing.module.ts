import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchListingRoutingModule } from './search-listing-routing.module';
import { SearchListingComponent } from './search-listing.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    SearchListingComponent
  ],
  imports: [
    CommonModule,
    SearchListingRoutingModule,
    MaterialModule
  ]
})
export class SearchListingModule { }
