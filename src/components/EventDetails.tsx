import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Church, Sparkles, MapPin, ExternalLink, Utensils, Music2, Award, Clock, ShieldCheck } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'

export const EventDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'traditional' | 'white'>('all')

  const ceremonies = [
    {
      type: 'traditional',
      category: 'Traditional Wedding',
      title: 'Traditional Engagement Ceremony',
      time: '10:00 AM – 1:00 PM',
      icon: Award,
      location: 'Ijegun, Lagos',
      address: 'Ijegun, Lagos State',
      description:
        'A vibrant cultural celebration featuring the welcoming of families, proposal letter reading, Alaga performances, presentation of the bride (Eru Iyawo), and elders’ blessings.',
      highlight: 'Arrival of In-laws: 10:00 AM prompt',
      dressCodeNote: 'Strictly provided on each official invite card',
    },
    {
      type: 'white',
      category: 'White Wedding',
      title: 'Holy Matrimony & Church Blessing',
      time: '1:30 PM – 3:30 PM',
      icon: Church,
      location: 'Ijegun, Lagos',
      address: 'Ijegun, Lagos State',
      description:
        'Solemn matrimonial service with processional hymns, sacred exchange of vows, blessing of rings, signing of the wedding covenant, and communion of grace.',
      highlight: 'Processional begins at 1:30 PM',
      dressCodeNote: 'Strictly provided on each official invite card',
    },
    {
      type: 'white',
      category: 'White Wedding',
      title: 'Grand Reception & Banquet Feasting',
      time: '4:00 PM – 8:00 PM',
      icon: Utensils,
      location: 'Ijegun, Lagos',
      address: 'Ijegun, Lagos State',
      description:
        'An unforgettable celebration of love and fellowship. Banquet dining, royal couple entrance, cutting of the wedding cake, heartfelt family toasts, and live musical orchestra.',
      highlight: 'Toast & First Dance: 4:45 PM',
      dressCodeNote: 'Strictly provided on each official invite card',
    },
    {
      type: 'white',
      category: 'Evening Celebration',
      title: 'After-Party & Praise Jam',
      time: '7:30 PM – Late',
      icon: Music2,
      location: 'Ijegun, Lagos',
      address: 'Ijegun, Lagos State',
      description:
        'High-energy dancing, DJ mixes, photo booth memories, and continuous thanksgiving as we celebrate Julius & Temi under the night sky.',
      highlight: 'Sparkler Send-off at 10:00 PM',
      dressCodeNote: 'Strictly provided on each official invite card',
    },
  ]

  const filteredCeremonies =
    activeTab === 'all'
      ? ceremonies
      : ceremonies.filter((c) => c.type === activeTab)

  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFE6]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="gold">Traditional & White Wedding</Badge>
            <Badge variant="champagne">Theme: JustByGrace</Badge>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2724] font-normal tracking-tight mb-4">
            Order of Celebrations
          </h2>
          <p className="max-w-2xl mx-auto text-[#6D6154] text-base font-light">
            Saturday, 27th of February 2027 • Starting at 10:00 AM prompt • Ijegun, Lagos.
          </p>

          {/* Filter Tab Selector */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#C5A059] text-white shadow-md'
                  : 'bg-white/80 text-[#5C5144] hover:bg-[#EDE5D5] border border-[#EBE3D3]'
              }`}
            >
              All Ceremonies
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'traditional'
                  ? 'bg-[#1B4D3E] text-white shadow-md'
                  : 'bg-white/80 text-[#5C5144] hover:bg-[#EDE5D5] border border-[#EBE3D3]'
              }`}
            >
              Traditional Wedding
            </button>
            <button
              onClick={() => setActiveTab('white')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'white'
                  ? 'bg-[#99783D] text-white shadow-md'
                  : 'bg-white/80 text-[#5C5144] hover:bg-[#EDE5D5] border border-[#EBE3D3]'
              }`}
            >
              White Wedding & Reception
            </button>
          </div>
        </div>

        {/* Schedule Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredCeremonies.map((event, index) => {
              const Icon = event.icon
              const isTraditional = event.type === 'traditional'

              return (
                <motion.div
                  layout
                  key={event.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card
                    className={`h-full flex flex-col justify-between p-8 border transition-all ${
                      isTraditional
                        ? 'border-[#1B4D3E]/30 bg-gradient-to-br from-white via-white to-[#F0F7F3]'
                        : 'border-[#C5A059]/40 bg-gradient-to-br from-white via-white to-[#FAF6EE]'
                    }`}
                  >
                    <div>
                      {/* Top Header Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full ${
                            isTraditional
                              ? 'bg-[#1B4D3E]/10 text-[#1B4D3E]'
                              : 'bg-[#C5A059]/15 text-[#8F6A1E]'
                          }`}
                        >
                          {event.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#7A6C5B] font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#AA7C11]" />
                          {event.time}
                        </span>
                      </div>

                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${
                            isTraditional
                              ? 'bg-[#E7F3EC] text-[#1B4D3E] border border-[#C5E0D0]'
                              : 'bg-[#F7F2E7] text-[#99783D] border border-[#E8DEC9]'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl text-[#2C2724] font-medium leading-tight">
                            {event.title}
                          </h3>
                          <p className="text-xs text-[#8F7E6D] flex items-center gap-1.5 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-[#AA7C11] shrink-0" />
                            <span>{event.location}</span>
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-[#5C5144] leading-relaxed mb-6">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#EDE5D3] space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[#7A6C5B]">
                        <span className="font-medium italic">{event.highlight}</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                      </div>
                      <p className="text-[11px] text-[#8C7A68]">
                        <strong className="text-[#594B3C]">Attire:</strong> {event.dressCodeNote}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dress Code & Venue Highlight Cards */}
        <div id="details" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dress Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-white/95 border-2 border-[#AA7C11]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#99783D] font-semibold">
                    Attire Guidance
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                    Strict for Invites
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-[#2C2724] font-medium mb-3">
                  Dress Code Information
                </h3>

                <div className="p-6 rounded-2xl bg-[#F8F5EE] border border-[#E8DFCF] my-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#AA7C11] shrink-0 mt-0.5" />
                    <p className="text-base font-serif text-[#2C2724] font-semibold leading-relaxed">
                      This dress code is strictly provided on each official invite card, and all invited guests are strictly required to know and adhere to it.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#6A5E51] leading-relaxed">
                  To maintain privacy and exclusivity for our invited guests, all dress codes, color selections, and attire details are disclosed exclusively on your personal invitation card.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EDE5D3] text-xs text-[#8C7A68] italic">
                Admittance is reserved strictly for guests in official invitation attire.
              </div>
            </Card>
          </motion.div>

          {/* Venue & Directions Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-white/95 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#99783D] font-semibold block mb-2">
                  Destination & Logistics
                </span>
                <h3 className="font-serif text-3xl text-[#2C2724] font-medium mb-3">
                  Ijegun, Lagos, Nigeria
                </h3>
                <p className="text-sm text-[#5C5144] leading-relaxed mb-4">
                  Both traditional and church matrimonial ceremonies take place within designated event premises in Ijegun, Lagos. To ensure security and privacy, exact hall addresses and gate protocol passes are provided strictly on each official invite card.
                </p>
                <div className="space-y-2 text-xs text-[#716454] mb-6">
                  <p>• Secured private car parking with uniform security protocol.</p>
                  <p>• Air-conditioned grand hall with dedicated dressing rooms.</p>
                  <p>• Standby sound engineering & backup power generators.</p>
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://maps.google.com/?q=Ijegun+Lagos', '_blank')}
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open Ijegun Map & Directions
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
