import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetDataService, ITransaction, TransactionType, transactionTypesArray} from "../../api/get-data.service";
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-amounts-list',
  templateUrl: './amounts-list.component.html',
  styleUrls: ['./amounts-list.component.scss']
})
export class AmountsListComponent implements OnInit, OnDestroy {

  $transactionsList!: Observable<ITransaction[]>;

  transactionTypesList: TransactionType[] = transactionTypesArray;

  private queryParamsSubscription!: Subscription;

  constructor(
    private readonly dataService: GetDataService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParamMap.subscribe(
      params => {
        this.filterTransactionsByType(Number.parseInt(<string>params.get('tab')))
      }
    )
  }

  private filterTransactionsByType(typeId: number): void {
    this.$transactionsList = this.dataService.getData().pipe(
      map(tl => tl.filter(t => t.type === transactionTypesArray[typeId]))
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

}
