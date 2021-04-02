import {Component, Input, OnInit} from '@angular/core';
import {GetDataService, ITransaction, TransactionType} from "../../api/get-data.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-amounts-list',
  templateUrl: './amounts-list.component.html',
  styleUrls: ['./amounts-list.component.scss']
})
export class AmountsListComponent implements OnInit {

  @Input()
  transactionType: TransactionType = 'income';

  $transactionsList!: Observable<ITransaction[]>;

  constructor(private readonly dataService: GetDataService) {
  }

  ngOnInit(): void {
    this.setTransactionType(this.transactionType)
  }

  public setTransactionType(type: TransactionType): void {
    this.$transactionsList = this.dataService.getData().pipe(map(tl => tl.filter(t => t.type === type)));
  }

}
