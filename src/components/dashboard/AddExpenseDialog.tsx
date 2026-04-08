import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { categories } from "@/data/mock";
import { toast } from "sonner";

export function AddExpenseDialog() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Expense added successfully!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gradient-primary rounded-xl text-primary-foreground glow-hover">
          <Plus className="mr-2 h-4 w-4" />
          Add Expense
        </Button>
      </DialogTrigger>
      <DialogContent className="glass rounded-2xl border-border/30 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Expense</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="e.g. Coffee Shop" className="rounded-xl border-border/40 bg-secondary" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Amount</Label>
              <Input type="number" placeholder="0.00" className="rounded-xl border-border/40 bg-secondary" />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="rounded-xl border-border/40 bg-secondary">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="glass rounded-xl">
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Date</Label>
            <Input type="date" className="rounded-xl border-border/40 bg-secondary" />
          </div>
          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea placeholder="Optional notes..." className="rounded-xl border-border/40 bg-secondary resize-none" rows={3} />
          </div>
          <Button type="submit" className="w-full gradient-primary rounded-xl text-primary-foreground">
            Add Expense
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
