import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { monthlySpending, categoryBreakdown } from "@/data/mock";
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react";

const kpis = [
  {
    title: "Avg. Daily Spend",
    value: "Rs 17,782",
    trend: -4.2,
    icon: DollarSign,
  },
  { title: "Top Category", value: "Food", trend: 0, icon: Target },
  { title: "Income Growth", value: "+6.1%", trend: 6.1, icon: TrendingUp },
  {
    title: "Expense Reduction",
    value: "-8.2%",
    trend: -8.2,
    icon: TrendingDown,
  },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-sm text-muted-foreground">
          Deep insights into your finances
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, i) => (
          <Card
            key={kpi.title}
            className="glass rounded-2xl border-border/30 animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-xl">
                  <kpi.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{kpi.title}</p>
                  <p className="text-lg font-bold">{kpi.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass rounded-2xl border-border/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              Monthly Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlySpending}>
                  <defs>
                    <linearGradient id="aSpend" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(238, 80%, 66%)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(238, 80%, 66%)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                    <linearGradient id="aIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(152, 60%, 48%)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(152, 60%, 48%)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(222, 20%, 16%)"
                  />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(215, 20%, 55%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(215, 20%, 55%)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222, 41%, 9%)",
                      border: "1px solid hsl(222, 20%, 16%)",
                      borderRadius: "12px",
                      color: "hsl(210, 40%, 96%)",
                    }}
                    formatter={(value: number) => [
                      `Rs ${value.toLocaleString("en-PK")}`,
                      undefined,
                    ]}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="income"
                    stroke="hsl(152, 60%, 48%)"
                    fill="url(#aIncome)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="spending"
                    stroke="hsl(238, 80%, 66%)"
                    fill="url(#aSpend)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="glass rounded-2xl border-border/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              Spending by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryBreakdown.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222, 41%, 9%)",
                      border: "1px solid hsl(222, 20%, 16%)",
                      borderRadius: "12px",
                      color: "hsl(210, 40%, 96%)",
                    }}
                    formatter={(value: number) => [
                      `Rs ${value.toLocaleString("en-PK")}`,
                      undefined,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass rounded-2xl border-border/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">
            Income vs Expenses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySpending}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(222, 20%, 16%)"
                />
                <XAxis
                  dataKey="month"
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(215, 20%, 55%)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 41%, 9%)",
                    border: "1px solid hsl(222, 20%, 16%)",
                    borderRadius: "12px",
                    color: "hsl(210, 40%, 96%)",
                  }}
                  formatter={(value: number) => [
                    `Rs ${value.toLocaleString("en-PK")}`,
                    undefined,
                  ]}
                />
                <Legend />
                <Bar
                  dataKey="income"
                  fill="hsl(152, 60%, 48%)"
                  radius={[8, 8, 0, 0]}
                  barSize={28}
                />
                <Bar
                  dataKey="spending"
                  fill="hsl(238, 80%, 66%)"
                  radius={[8, 8, 0, 0]}
                  barSize={28}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
