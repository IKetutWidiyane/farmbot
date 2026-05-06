"use client";

import { Menu, Sprout, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/75 backdrop-blur-2xl dark:bg-ink/75">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link className="flex items-center gap-2 font-bold" href="#top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-glow">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="text-lg tracking-normal">FarmBot</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-slate-600 transition hover:text-primary dark:text-slate-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="#pricing">Get Started</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            aria-label="Open menu"
            className="h-11 w-11 rounded-full px-0"
            onClick={() => setOpen((value) => !value)}
            variant="secondary"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "container-page grid transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="glass-panel rounded-2xl p-3">
            {navItems.map((item) => (
              <Link
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
