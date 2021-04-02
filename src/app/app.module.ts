import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AmountsListComponent} from "./amounts-list/amounts-list.component";
import { AmountsSummaryComponent } from './amounts-summary/amounts-summary.component';
import { MainSummaryCardComponent } from './amounts-summary/main-summary-card/main-summary-card.component';
import { AmountTypeCardComponent } from './amounts-summary/amount-type-card/amount-type-card.component';
import { TransactionCountPipe } from './pipes/transaction-count.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AmountsListComponent,
    AmountsSummaryComponent,
    MainSummaryCardComponent,
    AmountTypeCardComponent,
    TransactionCountPipe,
    FullNamePipe
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
