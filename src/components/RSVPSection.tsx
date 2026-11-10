import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Heart, Sparkles, AlertCircle, Award, Church } from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import type { RSVPFormData } from '../types'

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: '',
    email: '',
    attending: 'both',
    guestCount: 1,
    dietaryRestrictions: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName.trim()) {
      setError('Please provide your full name.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.')
      return
    }

    setError(null)
    setSubmitted(true)
  }

  const attendanceLabels = {
    both: 'Both Traditional & White Wedding',
    traditional: 'Traditional Engagement Only',
    white: 'White Wedding & Reception Only',
    no: 'Regretfully Declines',
    '': '',
  }

  return (
    <section id="rsvp" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4EDE2]/60 border-t border-[#EAE0D0]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="gold">Kindly Respond</Badge>
            <Badge variant="champagne">Theme: JustByGrace</Badge>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2724] font-normal tracking-tight mb-4">
            RSVP for Julius & Temi’s Wedding
          </h2>
          <p className="max-w-md mx-auto text-[#6D6154] text-base font-light">
            Please reply by <strong className="font-medium text-[#2C2724]">January 30, 2027</strong> to reserve your seat for the traditional engagement and white wedding in Ijegun.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#E7DECD] p-8 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle watermark */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C5A059]/10 to-transparent rounded-bl-full pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#635547] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Babatunde Adeleke"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD3C2] bg-[#FAF8F5] text-sm text-[#2C2724] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#635547] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="babatunde@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD3C2] bg-[#FAF8F5] text-sm text-[#2C2724] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Attendance Selection: Traditional, White, Both, or Decline */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#635547] font-semibold mb-2">
                    Which Ceremonies Will You Attend?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'both' })}
                      className={`p-3.5 rounded-xl border text-sm font-medium flex items-center justify-start gap-2.5 transition-all cursor-pointer ${
                        formData.attending === 'both'
                          ? 'border-[#AA7C11] bg-[#F7F2E7] text-[#785915] ring-2 ring-[#AA7C11]/30 font-semibold'
                          : 'border-[#E0D5C3] bg-white text-[#65584A] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-[#AA7C11] shrink-0" />
                      <span>Both Traditional & White</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'traditional' })}
                      className={`p-3.5 rounded-xl border text-sm font-medium flex items-center justify-start gap-2.5 transition-all cursor-pointer ${
                        formData.attending === 'traditional'
                          ? 'border-[#1B4D3E] bg-[#E7F3EC] text-[#1B4D3E] ring-2 ring-[#1B4D3E]/30 font-semibold'
                          : 'border-[#E0D5C3] bg-white text-[#65584A] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <Award className="w-4 h-4 text-[#1B4D3E] shrink-0" />
                      <span>Traditional Wedding Only</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'white' })}
                      className={`p-3.5 rounded-xl border text-sm font-medium flex items-center justify-start gap-2.5 transition-all cursor-pointer ${
                        formData.attending === 'white'
                          ? 'border-[#AA7C11] bg-[#F7F2E7] text-[#785915] ring-2 ring-[#AA7C11]/30 font-semibold'
                          : 'border-[#E0D5C3] bg-white text-[#65584A] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <Church className="w-4 h-4 text-[#AA7C11] shrink-0" />
                      <span>White Wedding Only</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'no' })}
                      className={`p-3.5 rounded-xl border text-sm font-medium flex items-center justify-start gap-2.5 transition-all cursor-pointer ${
                        formData.attending === 'no'
                          ? 'border-[#948B80] bg-[#F1EFEA] text-[#3E3831] ring-2 ring-[#948B80]/30 font-semibold'
                          : 'border-[#E0D5C3] bg-white text-[#65584A] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <Heart className="w-4 h-4 text-[#948B80] shrink-0" />
                      <span>Regretfully Declines</span>
                    </button>
                  </div>
                </div>

                {/* Guest Count & Dietary (if attending) */}
                {formData.attending !== 'no' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#635547] font-semibold mb-2">
                        Total Guests Attending
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guestCount: Number(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#DDD3C2] bg-[#FAF8F5] text-sm text-[#2C2724] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                      >
                        <option value={1}>1 Guest (Myself)</option>
                        <option value={2}>2 Guests (Plus One)</option>
                        <option value={3}>3 Guests (Family)</option>
                        <option value={4}>4 Guests (Family)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#635547] font-semibold mb-2">
                        Dietary Preferences / Notes
                      </label>
                      <input
                        type="text"
                        value={formData.dietaryRestrictions}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dietaryRestrictions: e.target.value,
                          })
                        }
                        placeholder="e.g. Halal, Vegetarian, No seafood"
                        className="w-full px-4 py-3 rounded-xl border border-[#DDD3C2] bg-[#FAF8F5] text-sm text-[#2C2724] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Personal Message / Blessings */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#635547] font-semibold mb-2">
                    Warm Words of Blessing for Julius & Temi (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share a prayer or blessing for Julius & Temi as they begin #JustByGrace..."
                    className="w-full px-4 py-3 rounded-xl border border-[#DDD3C2] bg-[#FAF8F5] text-sm text-[#2C2724] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Submit RSVP Response
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#EBF5EA] border border-[#BCE2B7] flex items-center justify-center text-[#2E7D32] mb-4 shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2724] mb-3">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-[#665A4E] max-w-md mx-auto leading-relaxed mb-6">
                  {formData.attending !== 'no'
                    ? `Julius & Temi are overjoyed to celebrate ${attendanceLabels[formData.attending]} with you in Ijegun! A confirmation has been registered for ${formData.email}.`
                    : `We will miss you dearly, but thank you deeply for your prayers and warm wishes for Julius & Temi!`}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      fullName: '',
                      email: '',
                      attending: 'both',
                      guestCount: 1,
                      dietaryRestrictions: '',
                      message: '',
                    })
                  }}
                >
                  Send Another Response
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
