import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from '../transaction.model';
import { parse } from 'path';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionsSource = new Subject<Transaction[]>(); // 
  transactions$ = this.transactionsSource.asObservable(); // dod iespeju klausities to subject

  constructor() {}

  getTransactions() {
    const transactions = this.parseTransactionsFromStorage();
    this.updateTransactions(transactions);
  }
  updateTransactionInStorage(transaction: Transaction) {
    const transactionsArray = this.parseTransactionsFromStorage();
    const transactionIndex = transactionsArray.findIndex(
      (t) => t.id === transaction.id
    );
    if (transactionIndex !== -1) {
      transactionsArray[transactionIndex] = transaction;
      localStorage.setItem('transactions', JSON.stringify(transactionsArray));
      this.updateTransactions(transactionsArray);
    }
  }
  addTransactionInStorage(transaction: Transaction) {
    const transactionsArray = this.parseTransactionsFromStorage();
    transactionsArray.push(transaction);
    console.log(transactionsArray, transaction);
    localStorage.setItem('transactions', JSON.stringify(transactionsArray));
    this.updateTransactions(transactionsArray);
  }

  private updateTransactions(transactions: Transaction[]) {
    this.transactionsSource.next(transactions);
  }
  private parseTransactionsFromStorage() {
    const transactions = localStorage.getItem('transactions');
    return transactions ? (JSON.parse(transactions) as Transaction[]) : [];
  }
}
