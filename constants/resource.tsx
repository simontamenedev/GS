import { BookOpen, Building2, Clock, File, Star, TrendingUp, Users } from "lucide-react"

export const serviceMenus = [
  {
    icon: File,
    title: "Blog",
    description: "Notes on craft, delivery, and lessons from our projects.",
    href: "/blog",
    id: 1,
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "Client journeys from kickoff through launch and support.",
    href: "/case-studies",
    id: 2,
  },
  {
    icon: Clock,
    title: "Process",
    description: "Sprints, clear updates, and shipping production code.",
    href: "/process",
    id: 3,
  },
]

export const learnMenus = [
  {
    icon: Users,
    title: "Our Clients",
    description: "Brands trusting systems we design, build, and operate.",
    href: "/our-clients",
    id: 4,
  },
  {
    icon: Star,
    title: "Testimonials",
    description: "Partners on speed, quality, collaboration, reliability.",
    href: "/testimonials",
    id: 5,
  },
]

export const companyMenus = [
  {
    icon: Building2,
    title: "Our Story",
    description: "How we began, what we believe, and the vision ahead.",
    href: "/our-story",
    id: 6,
  },
  {
    icon: TrendingUp,
    title: "Engagement Model",
    description: "Pricing, teams, and delivery that scale with your growth.",
    href: "/engagement-model",
    id: 7,
  },
]