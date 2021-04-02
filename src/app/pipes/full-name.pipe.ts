import {Pipe, PipeTransform} from '@angular/core';
import {ITransactionName} from "../../api/get-data.service";

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(transactionName: ITransactionName): string {
    return transactionName.first + ' ' + transactionName.last;
  }

}
