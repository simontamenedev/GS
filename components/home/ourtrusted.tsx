import { cn } from "@/utils/utils"
import { partners } from '@/constants/partners'

const OurTrusted = () => {


  // Triple duplicate for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section - Improved */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider bg-green-100 dark:bg-green-900/30 px-4 py-1.5 rounded-full">
              Our Partners
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
        </div>

        {/* Sliding Logos - Improved */}
        <div className="relative">
          {/* Gradient overlays for fade effect - More visible */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />

          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="flex gap-6 sm:gap-8 md:gap-12 animate-marquee py-4 sm:py-6 md:py-8">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-center shrink-0",
                    "transition-all duration-300",
                    "hover:-translate-y-2 hover:scale-110",
                    "cursor-pointer group",
                    "rounded-lg bg-white dark:bg-gray-800",
                    "shadow-sm hover:shadow-xl",
                    "px-3 sm:px-4 py-2"
                  )}
                  style={{
                    width: partner.width + 20,
                    height: partner.height + 20,
                    minWidth: partner.width > 150 ? 160 : 130,
                  }}
                >
                  <img
                    alt={partner.name}
                    loading="lazy"
                    width={partner.width}
                    height={partner.height}
                    decoding="async"
                    className={cn(
                      "object-contain",
                      "transition-all duration-300",
                      "grayscale-0 opacity-100",
                      "group-hover:grayscale-0",
                      "max-w-full max-h-full"
                    )}
                    style={{
                      width: partner.width,
                      height: partner.height,
                      objectFit: 'contain'
                    }}
                    src={partner.logo}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative dots */}
        
        </div>
      </div>
    </section>
  )
}

export default OurTrusted