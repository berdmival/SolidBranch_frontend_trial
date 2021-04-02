import {Component, Input, OnInit} from '@angular/core';
import {ITransaction, TransactionType} from "../../../api/get-data.service";

@Component({
  selector: 'app-amount-type-card',
  templateUrl: './amount-type-card.component.html',
  styleUrls: ['./amount-type-card.component.scss']
})
export class AmountTypeCardComponent implements OnInit {

  @Input()
  transactions!: ITransaction[] | null;

  @Input()
  transactionsType!: TransactionType;

  @Input()
  typeId!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
