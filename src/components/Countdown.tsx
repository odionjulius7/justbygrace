import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export const Countdown: React.FC = () => {
  // 10:00 AM on 27th February 2027
  const targetDate = new Date(2027, 1, 27, 10, 0, 0)

  const calculateTimeLeft = () => {
    const diff = targetDate.getTime() - new Date().getTime()
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section id="countdown" className="py-16 px-4 bg-[#F5EFE6]/60 border-y border-[#EAE1D2]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-3 text-[#99783D]"
        >
          <Clock className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-semibold">Counting Down The Moments</span>
        </motion.div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2724] mb-2 font-normal">
          Until Julius & Temi Say <span className="italic font-light">"I Do"</span>
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#8A7968] mb-8 font-medium">
          Saturday, 27th February 2027 • 10:00 AM • Ijegun, Lagos
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-[#E9DFCE] shadow-sm flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <span className="font-serif text-4xl sm:text-5xl font-medium text-[#2C2724] tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#8F7E6D] mt-2 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
