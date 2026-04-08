import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const budgets = [
  { category: "Food", spent: 116760, limit: 166800, color: "bg-primary" },
  { category: "Transport", spent: 50040, limit: 69500, color: "bg-accent" },
  { category: "Entertainment", spent: 41700, limit: 55600, color: "bg-success" },
  { category: "Utilities", spent: 86180, limit: 97300, color: "bg-warning" },
  { category: "Shopping", spent: 72280, limit: 83400, color: "bg-chart-5" },
  { category: "Health", spent: 33360, limit: 55600, color: "bg-chart-1" },
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
                  <span className="text-2xl font-bold">Rs {b.spent.toLocaleString("en-PK")}</span>
                  <span className="text-sm text-muted-foreground">of Rs {b.limit.toLocaleString("en-PK")}</span>
                </div>
                <Progress value={pct} className="h-2 rounded-full" />
                <p className={`text-xs font-medium ${pct >= 90 ? "text-destructive" : pct >= 70 ? "text-warning" : "text-success"}`}>
                  {pct}% used · Rs {(b.limit - b.spent).toLocaleString("en-PK")} remaining
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
