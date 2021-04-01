import {Injectable} from '@angular/core';
import fakeResponse from './fake-data'
import {Observable, of} from "rxjs";

export interface Itransaction {
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


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private readonly fakeData!: Itransaction[];

  constructor() {
    this.fakeData = fakeResponse.data as Itransaction[]
  }

  public getData(): Observable<Itransaction[]> {
    return of(this.fakeData)
  }
}
