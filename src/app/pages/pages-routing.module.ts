import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: 'add-list',
        loadChildren: () => import('./add-list/add-list.module').then(m => m.AddListModule)
      },
      {
        path: 'all-lists',
        loadChildren: () => import('./all-lists/all-lists.module').then(m => m.AllListsModule)
      },
      {
        path: 'book',
        loadChildren: () => import('./book/book.module').then(m => m.BookModule)
      },
      {
        path: 'search-listing',
        loadChildren: () => import('./search-listing/search-listing.module').then(m => m.SearchListingModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [UserAuthGuard, UserAuthStateGuard]
})
export class PagesRoutingModule {
}
