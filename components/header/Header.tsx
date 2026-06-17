"use client"

import Image from "next/image"
import Link from "next/link"
import { Grip } from "lucide-react"
import { useRef, useState } from "react"
import { cn } from "@/utils/utils"
import Button from "../button/button"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { languages } from "@/constants/languages"
import { MenuType } from "@/types/MenuType"
import MegaMenu from "./megamenu/megamenu"

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

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

      <header className=' z-50 sticky top-0 bg-white/50'>
        <div className='flex items-center gap-4 py-4'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='/gs.png' alt='Logo' width={40} height={40} />
            <span className='text-xl font-bold'>{companyT("name")}</span>
          </Link>

          <nav
            className='hidden md:flex items-center gap-10 flex-1 justify-center'
            onMouseLeave={closeMenu}
          >
            <Link
              href='/'
              className='font-medium hover:text-green-600 hover:scale-105 hover:font-bold transition-all'
            >
              {t("home")}
            </Link>

            <Button
              type='button'
              variant='none'
              className='flex items-center gap-2 font-medium hover:text-green-600 hover:scale-105 hover:font-bold transition-all'
              onMouseEnter={() => openMenu("services")}
            >
              {t("services")}
              <Grip size={16} />
            </Button>

            <Button
              type='button'
              variant='none'
              className='flex items-center gap-2 font-medium hover:text-green-600 hover:scale-105 hover:font-bold transition-all'
              onMouseEnter={() => openMenu("resources")}
            >
              {t("resources")}
              <Grip size={16} />
            </Button>
          </nav>

          <Button
            type='button'
            variant='none'
            className='flex items-center gap-2 font-medium hover:text-green-600 transition-colors'
            onMouseEnter={() => openMenu("language")}
            onMouseLeave={closeMenu}
          >
            {currentLanguage && <currentLanguage.flag />}
            <span>{currentLanguage?.label}</span>
            <Grip size={16} />
          </Button>

          <div className='flex items-center gap-4'>
            <Button  className={cn('font-bold')}>{t("getInTouch")}</Button>
          </div>
        </div>

        <MegaMenu
          activeMenu={activeMenu}
          cancelClose={cancelClose}
          closeMenu={closeMenu}
        />
      </header>
    </>
  )
}
