import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/authentication/Auth.guard';
import { MainPageComponent } from 'src/app/main-page/main-page-component/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: MainPageComponent},
  {path: 'register', loadChildren: () => import('../../register/module/register.module')
  .then(m => m.RegisterModule)},
  {path: 'shopping-page', loadChildren: () => import('../../shopping-page/module/shopping-page.module')
  .then(m => m.ShoppingPageModule), canActivate: [AuthGuard]},
  {path: 'order', loadChildren: () => import('../../order/module/order.module')
  .then(m => m.OrderModule), canActivate: [AuthGuard]},
   {path: '**', loadChildren: () => import('../../page-not-found-404/module/page-not-found-404.module')
   .then(m => m.PageNotFound404Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
