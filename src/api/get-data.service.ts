import {Injectable} from '@angular/core';
import fakeResponse from './fake-data'
import {Observable, of} from "rxjs";

export interface ITransaction {
  "type": TransactionType;
  "_id": string;
  "amount": number;
  "name": ITransactionName;
  "company": string;
  "email": string;
  "phone": string;
  "address": string;
}

export interface ITransactionName {
  first: string;
  last: string;
}

export type TransactionType = 'income' | 'outcome' | 'loan' | 'investment';

export const transactionTypesArray: TransactionType[] = ['income', 'outcome', 'loan', 'investment']


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private readonly fakeData!: ITransaction[];

  constructor() {
    this.fakeData = fakeResponse.data as ITransaction[]
  }

  public getData(): Observable<ITransaction[]> {
    return of(this.fakeData)
  }
}
