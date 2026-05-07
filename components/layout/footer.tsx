import { Github, Linkedin, Mail, Sprout } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/IKetutWidiyane",
    icon: Github
  },
  {
    label: "Email",
    href: "mailto:iketutwidiane09@gmail.com",
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin
  }
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white/70 py-10 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex items-center gap-2 font-bold" href="#top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white">
            <Sprout className="h-5 w-5" />
          </span>
          FarmBot
        </Link>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          (c) 2026 I Ketut Widiyane. Open-source landing template.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <Link
              aria-label={item.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-primary hover:text-primary dark:border-white/10 dark:text-zinc-300"
              href={item.href}
              key={item.label}
            >
              <item.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
