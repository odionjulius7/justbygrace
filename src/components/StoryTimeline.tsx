import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Compass, Sparkles, Gem } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'

export const StoryTimeline: React.FC = () => {
  const milestones = [
    {
      year: 'April 2022',
      title: 'When Paths First Crossed',
      description:
        'A serendipitous meeting that turned into hours of effortless laughter, shared values, and conversations on faith and purpose. We knew something extraordinary had begun.',
      icon: Coffee,
      tag: 'First Chapter',
    },
    {
      year: 'December 2023',
      title: 'Growing Together Through Every Season',
      description:
        'From heartfelt prayers to road trips and celebrating each other’s victories, our friendship deepened into a love anchored in mutual respect and grace.',
      icon: Compass,
      tag: 'Deepening Bond',
    },
    {
      year: 'November 2025',
      title: 'The Question of a Lifetime',
      description:
        'With family blessings and joyous hearts, Julius asked Temi to spend forever together. With pure joy and thanksgiving, she said yes!',
      icon: Gem,
      tag: 'The Proposal',
    },
    {
      year: 'February 2027',
      title: 'Traditional & White Matrimony in Ijegun',
      description:
        'Gathering with our families and beloved friends in Ijegun to celebrate our traditional engagement and holy church matrimony — anchored in our lifelong theme, Just By Grace.',
      icon: Sparkles,
      tag: 'The Wedding Day',
    },
  ]

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="champagne" className="mb-3">
          Our Journey
        </Badge>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2724] font-normal tracking-tight mb-4">
          How Love Wrote Julius & Temi’s Story
        </h2>
        <p className="max-w-xl mx-auto text-[#6D6154] text-base font-light">
          Every moment, every smile, and every step of our journey has been an undeniable testament to God’s grace.
        </p>
      </div>

      <div className="relative">
        {/* Center line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D9CCB8] to-transparent -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {milestones.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <Card className="hover:border-[#C5A059]/40 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-widest text-[#99783D] font-semibold">
                        {item.year}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F3EFE6] text-[#716556]">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#2C2724] mb-2 font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#61564A] leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>

                {/* Center Node */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF8F5] border-2 border-[#C5A059] shadow-md text-[#99783D]">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Empty space for symmetric balance */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Theme Meaning & Monogram Breakdown Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <Card className="p-8 sm:p-10 bg-gradient-to-br from-white via-[#FAF7F0] to-[#F3EDE2] border-2 border-[#D4AF37]/40 shadow-xl rounded-3xl text-center relative overflow-hidden">
          <div className="flex justify-center mb-4">
            <Badge variant="gold">
              <Sparkles className="w-3.5 h-3.5" />
              The Heart of Our Theme
            </Badge>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2724] font-medium mb-4">
            The Meaning Behind <span className="gold-gradient-text font-semibold">#JustByGrace</span>
          </h3>

          <p className="max-w-2xl mx-auto text-[#594B3C] text-base leading-relaxed mb-8">
            The theme <strong>"JustByGrace"</strong> celebrates God’s faithfulness in orchestrating Julius and Temi’s love story. We believe every blessing, growth, and joy in our union is made whole through divine grace.
          </p>

          {/* Acronym Visual Breakdown */}
          <div className="max-w-xl mx-auto p-6 rounded-2xl bg-white/95 border border-[#E5DAC6] shadow-sm mb-6">
            <p className="text-xs uppercase tracking-widest text-[#8F7E6D] font-semibold mb-5">
              Names Intertwined in Grace
            </p>
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap font-serif text-2xl sm:text-3xl font-medium text-[#2C2724]">
              <div className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-xl bg-[#F6F0E2] border border-[#D4AF37] text-[#99783D] flex items-center justify-center shadow-xs font-bold text-2xl">
                  J
                </span>
                <span className="text-[11px] font-sans text-[#786958] mt-1.5 uppercase tracking-wider font-semibold">
                  Julius
                </span>
              </div>

              <span className="text-[#C5A059] font-light text-xl">+</span>

              <div className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-xl bg-[#F6F0E2] border border-[#D4AF37] text-[#99783D] flex items-center justify-center shadow-xs font-bold text-2xl">
                  U & S
                </span>
                <span className="text-[11px] font-sans text-[#786958] mt-1.5 uppercase tracking-wider font-semibold">
                  in Julius
                </span>
              </div>

              <span className="text-[#C5A059] font-light text-xl">+</span>

              <div className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-xl bg-[#E8F4EE] border border-[#1B4D3E] text-[#1B4D3E] flex items-center justify-center shadow-xs font-bold text-2xl">
                  T
                </span>
                <span className="text-[11px] font-sans text-[#1B4D3E] mt-1.5 uppercase tracking-wider font-semibold">
                  Temi
                </span>
              </div>

              <span className="text-[#99783D] font-light text-xl">=</span>

              <div className="flex flex-col items-center">
                <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-white shadow-md font-serif text-xl tracking-wider">
                  JUST
                </span>
                <span className="text-[11px] font-sans text-[#AA7C11] mt-1.5 uppercase tracking-wider font-semibold">
                  By Grace
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs italic text-[#7D6E5E] max-w-lg mx-auto">
            "JustByGrace: the <strong>J</strong> is the J initial in <strong>Julius</strong>, same for <strong>u</strong> and <strong>s</strong> in Just, while the <strong>T</strong> is for the <strong>Temi</strong> initial."
          </p>
        </Card>
      </motion.div>
    </section>
  )
}
