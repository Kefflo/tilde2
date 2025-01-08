import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/models/person.model';
import { Transaction } from '../../shared/models/transaction.model';
import { TransactionService } from '../../shared/models/services/transaction.service';

@Component({
  selector: 'app-main-content',
  standalone: false,
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent implements OnInit {
  persons: Person[] = [];
  transactions: Transaction[] = [];

  moneySender!: Person;
  moneyReceiver!: Person | null;
  filteredPersons: Person[] = [];
  amount: number = 0;

  constructor(private readonly transactionService: TransactionService) {}

  ngOnInit(): void {
    const persons = localStorage.getItem('persons');
    this.persons = persons ? JSON.parse(persons) : [];

    this.transactionService.transactions$.subscribe((transactions) => {
      this.transactions = transactions;
    });
    this.transactionService.getTransactions();
  }
  pickSender() {
    this.filteredPersons = this.persons.filter(
      (person) => person.id !== this.moneySender.id
    );
    this.moneyReceiver = null;
  }

  sendMoney() {
    if (this.moneySender && this.moneyReceiver && this.amount > 0) {
      this.moneySender.balance -= this.amount;
      this.moneyReceiver.balance += this.amount;

      const transaction: Transaction = {
        id: this.transactions.length + 1,
        fromId: this.moneySender.id,
        toId: this.moneyReceiver.id,
        amount: this.amount,
      };
      this.transactionService.addTransactionInStorage(transaction);
    }
  }
}
