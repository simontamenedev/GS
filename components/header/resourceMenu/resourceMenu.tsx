import { companyMenus, learnMenus, serviceMenus } from "@/constants/resource"
import { cn } from "@/utils/utils"
import { File, Users, Star, Building2, BookOpen, Briefcase, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



function ResourcesMenu() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Resources Column */}
        <div>
          <h2 className='text-2xl font-bold mb-6 text-gray-900'>Resources</h2>
          <nav className="space-y-4">
            {serviceMenus.map((menu) => (
              <Link 
                key={menu.id}
                href={menu.href}
                className={cn(
                  'flex items-start gap-3 p-3 rounded-lg transition-all duration-200',
                  'hover:bg-gray-50 hover:shadow-sm group'
                )}
              >
                <div className={cn(
                  'flex-shrink-0 w-10 h-10 rounded-full border-2 border-green-100',
                  'flex items-center justify-center bg-green-50/50',
                  'group-hover:border-green-300 group-hover:bg-green-100/50',
                  'transition-all duration-200'
                )}>
                  <menu.icon className={cn(
                    'w-5 h-5 text-green-600',
                    'group-hover:text-green-700'
                  )}/>
                </div>
                <div className={cn('flex flex-col min-w-0')}>
                  <h3 className='text-base font-semibold text-gray-900 group-hover:text-green-700 transition-colors'>
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

        {/* Learn Column */}
        <div>
          <h2 className='text-2xl font-bold mb-6 text-gray-900'>Learn</h2>
          <nav className="space-y-4">
            {learnMenus.map((menu) => (
              <Link 
                key={menu.id}
                href={menu.href}
                className={cn(
                  'flex items-start gap-3 p-3 rounded-lg transition-all duration-200',
                  'hover:bg-gray-50 hover:shadow-sm group'
                )}
              >
                <div className={cn(
                  'flex-shrink-0 w-10 h-10 rounded-full border-2 border-blue-100',
                  'flex items-center justify-center bg-blue-50/50',
                  'group-hover:border-blue-300 group-hover:bg-blue-100/50',
                  'transition-all duration-200'
                )}>
                  <menu.icon className={cn(
                    'w-5 h-5 text-blue-600',
                    'group-hover:text-blue-700'
                  )}/>
                </div>
                <div className={cn('flex flex-col min-w-0')}>
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

        {/* Company Column */}
        <div>
          <h2 className='text-2xl font-bold mb-6 text-gray-900'>Company</h2>
          <nav className="space-y-4">
            {companyMenus.map((menu) => (
              <Link 
                key={menu.id}
                href={menu.href}
                className={cn(
                  'flex items-start gap-3 p-3 rounded-lg transition-all duration-200',
                  'hover:bg-gray-50 hover:shadow-sm group'
                )}
              >
                <div className={cn(
                  'flex-shrink-0 w-10 h-10 rounded-full border-2 border-purple-100',
                  'flex items-center justify-center bg-purple-50/50',
                  'group-hover:border-purple-300 group-hover:bg-purple-100/50',
                  'transition-all duration-200'
                )}>
                  <menu.icon className={cn(
                    'w-5 h-5 text-purple-600',
                    'group-hover:text-purple-700'
                  )}/>
                </div>
                <div className={cn('flex flex-col min-w-0')}>
                  <h3 className='text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors'>
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

        {/* Logo Column */}
        <div className={cn(
          "flex flex-col items-center justify-center",
          "bg-gradient-to-br from-gray-50 to-gray-100/50",
          "rounded-2xl p-8 border border-gray-200/50"
        )}>
          <div className="relative w-32 h-32 mb-4">
            <Image 
              src='/gs.png' 
              alt='Company Logo' 
              width={128} 
              height={128}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-500 text-center">
            GS Mining and Trading PLC,<br />
            Trading PLC
          </p>
        </div>
      </div>
  )
}

export default ResourcesMenu