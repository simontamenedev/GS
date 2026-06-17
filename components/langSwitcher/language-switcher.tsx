"use client"

import { cn } from "@/utils/utils"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import React, { useState, useRef, useEffect } from "react"

// UK Flag SVG
const UKFlag = () => (
  <svg width={30} height={20} viewBox='0 0 60 30' fill='none'>
    <rect width='60' height='30' fill='#012169' />
    <path d='M0,0 L60,30 M60,0 L0,30' stroke='#FFFFFF' strokeWidth='6' />
    <path d='M0,0 L60,30 M60,0 L0,30' stroke='#C8102E' strokeWidth='4' />
    <path d='M30,0 V30 M0,15 H60' stroke='#FFFFFF' strokeWidth='10' />
    <path d='M30,0 V30 M0,15 H60' stroke='#C8102E' strokeWidth='6' />
  </svg>
)

// Ethiopia Flag SVG
const EthiopiaFlag = () => (
  <svg width={30} height={20} viewBox='0 0 30 20' fill='none'>
    <rect width={30} height={20} fill='#F5F5F5' />
    <rect
      width={1876}
      height={988}
      transform='translate(-1026 -276)'
      fill='white'
    />
    <path d='M30 0H0V20H30V0Z' fill='#FFDA44' />
    <path d='M30 0H0V6.66665H30V0Z' fill='#6DA544' />
    <path d='M30 13.3334H0V20H30V13.3334Z' fill='#D80027' />
    <path
      d='M14.9992 14.7825C17.6404 14.7825 19.7815 12.6413 19.7815 10C19.7815 7.35871 17.6404 5.21753 14.9992 5.21753C12.3579 5.21753 10.2168 7.35871 10.2168 10C10.2168 12.6413 12.3579 14.7825 14.9992 14.7825Z'
      fill='#0052B4'
    />
    <path
      d='M14.9994 6.29657L15.8628 8.95362H18.661L16.3964 10.5959L17.2664 13.2609L14.9994 11.6108L12.7359 13.2578L13.6025 10.5959L11.3398 8.95362H14.1361L14.9994 6.29657Z'
      fill='#FFDA44'
    />
    <path
      d='M18.4431 10.6613L15.7043 9.77134L17.3969 7.44166L16.6935 6.93048L15.0008 9.26028L13.3082 6.93054L12.6047 7.4416L14.2973 9.77146L11.5586 10.6613L11.8272 11.4884L14.566 10.5984V13.4782H15.4357V10.5984L18.1744 11.4884L18.4431 10.6613Z'
      fill='#FFDA44'
    />
  </svg>
)

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const switchLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`
    router.refresh()
    setIsOpen(false)
  }

  const languages = [
    {
      code: "en",
      label: "English",
      nativeLabel: "English",
      flag: UKFlag,
    },
    {
      code: "am",
      label: "አማርኛ",
      nativeLabel: "Amharic",
      flag: EthiopiaFlag,
    },
  ]

  const currentLanguage = languages.find((l) => l.code === currentLocale)

  return (
    <div ref={dropdownRef} className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className={cn(
          "flex items-center cursor-pointer gap-2 px-3 py-2 rounded-lg",
          "hover:bg-gray-100 transition-colors",
          "text-gray-700 font-medium",
        )}
        aria-label='Select language'
        aria-expanded={isOpen}
      >
        {currentLanguage && <currentLanguage.flag />}
        <span className='font-medium'>{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full right-0 mt-2 min-w-55",
            "bg-white rounded-lg shadow-lg border border-gray-200",
            "py-2 animate-in fade-in zoom-in-95 duration-200",
          )}
          onMouseLeave={() => setIsOpen(false)}
          role='menu'
        >
          {languages.map((lang) => {
            const isActive = currentLocale === lang.code
            return (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={cn(
                  "w-full cursor-pointer flex items-center gap-3 px-4 py-2.5",
                  "hover:bg-gray-50 transition-colors",
                  "text-left text-gray-700",
                  isActive && "bg-blue-50 text-blue-600",
                )}
                role='menuitem'
                aria-current={isActive ? "true" : undefined}
              >
                <lang.flag />
                <div className='flex flex-col'>
                  <span
                    className={cn("font-medium", isActive && "text-blue-600")}
                  >
                    {lang.label}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {lang.nativeLabel}
                  </span>
                </div>
                {isActive && (
                  <svg
                    className='w-4 h-4 ml-auto text-blue-600'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
