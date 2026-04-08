export type View = 'dashboard' | 'budget' | 'transactions' | 'reports';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  time: string;
  type: 'expense' | 'income';
  icon: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  description: string;
  allocated: number;
  spent: number;
  icon: string;
  color: string;
}

export interface SavingsTarget {
  id: string;
  name: string;
  targetDate: string;
  targetAmount: number;
  currentAmount: number;
  icon: string;
}
