import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdComponent } from './ad/ad.component';
import { ShowViewComponent } from './show-view/show-view.component';
const routes: Routes = [
   { path: '', redirectTo: '/showlisting', pathMatch: 'full' },
  {  path: 'showlisting', component: AdComponent },
  {  path: 'view-page', component: ShowViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
