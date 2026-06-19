"use client"
import { cn } from "@/utils/utils"
import { useTranslations } from "next-intl"
import { useState } from "react"

const Footer = () => {
  const t = useTranslations("Footer")
  const companyName = useTranslations("Company")("name")
  const currentYear = new Date().getFullYear()
  
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!emailRegex.test(email)) {
      setIsError(true)
      setIsSubscribed(false)
      setTimeout(() => setIsError(false), 3000)
      return
    }
    
    // Simulate subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const socialLinks = [
    { name: t("social.facebook"), icon: "facebook", href: "#" },
    { name: t("social.twitter"), icon: "twitter", href: "#" },
    { name: t("social.instagram"), icon: "instagram", href: "#" },
    { name: t("social.linkedin"), icon: "linkedin", href: "#" },
  ]

  const quickLinks = [
    { label: t("quickLinks.aboutUs"), href: "/our-story" },
    // { label: t("quickLinks.services"), href: "/services" },
    // { label: t("quickLinks.resources"), href: "/resources" },
    { label: t("quickLinks.gallery"), href: "/gallery" },
  ]

  const supportLinks = [
    { label: t("support.contactUs"), href: "/contact" },
    // { label: t("support.faq"), href: "/faq" },
    // { label: t("support.privacyPolicy"), href: "/privacy" },
    // { label: t("support.termsOfService"), href: "/terms" },
  ]

  return (
    <footer className="bg-gray-900 text-white p-4">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-green-400 to-gray-500 bg-clip-text text-transparent">
              {companyName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("brand.description")}
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div> */}
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("quickLinks.title")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("support.title")}</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t("newsletter.title")}</h4>
            <p className="text-gray-400 text-sm">
              {t("newsletter.description")}
            </p>
            
            {isSubscribed && (
              <div className="p-3 rounded-lg bg-green-500/20 border border-green-500 text-green-400 text-sm">
                {t("newsletter.success")}
              </div>
            )}
            
            {isError && (
              <div className="p-3 rounded-lg bg-red-500/20 border border-red-500 text-red-400 text-sm">
                {t("newsletter.error")}
              </div>
            )}
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.placeholder")}
                className={cn(
                  "flex-1 px-4 py-2 rounded-lg",
                  "bg-gray-800 border border-gray-700",
                  "text-white placeholder-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
                  "transition-all duration-300"
                )}
              />
              <button
                type="submit"
                className={cn(
                  "px-4 py-2 rounded-lg",
                  "bg-linear-to-r from-green-500 to-gray-600",
                  "text-white font-medium",
                  "hover:from-green-600 hover:to-gray-700",
                  "transform hover:scale-105",
                  "transition-all duration-300",
                  "shadow-lg hover:shadow-green-500/25"
                )}
              >
                {t("newsletter.button")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              {t("copyright", { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer