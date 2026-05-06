import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WorkStep = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
