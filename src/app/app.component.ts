import { Component, OnInit } from '@angular/core';
import { Person } from './shared/models/person.model';
import { Transaction } from './shared/models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'tilde2';
  persons: Person[] = [];

  ngOnInit() {
    this.persons = [
      {
        id: 1,
        name: 'John Doe',
        balance: 1000,
        transactions: [],
      },
      {
        id: 2,
        name: 'Sētnieks',
        balance: 3000,
        transactions: [],
      },
      {
        id: 3,
        name: 'Jānis Bērziņš',
        balance: 2000,
        transactions: [],
      },
      {
        id: 4,
        name: 'Pēteris Ozols',
        balance: 4000,
        transactions: [],
      },
      {
        id: 5,
        name: 'Andris Koks',
        balance: 5000,
        transactions: [],
      },
    ];
    localStorage.setItem('persons', JSON.stringify(this.persons)); // Saglabā visus lietotājus local storage as strings

    if (!localStorage.getItem('transactions')) {
      localStorage.setItem('transactions', JSON.stringify([])); // Saglabā visus lietotājus local storage as strings
    }
  }
}
