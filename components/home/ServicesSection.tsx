"use client"
import { useTranslations } from "next-intl"
import { cn } from "@/utils/utils"
import { services } from "@/constants/serviceSections"

const ServicesSection = () => {
  const t = useTranslations("Services")

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "text-blue-600 dark:text-blue-400",
        hover: "hover:border-blue-300 dark:hover:border-blue-700",
        gradient: "from-blue-500/10 to-blue-600/5"
      },
      amber: {
        bg: "bg-amber-50 dark:bg-amber-900/20",
        border: "border-amber-200 dark:border-amber-800",
        icon: "text-amber-600 dark:text-amber-400",
        hover: "hover:border-amber-300 dark:hover:border-amber-700",
        gradient: "from-amber-500/10 to-amber-600/5"
      },
      emerald: {
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        border: "border-emerald-200 dark:border-emerald-800",
        icon: "text-emerald-600 dark:text-emerald-400",
        hover: "hover:border-emerald-300 dark:hover:border-emerald-700",
        gradient: "from-emerald-500/10 to-emerald-600/5"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "text-purple-600 dark:text-purple-400",
        hover: "hover:border-purple-300 dark:hover:border-purple-700",
        gradient: "from-purple-500/10 to-purple-600/5"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        icon: "text-green-600 dark:text-green-400",
        hover: "hover:border-green-300 dark:hover:border-green-700",
        gradient: "from-green-500/10 to-green-600/5"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        icon: "text-orange-600 dark:text-orange-400",
        hover: "hover:border-orange-300 dark:hover:border-orange-700",
        gradient: "from-orange-500/10 to-orange-600/5"
      },
      yellow: {
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        border: "border-yellow-200 dark:border-yellow-800",
        icon: "text-yellow-600 dark:text-yellow-400",
        hover: "hover:border-yellow-300 dark:hover:border-yellow-700",
        gradient: "from-yellow-500/10 to-yellow-600/5"
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        border: "border-indigo-200 dark:border-indigo-800",
        icon: "text-indigo-600 dark:text-indigo-400",
        hover: "hover:border-indigo-300 dark:hover:border-indigo-700",
        gradient: "from-indigo-500/10 to-indigo-600/5"
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-900/20",
        border: "border-teal-200 dark:border-teal-800",
        icon: "text-teal-600 dark:text-teal-400",
        hover: "hover:border-teal-300 dark:hover:border-teal-700",
        gradient: "from-teal-500/10 to-teal-600/5"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider bg-green-100 dark:bg-green-900/30 px-4 py-1.5 rounded-full">
            {t("title")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            {t("heading")}{' '} <span className="text-green-600 dark:text-green-400"> {t("headingHighlight")}</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            
            return (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden",
                  "bg-white dark:bg-gray-800",
                  "rounded-2xl p-6",
                  "border border-gray-200 dark:border-gray-700",
                  "shadow-sm hover:shadow-xl",
                  "transition-all duration-300",
                  "hover:-translate-y-2",
                  colors.hover
                )}
              >
                {/* Gradient background on hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  `bg-linear-to-br ${colors.gradient}`
                )} />

                {/* Icon */}
                <div className={cn(
                  "relative w-14 h-14 rounded-xl",
                  "flex items-center justify-center",
                  colors.bg,
                  "border",
                  colors.border,
                  "transition-all duration-300",
                  "group-hover:scale-110 group-hover:rotate-6"
                )}>
                  <service.icon className={cn(
                    "w-7 h-7",
                    colors.icon,
                    "transition-all duration-300"
                  )} />
                </div>

                {/* Content */}
                <div className="relative mt-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {t(`${service.category}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t(`${service.category}.description`)}
                  </p>
                </div>

                {/* Decorative line */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1",
                  "bg-linear-to-r",
                  `from-${service.color}-500 to-${service.color}-400`,
                  "scale-x-0 group-hover:scale-x-100",
                  "transition-transform duration-500 origin-left"
                )} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection