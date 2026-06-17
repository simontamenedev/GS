import { Cloud, Code2, Cpu, Database, Drill, Gem, Globe, Pickaxe, Shield, Ship, Truck } from "lucide-react"

export const technologiesMenus = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom software solutions built with modern tech stacks.",
    href: "/services/software-development",
    id: 1,
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services.",
    href: "/services/cloud",
    id: 2,
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data engineering, BI, and real-time analytics solutions.",
    href: "/services/data-analytics",
    id: 3,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security assessments and implementation.",
    href: "/services/cybersecurity",
    id: 4,
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive model development.",
    href: "/services/ai-ml",
    id: 6,
  },
]

export const miningMenus = [
  {
    icon: Pickaxe,
    title: "Mineral Exploration",
    description: "Advanced geological surveying and exploration services.",
    href: "/services/mineral-exploration",
    id: 7,
  },
  {
    icon: Gem,
    title: "Gemstone & Mineral Trading",
    description: "Ethical sourcing and trading of precious minerals.",
    href: "/services/gemstone-trading",
    id: 8,
  },
  {
    icon: Drill,
    title: "Mining Operations",
    description: "Full-scale mining operations and project management.",
    href: "/services/mining-operations",
    id: 9,
  },
]

export const importExportMenus = [
  {
    icon: Truck,
    title: "Logistics & Shipping",
    description: "International freight forwarding and supply chain solutions.",
    href: "/services/logistics",
    id: 10,
  },
  {
    icon: Ship,
    title: "Import Services",
    description: "Customs clearance and global import management.",
    href: "/services/import",
    id: 11,
  },
  {
    icon: Globe,
    title: "Export Services",
    description: "Global market access and export documentation support.",
    href: "/services/export",
    id: 12,
  },
]
