"use client"
import React from 'react'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useTranslations } from "next-intl"

const ProjectSuccess = () => {
  const t = useTranslations("ProjectSuccess")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { target: 500, label: t("stats.projectsDelivered"), suffix: "+" },
    { target: 98, label: t("stats.clientSatisfaction"), suffix: "%" },
    { target: 50, label: t("stats.expertEngineers"), suffix: "+" },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      
      setCounts(stats.map(stat => Math.floor(eased * stat.target)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isInView])

  return (
    <section ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-4 py-1 rounded-full">
            {t("badge")}
          </span>
          <h2 className="text-3xl font-bold mt-4">
            {t("title")} <span className="text-green-600">{t("titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow">
              <div className="text-4xl font-bold text-green-600">
                {counts[i]}{stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSuccess