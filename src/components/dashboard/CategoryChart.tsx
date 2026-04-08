import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { categoryBreakdown } from "@/data/mock";

export function CategoryChart() {
  return (
    <Card className="glass rounded-2xl border-border/30 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Category Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryBreakdown} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 20%, 16%)" horizontal={false} />
              <XAxis type="number" stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
              <YAxis type="category" dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} width={90} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222, 41%, 9%)",
                  border: "1px solid hsl(222, 20%, 16%)",
                  borderRadius: "12px",
                  color: "hsl(210, 40%, 96%)",
                }}
                formatter={(value: number) => [`$${value}`, "Amount"]}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={20}>
                {categoryBreakdown.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
