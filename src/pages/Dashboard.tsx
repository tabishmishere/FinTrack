import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { CategoryChart } from "@/components/dashboard/CategoryChart";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your financial health
        </p>
      </div>
      <SummaryCards />
      <div className="grid gap-6 lg:grid-cols-2">
        <SpendingChart />
        <CategoryChart />
      </div>
      <RecentTransactions />
    </div>
  );
}
