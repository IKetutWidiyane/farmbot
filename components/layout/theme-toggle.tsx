"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <Button
        aria-label="Toggle theme"
        className="h-11 w-11 rounded-full px-0"
        variant="secondary"
      />
    );
  }

  return (
    <Button
      aria-label="Toggle theme"
      className="h-11 w-11 rounded-full px-0"
      variant="secondary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
