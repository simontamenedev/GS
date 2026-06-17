import React from 'react'
import { cn } from "@/utils/utils"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      {/* Main Footer Content */}
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-gray-500 bg-clip-text text-transparent">
              GS Mining and Trading PLC
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building amazing web experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Subscribe</h4>
            <p className="text-gray-400 text-sm">
              Get the latest updates and news.
            </p>
            <div className="flex flex-col  gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "flex-1 px-4 py-2 rounded-lg",
                  "bg-gray-800 border border-gray-700",
                  "text-white placeholder-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent",
                  "transition-all duration-300"
                )}
              />
              <button
                className={cn(
                  "px-4 py-2 rounded-lg",
                  "bg-gradient-to-r from-green-500 to-gray-600",
                  "text-white font-medium",
                  "hover:from-green-600 hover:to-gray-700",
                  "transform hover:scale-105",
                  "transition-all duration-300",
                  "shadow-lg hover:shadow-green-500/25"
                )}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated decorative gradient bar at top */}
    </footer>
  )
}

export default Footer