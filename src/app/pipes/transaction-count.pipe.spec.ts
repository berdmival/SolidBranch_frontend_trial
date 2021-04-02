import { TransactionCountPipe } from './transaction-count.pipe';

describe('TransactionCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionCountPipe();
    expect(pipe).toBeTruthy();
  });
});
