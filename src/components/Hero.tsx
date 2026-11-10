import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Sparkles, Heart, Film, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'

export const Hero: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden">
      {/* Decorative luxury frame */}
      <div className="absolute inset-x-8 inset-y-12 border border-[#E3D8C6]/50 rounded-[2.5rem] pointer-events-none hidden md:block" />
      <div className="absolute inset-x-10 inset-y-14 border border-[#E3D8C6]/25 rounded-[2.2rem] pointer-events-none hidden md:block" />

      {/* Floating subtle sparkles */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[12%] text-[#C5A059] hidden lg:block"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <motion.div
        animate={{
          y: [8, -8, 8],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[14%] text-[#C5A059] hidden lg:block"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Intro Tag with Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <Badge variant="gold" className="shadow-xs">
            <Heart className="w-3 h-3 fill-current" />
            Traditional & White Wedding
          </Badge>
          <Badge variant="champagne" className="shadow-xs font-semibold">
            <Sparkles className="w-3 h-3 text-[#AA7C11]" />
            Theme: #JustByGrace
          </Badge>
        </motion.div>

        {/* Featured Portrait of Julius & Temi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mb-6"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] via-[#FAF8F5] to-[#AA7C11] shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-[#FAF8F5]">
              <img
                src="/media/photos/hero-portrait.jpg"
                alt="Julius & Temi"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white/95 px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow-sm text-[11px] font-serif text-[#7A5B18] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#AA7C11]" />
            Julius & Temi
          </div>
        </motion.div>

        {/* Main Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#2C2724] tracking-tight leading-[1.1]">
            Julius <span className="gold-gradient-text italic font-light">&</span> Temi
          </h1>
        </motion.div>

        {/* Exact User Phrasing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-xl sm:text-2xl text-[#6B5E51] mb-8 max-w-2xl leading-relaxed"
        >
          Request the pleasure of your company as we celebrate our holy matrimony and lifelong devotion.
        </motion.p>

        {/* Date & Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-3.5 px-6 bg-white/80 backdrop-blur-md rounded-full border border-[#E9DFCE] text-sm text-[#4E443A] shadow-sm mb-10"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#AA7C11]" />
            <span className="font-semibold tracking-wide">Saturday, 27th February 2027 • 10:00 AM</span>
          </div>
          <span className="hidden sm:inline text-[#D4C4AF]">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#AA7C11]" />
            <span>Ijegun, Lagos, Nigeria</span>
          </div>
        </motion.div>

        {/* Action Buttons (RSVP removed, replaced with Moments & Schedule) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('#media-showcase')}
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Film className="w-4 h-4" />
            Watch Photos & Videos
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('#schedule')}
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span>Wedding Schedule</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer text-[#8C7D6F] hover:text-[#5B4F43] transition-colors"
          onClick={() => scrollTo('#countdown')}
        >
          <span className="text-xs uppercase tracking-widest">Scroll To Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-4 h-7 border border-[#AA7C11]/50 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-[#AA7C11] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
