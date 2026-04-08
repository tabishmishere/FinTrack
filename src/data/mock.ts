export interface Transaction {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  type: "expense" | "income";
  status: "completed" | "pending" | "failed";
}

export interface CategoryBreakdown {
  name: string;
  value: number;
  color: string;
}

export const transactions: Transaction[] = [
  { id: "1", name: "Netflix Subscription", category: "Entertainment", date: "2026-04-07", amount: -15.99, type: "expense", status: "completed" },
  { id: "2", name: "Salary Deposit", category: "Salary", date: "2026-04-01", amount: 5200.00, type: "income", status: "completed" },
  { id: "3", name: "Grocery Store", category: "Food", date: "2026-04-06", amount: -87.43, type: "expense", status: "completed" },
  { id: "4", name: "Electric Bill", category: "Utilities", date: "2026-04-05", amount: -142.00, type: "expense", status: "pending" },
  { id: "5", name: "Freelance Payment", category: "Freelance", date: "2026-04-04", amount: 1200.00, type: "income", status: "completed" },
  { id: "6", name: "Uber Ride", category: "Transport", date: "2026-04-04", amount: -24.50, type: "expense", status: "completed" },
  { id: "7", name: "Coffee Shop", category: "Food", date: "2026-04-03", amount: -6.75, type: "expense", status: "completed" },
  { id: "8", name: "Gym Membership", category: "Health", date: "2026-04-02", amount: -49.99, type: "expense", status: "completed" },
  { id: "9", name: "Dividend Income", category: "Investment", date: "2026-04-01", amount: 340.00, type: "income", status: "completed" },
  { id: "10", name: "Restaurant", category: "Food", date: "2026-04-01", amount: -62.30, type: "expense", status: "completed" },
  { id: "11", name: "Amazon Purchase", category: "Shopping", date: "2026-03-30", amount: -129.99, type: "expense", status: "completed" },
  { id: "12", name: "Side Project Income", category: "Freelance", date: "2026-03-28", amount: 850.00, type: "income", status: "completed" },
];

export const monthlySpending = [
  { month: "Oct", spending: 2100, income: 5800 },
  { month: "Nov", spending: 2400, income: 6100 },
  { month: "Dec", spending: 3200, income: 5900 },
  { month: "Jan", spending: 2800, income: 6400 },
  { month: "Feb", spending: 2300, income: 6200 },
  { month: "Mar", spending: 2600, income: 6800 },
  { month: "Apr", spending: 1900, income: 7200 },
];

export const categoryBreakdown: CategoryBreakdown[] = [
  { name: "Food", value: 420, color: "hsl(238, 80%, 66%)" },
  { name: "Transport", value: 180, color: "hsl(250, 70%, 60%)" },
  { name: "Entertainment", value: 150, color: "hsl(152, 60%, 48%)" },
  { name: "Utilities", value: 310, color: "hsl(38, 92%, 55%)" },
  { name: "Shopping", value: 260, color: "hsl(340, 65%, 55%)" },
  { name: "Health", value: 120, color: "hsl(200, 70%, 55%)" },
];

export const summaryData = {
  totalBalance: 24563.80,
  monthlySpending: 1918.96,
  monthlyIncome: 7590.00,
  savingsRate: 74.7,
  balanceTrend: 12.5,
  spendingTrend: -8.2,
  incomeTrend: 6.1,
  savingsTrend: 3.4,
};

export const categories = [
  "Food", "Transport", "Entertainment", "Utilities", "Shopping", "Health", "Education", "Travel", "Other"
];
