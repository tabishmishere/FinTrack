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
  {
    id: "1",
    name: "Netflix Subscription",
    category: "Entertainment",
    date: "2026-04-07",
    amount: -4445,
    type: "expense",
    status: "completed",
  },
  {
    id: "2",
    name: "Salary Deposit",
    category: "Salary",
    date: "2026-04-01",
    amount: 1445600,
    type: "income",
    status: "completed",
  },
  {
    id: "3",
    name: "Grocery Store",
    category: "Food",
    date: "2026-04-06",
    amount: -24306,
    type: "expense",
    status: "completed",
  },
  {
    id: "4",
    name: "Electric Bill",
    category: "Utilities",
    date: "2026-04-05",
    amount: -39476,
    type: "expense",
    status: "pending",
  },
  {
    id: "5",
    name: "Freelance Payment",
    category: "Freelance",
    date: "2026-04-04",
    amount: 333600,
    type: "income",
    status: "completed",
  },
  {
    id: "6",
    name: "Uber Ride",
    category: "Transport",
    date: "2026-04-04",
    amount: -6811,
    type: "expense",
    status: "completed",
  },
  {
    id: "7",
    name: "Coffee Shop",
    category: "Food",
    date: "2026-04-03",
    amount: -1877,
    type: "expense",
    status: "completed",
  },
  {
    id: "8",
    name: "Gym Membership",
    category: "Health",
    date: "2026-04-02",
    amount: -13897,
    type: "expense",
    status: "completed",
  },
  {
    id: "9",
    name: "Dividend Income",
    category: "Investment",
    date: "2026-04-01",
    amount: 94520,
    type: "income",
    status: "completed",
  },
  {
    id: "10",
    name: "Restaurant",
    category: "Food",
    date: "2026-04-01",
    amount: -17319,
    type: "expense",
    status: "completed",
  },
  {
    id: "11",
    name: "Amazon Purchase",
    category: "Shopping",
    date: "2026-03-30",
    amount: -36137,
    type: "expense",
    status: "completed",
  },
  {
    id: "12",
    name: "Side Project Income",
    category: "Freelance",
    date: "2026-03-28",
    amount: 236300,
    type: "income",
    status: "completed",
  },
];

export const monthlySpending = [
  { month: "Oct", spending: 583800, income: 1612400 },
  { month: "Nov", spending: 667200, income: 1695800 },
  { month: "Dec", spending: 889600, income: 1640200 },
  { month: "Jan", spending: 778400, income: 1779200 },
  { month: "Feb", spending: 639400, income: 1723600 },
  { month: "Mar", spending: 722800, income: 1890400 },
  { month: "Apr", spending: 528200, income: 2001600 },
];

export const categoryBreakdown: CategoryBreakdown[] = [
  { name: "Food", value: 116760, color: "hsl(238, 80%, 66%)" },
  { name: "Transport", value: 50040, color: "hsl(250, 70%, 60%)" },
  { name: "Entertainment", value: 41700, color: "hsl(152, 60%, 48%)" },
  { name: "Utilities", value: 86180, color: "hsl(38, 92%, 55%)" },
  { name: "Shopping", value: 72280, color: "hsl(340, 65%, 55%)" },
  { name: "Health", value: 33360, color: "hsl(200, 70%, 55%)" },
];

export const summaryData = {
  totalBalance: 6828577,
  monthlySpending: 533471,
  monthlyIncome: 2110020,
  savingsRate: 74.7,
  balanceTrend: 12.5,
  spendingTrend: -8.2,
  incomeTrend: 6.1,
  savingsTrend: 3.4,
};

export const categories = [
  "Food",
  "Transport",
  "Entertainment",
  "Utilities",
  "Shopping",
  "Health",
  "Education",
  "Travel",
  "Other",
];

export function formatPKR(amount: number): string {
  return `Rs ${Math.abs(amount).toLocaleString("en-PK")}`;
}
