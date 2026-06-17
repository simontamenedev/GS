import {
  importExportMenus,
  miningMenus,
  technologiesMenus,
} from "@/constants/serviceMenus"
import { cn } from "@/utils/utils"
import {
  Cpu,
  Database,
  Cloud,
  Shield,
  Code2,
  Layout,
  Pickaxe,
  Gem,
  Drill,
  Truck,
  Ship,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function ServicesMenu() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
      {/* Technologies Column */}
      <div>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Technologies</h2>
        <nav className='space-y-3'>
          {technologiesMenus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.href}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg transition-all duration-200",
                "hover:bg-blue-50 hover:shadow-sm group",
              )}
            >
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full border-2 border-blue-100",
                  "flex items-center justify-center bg-blue-50/50",
                  "group-hover:border-blue-300 group-hover:bg-blue-100/50",
                  "transition-all duration-200",
                )}
              >
                <menu.icon
                  className={cn(
                    "w-5 h-5 text-blue-600",
                    "group-hover:text-blue-700",
                  )}
                />
              </div>
              <div className={cn("flex flex-col min-w-0")}>
                <h3 className='text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors'>
                  {menu.title}
                </h3>
                <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
                  {menu.description}
                </p>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mining Column */}
      <div>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Mining</h2>
        <nav className='space-y-3'>
          {miningMenus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.href}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg transition-all duration-200",
                "hover:bg-amber-50 hover:shadow-sm group",
              )}
            >
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full border-2 border-amber-100",
                  "flex items-center justify-center bg-amber-50/50",
                  "group-hover:border-amber-300 group-hover:bg-amber-100/50",
                  "transition-all duration-200",
                )}
              >
                <menu.icon
                  className={cn(
                    "w-5 h-5 text-amber-600",
                    "group-hover:text-amber-700",
                  )}
                />
              </div>
              <div className={cn("flex flex-col min-w-0")}>
                <h3 className='text-base font-semibold text-gray-900 group-hover:text-amber-700 transition-colors'>
                  {menu.title}
                </h3>
                <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
                  {menu.description}
                </p>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Import & Export Column */}
      <div>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>
          Import & Export
        </h2>
        <nav className='space-y-3'>
          {importExportMenus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.href}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg transition-all duration-200",
                "hover:bg-emerald-50 hover:shadow-sm group",
              )}
            >
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full border-2 border-emerald-100",
                  "flex items-center justify-center bg-emerald-50/50",
                  "group-hover:border-emerald-300 group-hover:bg-emerald-100/50",
                  "transition-all duration-200",
                )}
              >
                <menu.icon
                  className={cn(
                    "w-5 h-5 text-emerald-600",
                    "group-hover:text-emerald-700",
                  )}
                />
              </div>
              <div className={cn("flex flex-col min-w-0")}>
                <h3 className='text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors'>
                  {menu.title}
                </h3>
                <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
                  {menu.description}
                </p>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={cn(
          "flex flex-col items-center justify-center",
          "bg-gradient-to-br from-gray-50 to-gray-100/50",
          "rounded-2xl p-8 border border-gray-200/50",
        )}
      >
        <div className='relative w-32 h-32 mb-4'>
          <Image
            src='/gs.png'
            alt='Company Logo'
            width={128}
            height={128}
            className='object-contain'
          />
        </div>
        <p className='text-sm text-gray-500 text-center'>
          GS Mining and Trading PLC,
          <br />
          Trading PLC
        </p>
      </div>
    </div>
  )
}

export default ServicesMenu
