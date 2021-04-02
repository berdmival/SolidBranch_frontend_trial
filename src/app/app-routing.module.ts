import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmountsListComponent} from "./amounts-list/amounts-list.component";

const routes: Routes = [
  {path:'navigator', component: AmountsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
