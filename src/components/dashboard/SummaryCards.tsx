import { DollarSign, TrendingDown, TrendingUp, Wallet, PiggyBank } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { summaryData, formatPKR } from "@/data/mock";

const cards = [
  {
    title: "Total Balance",
    value: summaryData.totalBalance,
    trend: summaryData.balanceTrend,
    icon: Wallet,
    gradient: "gradient-primary",
  },
  {
    title: "Monthly Spending",
    value: summaryData.monthlySpending,
    trend: summaryData.spendingTrend,
    icon: TrendingDown,
    gradient: "gradient-warning",
  },
  {
    title: "Monthly Income",
    value: summaryData.monthlyIncome,
    trend: summaryData.incomeTrend,
    icon: DollarSign,
    gradient: "gradient-success",
  },
  {
    title: "Savings Rate",
    value: summaryData.savingsRate,
    trend: summaryData.savingsTrend,
    icon: PiggyBank,
    gradient: "gradient-primary",
    isPercentage: true,
  },
];

export function SummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <Card
          key={card.title}
          className="glass glass-hover glow-hover rounded-2xl border-border/30 animate-fade-in"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{card.title}</p>
              <div className={`${card.gradient} flex h-10 w-10 items-center justify-center rounded-xl`}>
                <card.icon className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold tracking-tight">
                {card.isPercentage
                  ? `${card.value}%`
                  : formatPKR(card.value)}
              </p>
              <div className="mt-1 flex items-center gap-1">
                {card.trend > 0 ? (
                  <TrendingUp className="h-3.5 w-3.5 text-success" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-destructive" />
                )}
                <span
                  className={`text-xs font-medium ${
                    card.trend > 0 ? "text-success" : "text-destructive"
                  }`}
                >
                  {card.trend > 0 ? "+" : ""}
                  {card.trend}%
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
