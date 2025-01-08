import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transactions',
    pathMatch: 'full',
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'main-content',
    component: MainContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
