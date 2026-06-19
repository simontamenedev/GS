"use client"

import Image from "next/image"
import Link from "next/link"
import { Grip, Menu, X } from "lucide-react"
import { useRef, useState } from "react"
import { cn } from "@/utils/utils"
import Button from "../button/button"
import { useLocale, useTranslations } from "next-intl"
import { languages } from "@/constants/languages"
import { MenuType } from "@/types/MenuType"
import MegaMenu from "./megamenu/megamenu"
import MobileMenu from "./mobileMenu/mobileMenu"
import { navLinks } from "@/constants/navLinks"
import { usePathname } from "next/navigation"

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const t = useTranslations("Navigation")
  const companyT = useTranslations("Company")

  const openMenu = (menu: MenuType) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
    setActiveMenu(menu)
  }

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null)
    }, 200)
  }

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (activeMenu) setActiveMenu(null)
  }

  const currentLocale = useLocale()
  const currentLanguage = languages.find((l) => l.code === currentLocale)

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-all duration-300 z-40",
          activeMenu ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      />

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-all duration-300 z-40 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={toggleMobileMenu}
      />

      <header className='z-50 sticky top-0 bg-white/50 backdrop-blur-md'>
        <div className='flex items-center justify-between gap-4 py-3 px-4 md:px-6 lg:px-8'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 shrink-0'>
            <Image src='/gs.png' alt='Logo' width={40} height={40} />
            <span className='text-xl font-bold hidden sm:inline-block'>
              {companyT("name")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className='hidden md:flex items-center gap-6 lg:gap-10 flex-1 justify-center'
            onMouseLeave={closeMenu}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`
                  font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-green-600 hover:text-green-700"
                      : "text-gray-700 dark:text-gray-300 hover:text-green-600"
                  }
                  hover:scale-105 hover:font-bold
                `}
                  >
                    {t(link.label)}
                  </Link>
              )
            })}

            {/* <Button
              type='button'
              variant='none'
              className='flex items-center gap-2 font-medium hover:text-green-600 hover:scale-105 hover:font-bold transition-all'
              onMouseEnter={() => openMenu("services")}
            >
              {t("services")}
              <Grip size={16} />
            </Button> */}

            {/* <Button
              type='button'
              variant='none'
              className='flex items-center gap-2 font-medium hover:text-green-600 hover:scale-105 hover:font-bold transition-all'
              onMouseEnter={() => openMenu("resources")}
            >
              {t("resources")}
              <Grip size={16} />
            </Button> */}
          </nav>

          {/* Language Selector - Desktop */}
          <Button
            type='button'
            variant='none'
            className='hidden md:flex items-center gap-2 font-medium hover:text-green-600 transition-colors'
            onMouseEnter={() => openMenu("language")}
            onMouseLeave={closeMenu}
          >
            {currentLanguage && <currentLanguage.flag />}
            <span>{currentLanguage?.label}</span>
            <Grip size={16} />
          </Button>

          {/* Desktop Get In Touch Button */}
          <div className='hidden md:flex items-center gap-4'>
            <Button className='font-bold'><Link href='/contact'>{t("getInTouch")}</Link></Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className='flex md:hidden items-center gap-3'>
            <Button
              type='button'
              variant='none'
              className='flex items-center gap-1 text-sm hover:text-green-600 transition-colors'
              onClick={() => openMenu("language")}
            >
              {currentLanguage && <currentLanguage.flag />}
              <span>{currentLanguage?.code?.toUpperCase()}</span>
            </Button>

            <button
              onClick={toggleMobileMenu}
              className='p-2 rounded-lg hover:bg-gray-100 transition-colors'
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6 text-gray-700' />
              ) : (
                <Menu className='w-6 h-6 text-gray-700' />
              )}
            </button>
          </div>
        </div>

        {/* MegaMenu - Desktop Only */}
        <div
          className={cn(
            activeMenu === "language" ? "block" : "hidden",
            "md:block",
          )}
        >
          <MegaMenu
            activeMenu={activeMenu}
            cancelClose={cancelClose}
            closeMenu={closeMenu}
          />
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      </header>
    </>
  )
}
