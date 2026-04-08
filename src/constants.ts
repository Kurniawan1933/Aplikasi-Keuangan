import { Transaction, BudgetCategory, SavingsTarget } from './types';

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'GIA Restaurant Jakarta',
    amount: 1450000,
    category: 'Makan',
    date: '12 Des 2023',
    time: '19:45',
    type: 'expense',
    icon: 'Utensils',
  },
  {
    id: '2',
    title: 'Dividen Saham BBCA',
    amount: 5200000,
    category: 'Investasi',
    date: '11 Des 2023',
    time: '08:30',
    type: 'income',
    icon: 'TrendingUp',
  },
  {
    id: '3',
    title: 'Pertamina MT Haryono',
    amount: 650000,
    category: 'Bensin',
    date: '10 Des 2023',
    time: '14:20',
    type: 'expense',
    icon: 'Fuel',
  },
  {
    id: '4',
    title: 'Indomaret Point',
    amount: 120000,
    category: 'Lainnya',
    date: '09 Des 2023',
    time: '20:15',
    type: 'expense',
    icon: 'ShoppingBag',
  },
];

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  {
    id: '1',
    name: 'Bensin',
    description: 'Transportasi Harian',
    allocated: 1200000,
    spent: 900000,
    icon: 'Fuel',
    color: '#0d47a1',
  },
  {
    id: '2',
    name: 'Makan',
    description: 'Konsumsi & Groceries',
    allocated: 3500000,
    spent: 2625000,
    icon: 'Utensils',
    color: '#003178',
  },
  {
    id: '3',
    name: 'Rokok',
    description: 'Hiburan & Lifestyle',
    allocated: 800000,
    spent: 600000,
    icon: 'Cigarette',
    color: '#ba1a1a',
  },
  {
    id: '4',
    name: 'Tabungan',
    description: 'Investasi & Dana Darurat',
    allocated: 5000000,
    spent: 750000,
    icon: 'PiggyBank',
    color: '#1b6d24',
  },
  {
    id: '5',
    name: 'Kebutuhan Lainnya',
    description: 'Biaya Tak Terduga',
    allocated: 1500000,
    spent: 225000,
    icon: 'MoreHorizontal',
    color: '#e1e3e4',
  },
];

export const SAVINGS_TARGETS: SavingsTarget[] = [
  {
    id: '1',
    name: 'Beli Laptop Baru',
    targetDate: 'Desember 2024',
    targetAmount: 15000000,
    currentAmount: 12300000,
    icon: 'Laptop',
  },
];
