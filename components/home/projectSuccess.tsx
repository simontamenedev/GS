"use client"
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { cn } from "@/utils/utils"

const ProjectSuccess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { 
      target: 500, 
      label: "Projects Delivered",
      suffix: "+",
    },
    { 
      target: 98, 
      label: "Client Satisfaction",
      suffix: "%",
    },
    { 
      target: 50, 
      label: "Expert Engineers",
      suffix: "+",
    },
  ]

  // State for all counts
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasStarted, setHasStarted] = useState(false)

  // Counting animation - runs once when in view
  useEffect(() => {
    if (!isInView || hasStarted) return
    setHasStarted(true)

    const duration = 2000 // 2 seconds
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease out cubic - starts fast, ends slow
      const eased = 1 - Math.pow(1 - progress, 3)
      
      // Update all counts
      const newCounts = stats.map(stat => 
        Math.floor(eased * stat.target)
      )
      setCounts(newCounts)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Final values
        setCounts(stats.map(stat => stat.target))
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, hasStarted])

  // Fixed variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative py-2 overflow-hidden"
    >
      {/* Fire Fog Effect - Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block">
            <span className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-wider bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full">
              Our Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Measurable{' '}
            <span className="bg-gradient-to-r from-green-400 via-amber-400 to-red-400 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className={cn(
                "relative overflow-hidden",
                "bg-green-500/90",
                "backdrop-blur-xl",
                "border border-gray-700/50",
                "rounded-2xl p-6 md:p-8",
                "shadow-2xl shadow-green-500/5",
                "transition-all duration-300",
                "hover:border-green-500/30",
                "hover:shadow-green-500/20",
                "h-full flex flex-col items-center justify-center text-center"
              )}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl" />
                </div>

                {/* Number with counting animation */}
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">
                  {counts[index]}
                  {stat.suffix}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectSuccess