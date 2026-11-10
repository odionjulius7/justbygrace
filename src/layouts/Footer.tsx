import React from 'react'
import { Heart, Sparkles, MapPin, Calendar } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#211E1C] text-[#D8CFBE] pt-16 pb-12 border-t border-[#3A3530]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Monogram */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full border border-[#AA7C11] flex items-center justify-center text-[#DFBA73] font-serif text-2xl font-semibold">
            J&T
          </div>
        </div>

        <h3 className="font-serif text-3xl md:text-4xl text-[#F5EFE6] tracking-wide mb-1">
          Julius & Temi
        </h3>
        <p className="text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-3">
          Traditional & White Wedding • Theme: #JustByGrace
        </p>
        <p className="max-w-md mx-auto text-sm text-[#A89F90] italic font-serif mb-8">
          "And now these three remain: faith, hope and love. But the greatest of these is love." — 1 Corinthians 13:13
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#BDB2A2] mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            27th of February 2027 • 10:00 AM
          </span>
          <span className="text-[#645A4D]">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            Ijegun, Lagos, Nigeria
          </span>
          <span className="text-[#645A4D]">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            #JuliusAndTemi2027 • #JustByGrace
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#AA7C11] mb-10">
          <a href="#support" className="hover:underline">Support Julius & Temi (GTBank & Opay)</a>
          <span className="text-[#645A4D]">•</span>
          <a href="#special-guest" className="hover:underline">Special Guest Area (odionjulius7@gmail.com)</a>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent mx-auto mb-8" />

        <p className="text-xs text-[#807668] flex items-center justify-center gap-1">
          Designed with <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-current" /> for family & friends.
        </p>
        <p className="text-[11px] text-[#635B50] mt-1">
          © 2027 Julius & Temi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
