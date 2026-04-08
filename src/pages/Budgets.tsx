import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const budgets = [
  { category: "Food", spent: 420, limit: 600, color: "bg-primary" },
  { category: "Transport", spent: 180, limit: 250, color: "bg-accent" },
  { category: "Entertainment", spent: 150, limit: 200, color: "bg-success" },
  { category: "Utilities", spent: 310, limit: 350, color: "bg-warning" },
  { category: "Shopping", spent: 260, limit: 300, color: "bg-chart-5" },
  { category: "Health", spent: 120, limit: 200, color: "bg-chart-1" },
];

export default function Budgets() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Budgets</h1>
        <p className="text-sm text-muted-foreground">Track your spending against budget limits</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {budgets.map((b) => {
          const pct = Math.round((b.spent / b.limit) * 100);
          return (
            <Card key={b.category} className="glass glass-hover rounded-2xl border-border/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{b.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold">${b.spent}</span>
                  <span className="text-sm text-muted-foreground">of ${b.limit}</span>
                </div>
                <Progress value={pct} className="h-2 rounded-full" />
                <p className={`text-xs font-medium ${pct >= 90 ? "text-destructive" : pct >= 70 ? "text-warning" : "text-success"}`}>
                  {pct}% used · ${b.limit - b.spent} remaining
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
