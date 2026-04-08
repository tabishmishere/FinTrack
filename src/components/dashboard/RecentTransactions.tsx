import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactions } from "@/data/mock";

const statusStyles: Record<string, string> = {
  completed: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  failed: "bg-destructive/10 text-destructive border-destructive/20",
};

export function RecentTransactions() {
  return (
    <Card className="glass rounded-2xl border-border/30 animate-fade-in" style={{ animationDelay: "600ms" }}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border/30 hover:bg-transparent">
              <TableHead className="text-muted-foreground/60">Name</TableHead>
              <TableHead className="text-muted-foreground/60">Category</TableHead>
              <TableHead className="text-muted-foreground/60 hidden sm:table-cell">Date</TableHead>
              <TableHead className="text-muted-foreground/60 text-right">Amount</TableHead>
              <TableHead className="text-muted-foreground/60 hidden md:table-cell">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.slice(0, 7).map((tx) => (
              <TableRow key={tx.id} className="border-border/20 hover:bg-secondary/40 transition-colors">
                <TableCell className="font-medium">{tx.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="rounded-lg text-xs font-normal bg-secondary/60">
                    {tx.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground hidden sm:table-cell">{tx.date}</TableCell>
                <TableCell className={`text-right font-semibold ${tx.amount > 0 ? "text-success" : "text-foreground"}`}>
                  {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant="outline" className={`rounded-lg text-xs ${statusStyles[tx.status]}`}>
                    {tx.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
