import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import { HeaderModule } from '../core/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    RouterModule
  ],
})
export class PagesModule {
}
