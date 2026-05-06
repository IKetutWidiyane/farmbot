import {
  Activity,
  Bot,
  BrainCircuit,
  CloudSun,
  Droplets,
  Leaf,
  LineChart,
  RadioTower,
  Sprout,
  ThermometerSun
} from "lucide-react";
import type {
  FAQ,
  Feature,
  NavItem,
  PricingPlan,
  Testimonial,
  WorkStep
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export const features: Feature[] = [
  {
    title: "Real-time Monitoring",
    description:
      "Track temperature, humidity, soil moisture, and device health from one live dashboard.",
    icon: RadioTower
  },
  {
    title: "AI Prediction",
    description:
      "Forecast irrigation needs, crop stress, and weather-sensitive risks before they impact yield.",
    icon: BrainCircuit
  },
  {
    title: "Automation System",
    description:
      "Trigger pumps, valves, fans, and alerts based on smart rules powered by sensor data.",
    icon: Bot
  }
];

export const workSteps: WorkStep[] = [
  {
    title: "Sensors collect data",
    description:
      "Distributed IoT sensors capture field conditions every few seconds across your farm."
  },
  {
    title: "AI analyzes data",
    description:
      "FarmBot transforms raw signals into predictions, recommendations, and anomaly alerts."
  },
  {
    title: "System automates actions",
    description:
      "Connected devices respond instantly to protect crops and reduce operational overhead."
  }
];

export const dashboardMetrics = [
  {
    label: "Temperature",
    value: "27.8 C",
    trend: "+1.2%",
    icon: ThermometerSun,
    color: "text-violet-500"
  },
  {
    label: "Humidity",
    value: "68%",
    trend: "-3.4%",
    icon: Droplets,
    color: "text-cyan-500"
  },
  {
    label: "Soil Condition",
    value: "Healthy",
    trend: "Optimal",
    icon: Sprout,
    color: "text-accent"
  }
];

export const sensorTimeline = [
  { label: "Greenhouse A", value: "Active", icon: Leaf },
  { label: "Weather Node", value: "Synced", icon: CloudSun },
  { label: "Irrigation Loop", value: "Auto", icon: Activity },
  { label: "Yield Forecast", value: "92%", icon: LineChart }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$19",
    description: "For small farms validating smart monitoring.",
    features: ["3 sensor nodes", "Live dashboard", "Email alerts", "Community support"]
  },
  {
    name: "Pro",
    price: "$59",
    description: "For growing teams that need automation and AI insights.",
    features: [
      "15 sensor nodes",
      "AI predictions",
      "Automation rules",
      "Priority support"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For commercial operations with advanced infrastructure.",
    features: [
      "Unlimited devices",
      "Custom integrations",
      "Dedicated onboarding",
      "SLA support"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Maya Putri",
    role: "Greenhouse Operator",
    quote:
      "FarmBot helped our team spot humidity changes early and reduce manual checks across three growing zones."
  },
  {
    name: "Raka Wijaya",
    role: "AgriTech Founder",
    quote:
      "The dashboard feels fast, clear, and investor-ready. It turns complex IoT data into decisions."
  },
  {
    name: "Elena Hart",
    role: "Farm Operations Lead",
    quote:
      "Automation rules gave us a repeatable way to protect crops during unpredictable weather shifts."
  }
];

export const faqs: FAQ[] = [
  {
    question: "Can FarmBot connect to existing sensors?",
    answer:
      "Yes. FarmBot is designed around modular IoT integrations and can be adapted for common field sensors and gateways."
  },
  {
    question: "Does the AI work without historical data?",
    answer:
      "The system can start with baseline models, then improves recommendations as it learns from your farm conditions."
  },
  {
    question: "Is this landing page open-source ready?",
    answer:
      "Yes. The project uses reusable components, centralized data, TypeScript types, and a clean folder structure."
  }
];
