import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', loadChildren: () => import('../../main-page/module/main-page.module')
  .then(m => m.MainPageModule)},
   {path: '**', loadChildren: () => import('../../page-not-found-404/module/page-not-found-404.module')
   .then(m => m.PageNotFound404Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
