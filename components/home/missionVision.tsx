"use client"

import  { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { 
  Eye, 
  Target, 
} from 'lucide-react'
import { coreValues } from '@/constants/corevalues'

const MissionVision = () => {
  const t = useTranslations("MissionVision")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])



  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 bg-white rounded-3xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
            {t("badge") || "About Us"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title") || "Our Mission & Vision"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle") || "Driving sustainable transformation across Africa"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="animate-on-scroll opacity-0 group">
            <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-10 border border-gray-100 hover:border-green-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/50 to-transparent rounded-full -mr-16 -mt-16" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t("visionTitle")}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t("vision")}
                </p>
                <div className="mt-6 flex items-center gap-2 text-green-600">
                  <span className="text-sm font-medium">{t("visionCta") || "Learn more"}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll opacity-0 group" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-full bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t("missionTitle")}</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  {t("mission")}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white">
                  <span className="text-sm font-medium">{t("missionCta") || "Our commitment"}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="animate-on-scroll opacity-0">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t("coreValuesTitle")}
            </h3>
            <p className="text-gray-600 text-lg">
              {t("coreValuesSubtitle") || "The principles that guide everything we do"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {coreValues.map((value, index) => (
              <div
                key={value.key}
                className="group animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`p-3 ${value.bg} rounded-full mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-tight">
                    {t(`values.${value.key}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <p className="text-gray-600 mb-4">
            {t("footer") || "Join us in building a sustainable future"}
          </p>
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all hover:shadow-lg hover:scale-105">
            {t("ctaButton") || "Get In Touch"}
          </button>
        </div>
      </div>

     
    </section>
  )
}

export default MissionVision