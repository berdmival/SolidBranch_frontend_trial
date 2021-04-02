import { Pipe, PipeTransform } from '@angular/core';
import {ITransaction} from "../../api/get-data.service";

@Pipe({
  name: 'transactionCount'
})
export class TransactionCountPipe implements PipeTransform {

  transform(transactions: ITransaction[] | null): number {
    return transactions ? transactions.length : 0;
  }

}
