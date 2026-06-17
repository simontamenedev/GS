"use client"

import { MenuType } from "@/types/MenuType"
import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import ServicesMenu from "../servicemenu/servicesMenu"
import LanguageMenu from "../langMenu/langMenu"
import ResourcesMenu from "../resourceMenu/resourceMenu"
import { cn } from "@/utils/utils"

function MegaMenu({
  activeMenu,
  cancelClose,
  closeMenu,
}: {
  activeMenu: MenuType
  cancelClose: () => void
  closeMenu: () => void
}) {
  const router = useRouter()
  const currentLocale = useLocale()

  const switchLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`
    router.refresh()
  }

  // Define the horizontal positions for the pointing pyramid arrow
  // This maps the active menu type to its dynamic position
  const arrowPositionClasses = {
    services: "left-[41%] xl:left-[50%]",   // Centered under Services button
    resources: "left-[53%] xl:left-[65%]",  // Centered under Resources button
    language: "right-[60px] left-auto -translate-x-34"  // Centered under Language button on the right
  }

  return (
    <div
      onMouseEnter={cancelClose}
      onMouseLeave={closeMenu}
      className={cn(
        "absolute top-full mt-4 z-50 transition-all duration-300 ease-out",
        activeMenu === "language"
          ? "right-0 w-64 origin-top-right"
          : "left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl",
        activeMenu
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-3 invisible",
      )}
    >
      {/* The Pyramid Pointer Arrow 
        - Rotated 45 degrees to look like a pyramid pointing up
        - Shifts horizontally using smooth transitions based on activeMenu
      */}
      <div 
        className={cn(
          "absolute -top-2 w-4 h-4 bg-white border-t border-l rotate-45 transition-all duration-300 ease-out -translate-x-1/2",
          activeMenu ? arrowPositionClasses[activeMenu] : "left-1/2"
        )} 
      />

      {/* Main Content Card Container */}
      <div className='bg-white rounded-3xl border shadow-2xl p-6 relative z-10'>
        <div key={activeMenu} className='animate-in fade-in duration-200'>
          {activeMenu === "services" && <ServicesMenu />}

          {activeMenu === "resources" && <ResourcesMenu />}

          {activeMenu === "language" && (
            <LanguageMenu
              currentLocale={currentLocale}
              switchLanguage={switchLanguage}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MegaMenu