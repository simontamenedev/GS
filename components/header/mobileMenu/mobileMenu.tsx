"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/utils/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from "next-intl"
import {
  importExportMenus,
  miningMenus,
  technologiesMenus,
} from "@/constants/serviceMenus"
import { companyMenus, learnMenus, serviceMenus } from "@/constants/resource"
import Button from "@/components/button/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const t = useTranslations("Navigation")

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div
      className={cn(
        "fixed top-[72px] left-0 right-0 bottom-0 bg-white min-h-screen  md:hidden overflow-y-auto transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className='p-4 space-y-2'>
        {/* Home Link */}
        <Link
          href='/'
          className='block py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-colors'
          onClick={onClose}
        >
          {t("home")}
        </Link>
        <Link
          href='/our-story'
          className='block py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-colors'
          onClick={onClose}
        >
          {t("ourStory")}
        </Link>
        <Link
          href='/gallery'
          className='block py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-colors'
          onClick={onClose}
        >
          {t("gallery")}
        </Link>

        {/* Services Section */}
        <div className='border-b border-gray-100'>
          {/* <button
            onClick={() => toggleSection("services")}
            className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>{t("services")}</span>
            {expandedSection === "services" ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button> */}

          {expandedSection === "services" && (
            <div className='pl-4 pb-3 space-y-3'>
              {/* Technologies */}
              <div>
                <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2'>
                  Technologies
                </h4>
                {technologiesMenus.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='flex items-start gap-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors'
                    onClick={onClose}
                  >
                    <item.icon className='w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-900'>
                        {item.title}
                      </p>
                      <p className='text-xs text-gray-500 line-clamp-1'>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mining */}
              <div>
                <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2'>
                  Mining
                </h4>
                {miningMenus.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='flex items-start gap-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors'
                    onClick={onClose}
                  >
                    <item.icon className='w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-900'>
                        {item.title}
                      </p>
                      <p className='text-xs text-gray-500 line-clamp-1'>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Import & Export */}
              <div>
                <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2'>
                  Import & Export
                </h4>
                {importExportMenus.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='flex items-start gap-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors'
                    onClick={onClose}
                  >
                    <item.icon className='w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-900'>
                        {item.title}
                      </p>
                      <p className='text-xs text-gray-500 line-clamp-1'>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Resources Section */}
        <div className='border-b border-gray-100'>
          {/* <button
            onClick={() => toggleSection("resources")}
            className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium hover:bg-gray-50 rounded-lg transition-colors"
          >
            <span>{t("resources")}</span>
            {expandedSection === "resources" ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button> */}

          {expandedSection === "resources" && (
            <div className='pl-4 pb-3 space-y-3'>
              {/* Resources */}
              <div>
                <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2'>
                  Resources
                </h4>
                {serviceMenus.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='flex items-start gap-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors'
                    onClick={onClose}
                  >
                    <item.icon className='w-5 h-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-900'>
                        {item.title}
                      </p>
                      <p className='text-xs text-gray-500 line-clamp-1'>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Learn */}
              <div>
                <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2'>
                  Learn
                </h4>
                {learnMenus.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='flex items-start gap-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors'
                    onClick={onClose}
                  >
                    <item.icon className='w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-900'>
                        {item.title}
                      </p>
                      <p className='text-xs text-gray-500 line-clamp-1'>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Company */}
              <div>
                <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2'>
                  Company
                </h4>
                {companyMenus.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='flex items-start gap-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors'
                    onClick={onClose}
                  >
                    <item.icon className='w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-900'>
                        {item.title}
                      </p>
                      <p className='text-xs text-gray-500 line-clamp-1'>
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Get In Touch Button */}
        <div className='pt-4 px-4'>
          <Button className='w-full font-bold justify-center' onClick={onClose}>
              <Link href='/contact'>{t("getInTouch")}</Link>
            </Button>
        </div>
      </div>
    </div>
  )
}
