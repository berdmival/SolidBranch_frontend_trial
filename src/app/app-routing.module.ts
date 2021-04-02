import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmountsListComponent} from "./amounts-list/amounts-list.component";
import {AmountsSummaryComponent} from "./amounts-summary/amounts-summary.component";

const routes: Routes = [
  {path:'navigator', component: AmountsListComponent},
  {path:'', component: AmountsSummaryComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
