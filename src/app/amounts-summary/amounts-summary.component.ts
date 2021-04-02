import {Component, OnInit} from '@angular/core';
import {GetDataService, ITransaction, TransactionType, transactionTypesArray} from "../../api/get-data.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-amounts-summary',
  templateUrl: './amounts-summary.component.html',
  styleUrls: ['./amounts-summary.component.scss']
})
export class AmountsSummaryComponent implements OnInit {

  transactionTypesList: TransactionType[] = transactionTypesArray;

  $transactionList!: Observable<ITransaction[]>;

  constructor(private readonly dataService: GetDataService) {
  }

  ngOnInit(): void {
    this.$transactionList = this.dataService.getData();
  }

  filterTransactionsByType(type: TransactionType): Observable<ITransaction[]> {
    return this.$transactionList.pipe(map( tl => tl.filter(t => t.type === type)))
  }

}
