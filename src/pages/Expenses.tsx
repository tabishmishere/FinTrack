import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { transactions, categories } from "@/data/mock";
import { AddExpenseDialog } from "@/components/dashboard/AddExpenseDialog";

const statusStyles: Record<string, string> = {
  completed: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  failed: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function Expenses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = transactions
    .filter((tx) => tx.type === "expense")
    .filter((tx) => tx.name.toLowerCase().includes(search.toLowerCase()))
    .filter((tx) => category === "all" || tx.category.toLowerCase() === category);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Expenses</h1>
          <p className="text-sm text-muted-foreground">Manage and track your expenses</p>
        </div>
        <AddExpenseDialog />
      </div>

      <Card className="glass rounded-2xl border-border/30">
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search expenses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-xl border-border/40 bg-secondary pl-9"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full rounded-xl border-border/40 bg-secondary sm:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="glass rounded-xl">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="glass rounded-2xl border-border/30">
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
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="py-12 text-center text-muted-foreground">
                    No expenses found
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((tx) => (
                  <TableRow key={tx.id} className="border-border/20 hover:bg-secondary/40 transition-colors">
                    <TableCell className="font-medium">{tx.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-lg text-xs font-normal bg-secondary/60">
                        {tx.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden sm:table-cell">{tx.date}</TableCell>
                    <TableCell className="text-right font-semibold">Rs {Math.abs(tx.amount).toLocaleString("en-PK")}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline" className={`rounded-lg text-xs ${statusStyles[tx.status]}`}>
                        {tx.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
