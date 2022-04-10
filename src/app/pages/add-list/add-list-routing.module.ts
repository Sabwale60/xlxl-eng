import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './add-list.component';

const routes: Routes = [
  {
    path:'',
    component: AddListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddListRoutingModule { }
