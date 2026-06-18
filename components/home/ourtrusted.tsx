"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { cn } from "@/utils/utils";
import { partners } from "@/constants/partners";
import { useTranslations } from "next-intl";

const OurTrusted = () => {
   const t = useTranslations("TrustedBy");
  const duplicatedPartners = [...partners, ...partners];

  const x = useMotionValue(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const speed = 180; // pixels/sec

    let next = x.get() - (speed * delta) / 1000;

    const width = marqueeRef.current?.scrollWidth ?? 0;
    const resetPoint = width / 2;

    if (Math.abs(next) >= resetPoint) {
      next += resetPoint;
    }

    x.set(next);
  });

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* Trusted By Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
             {t("title")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 sm:mt-4 rounded-full" />
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 lg:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10" />

          <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">

            <motion.div
              ref={marqueeRef}
              style={{ x }}
              className="flex w-max gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-3 sm:py-4 md:py-6 lg:py-8"
            >
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
                    "px-2 sm:px-3 md:px-4 py-1.5 sm:py-2",
                    "min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px]",
                    "h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px]"
                  )}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className={cn(
                      "object-contain max-w-full max-h-full",
                      "w-auto h-auto",
                      partner.width > 150 ? "w-20 sm:w-24 md:w-28 lg:w-32" : 
                      partner.width > 100 ? "w-16 sm:w-20 md:w-24 lg:w-28" : 
                      "w-12 sm:w-16 md:w-20 lg:w-24"
                    )}
                  />
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrusted;