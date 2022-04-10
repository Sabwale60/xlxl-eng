import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllListsComponent } from './all-lists.component';

const routes: Routes = [
  {
    path:'',
    component: AllListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllListsRoutingModule { }
