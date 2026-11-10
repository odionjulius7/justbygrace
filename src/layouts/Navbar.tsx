import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Gift, Calendar } from 'lucide-react'
import { Button } from '../components/ui/Button'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Moments & Film', href: '#media-showcase' },
    { label: 'Support & Gifts', href: '#support' },
    { label: 'Special Guest', href: '#special-guest' },
    { label: 'FAQ', href: '#faq' },
  ]

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#EAE3D2]/70 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer text-decoration-none"
        >
          <span className="w-9 h-9 rounded-full border border-[#C5A059] flex items-center justify-center text-[#99783D] font-serif font-semibold text-sm group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
            J&T
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider font-semibold text-[#2C2724] group-hover:text-[#99783D] transition-colors">
              Julius & Temi
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#8F7E6D]">
              #JustByGrace • 27.02.2027
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-[#4A4036] hover:text-[#AA7C11] transition-colors tracking-wide cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Button: Support Couple */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => scrollTo('#support')}
            className="flex items-center gap-1.5"
          >
            <Gift className="w-3.5 h-3.5" />
            Support Couple
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#4A4036] hover:bg-[#EFE9DC]/60 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF8F5]/95 backdrop-blur-lg border-b border-[#EAE3D2] px-6 py-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-2 text-base font-medium text-[#4A4036] hover:text-[#AA7C11] border-b border-[#F0EAE0]"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="md"
                onClick={() => scrollTo('#support')}
                className="w-full mt-2 flex items-center justify-center gap-2"
              >
                <Gift className="w-4 h-4" />
                Support Julius & Temi
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => scrollTo('#special-guest')}
                className="w-full flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Special Guest Booking
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
