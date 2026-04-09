import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Sparkles, Shield, BarChart3 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-[45%] gradient-primary flex-col justify-center items-start p-16 relative overflow-hidden">
        {/* Animated circles background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary-foreground/20"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20 backdrop-blur-sm">
              <TrendingUp className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground tracking-tight">
              FinTrack
            </h1>
          </div>

          {/* Tagline */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-primary-foreground leading-tight">
              Smart Money,
              <br />
              <span className="text-primary-foreground/80">Smarter Decisions.</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-md leading-relaxed">
              Track expenses, set budgets, and gain insights into your financial health — all in one beautifully crafted dashboard.
            </p>
          </div>

          {/* Feature pills */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">AI-Powered Insights & Analytics</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Bank-Level Security & Encryption</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <BarChart3 className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Real-Time Budget Tracking in PKR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 lg:hidden justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">FinTrack</span>
          </div>

          {/* Toggle tabs */}
          <div className="flex rounded-2xl bg-secondary p-1.5 border border-border/30">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all duration-300 ${
                mode === "login"
                  ? "gradient-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all duration-300 ${
                mode === "signup"
                  ? "gradient-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Header text */}
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {mode === "login"
                ? "Sign in to access your financial dashboard"
                : "Start tracking your finances in seconds"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="space-y-2 animate-fade-in">
                <Label className="text-sm font-medium">Full Name</Label>
                <Input
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border-border/40 bg-secondary h-11"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border-border/40 bg-secondary h-11"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Password</Label>
                {mode === "login" && (
                  <button type="button" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </button>
                )}
              </div>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl border-border/40 bg-secondary h-11"
              />
            </div>
            <Button
              type="submit"
              className="w-full gradient-primary rounded-xl text-primary-foreground glow-hover h-11 text-sm font-semibold"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <Separator className="bg-border/40" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground">
              or continue with
            </span>
          </div>

          {/* Google login */}
          <Button
            variant="outline"
            className="w-full rounded-xl border-border/40 bg-secondary hover:bg-secondary/80 h-11"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground">
            By continuing, you agree to FinTrack's{" "}
            <span className="text-primary cursor-pointer hover:underline">Terms of Service</span>
            {" "}and{" "}
            <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
