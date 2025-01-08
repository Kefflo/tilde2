import { Transaction } from "./transaction.model";

export interface Person {
    id: number;
    name: string;
    balance: number;
    transactions: Transaction[];
}