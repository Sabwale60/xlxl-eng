import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';


@NgModule({

  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]

})
export class HeaderModule { }
