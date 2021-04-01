import { TestBed } from '@angular/core/testing';

import { GetDataService } from './get-data.service';

describe('GetDataService', () => {
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getData should return Observable with array of ITransaction', done => {
    service.getData().subscribe(transactions => {
      expect(transactions).toBeDefined()
      done()
    })
  })
});
