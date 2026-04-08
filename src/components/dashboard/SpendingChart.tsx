import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { monthlySpending } from "@/data/mock";

export function SpendingChart() {
  return (
    <Card className="glass rounded-2xl border-border/30 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Spending Over Time</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlySpending}>
              <defs>
                <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(238, 80%, 66%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(238, 80%, 66%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 20%, 16%)" />
              <XAxis dataKey="month" stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222, 41%, 9%)",
                  border: "1px solid hsl(222, 20%, 16%)",
                  borderRadius: "12px",
                  color: "hsl(210, 40%, 96%)",
                }}
              />
              <Area type="monotone" dataKey="income" stroke="hsl(152, 60%, 48%)" fill="url(#incomeGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="spending" stroke="hsl(238, 80%, 66%)" fill="url(#spendGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
