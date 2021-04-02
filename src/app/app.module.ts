import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AmountsListComponent} from "./amounts-list/amounts-list.component";
import { AmountsSummaryComponent } from './amounts-summary/amounts-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AmountsListComponent,
    AmountsSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
