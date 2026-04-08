import { Card, CardContent } from "@/components/ui/card";
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

export default function Income() {
  const incomeTransactions = transactions.filter((tx) => tx.type === "income");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Income</h1>
        <p className="text-sm text-muted-foreground">Track your income sources</p>
      </div>
      <Card className="glass rounded-2xl border-border/30">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border/30 hover:bg-transparent">
                <TableHead className="text-muted-foreground/60">Name</TableHead>
                <TableHead className="text-muted-foreground/60">Category</TableHead>
                <TableHead className="text-muted-foreground/60 hidden sm:table-cell">Date</TableHead>
                <TableHead className="text-muted-foreground/60 text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incomeTransactions.map((tx) => (
                <TableRow key={tx.id} className="border-border/20 hover:bg-secondary/40 transition-colors">
                  <TableCell className="font-medium">{tx.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded-lg text-xs font-normal bg-secondary/60">{tx.category}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden sm:table-cell">{tx.date}</TableCell>
                  <TableCell className="text-right font-semibold text-success">+Rs {tx.amount.toLocaleString("en-PK")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
