import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Gift,
  Copy,
  Check,
  CreditCard,
  Mail,
  Crown,
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

export const WeddingSupport: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const bankAccounts = [
    {
      owner: 'Julius',
      bankName: 'GTBank (Guaranty Trust Bank)',
      accountNumber: '0120846806',
      badge: 'Groom’s Account',
      gradient: 'from-[#1A1816] via-[#2A241F] to-[#141210]',
      accentColor: '#D4AF37',
    },
    {
      owner: 'Temi',
      bankName: 'Opay',
      accountNumber: '7039546016',
      badge: 'Bride’s Account',
      gradient: 'from-[#1C241E] via-[#233527] to-[#121B14]',
      accentColor: '#2EAE68',
    },
  ]

  const handleCopyAccount = (accountNumber: string, id: string) => {
    navigator.clipboard.writeText(accountNumber)
    setCopiedAccount(id)
    setTimeout(() => {
      setCopiedAccount(null)
    }, 2500)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('odionjulius7@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => {
      setCopiedEmail(false)
    }, 2500)
  }

  return (
    <section
      id="support"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="gold">
              <Gift className="w-3.5 h-3.5" />
              Gifts & Blessings
            </Badge>
            <Badge variant="champagne">Theme: #JustByGrace</Badge>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2724] font-normal tracking-tight mb-4">
            Support Julius & Temi’s Union
          </h2>
          <p className="max-w-xl mx-auto text-[#6D6154] text-base font-light leading-relaxed">
            Your love, continuous prayers, and warm presence are truly our greatest gifts. For family and friends wishing to support and bless our new journey with a monetary gift, you may send your contributions directly to the accounts below.
          </p>
        </div>

        {/* Bank Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {bankAccounts.map((account) => {
            const isCopied = copiedAccount === account.owner

            return (
              <motion.div
                key={account.owner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div
                  className={`rounded-3xl p-8 text-white bg-gradient-to-br ${account.gradient} border border-[#D4C4AF]/30 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[250px]`}
                >
                  {/* Decorative background glow */}
                  <div
                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: account.accentColor }}
                  />

                  {/* Top Bar: Bank Name & Badge */}
                  <div className="flex items-center justify-between mb-6 z-10">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-[#DFBA73]" />
                      <span className="font-serif text-lg tracking-wide text-[#F3EFE8]">
                        {account.bankName}
                      </span>
                    </div>
                    <span className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E6DCBF]">
                      {account.badge}
                    </span>
                  </div>

                  {/* Middle: Account Number & Copy Action */}
                  <div className="z-10 my-4">
                    <span className="text-[11px] uppercase tracking-widest text-[#B5A898] block mb-1">
                      Account Number
                    </span>
                    <div className="flex items-center justify-between gap-3 bg-black/30 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                      <span className="font-mono text-2xl sm:text-3xl font-bold tracking-widest text-[#FFF8EB] select-all">
                        {account.accountNumber}
                      </span>
                      <button
                        onClick={() =>
                          handleCopyAccount(account.accountNumber, account.owner)
                        }
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500 text-white'
                            : 'bg-[#C5A059] hover:bg-[#AA7C11] text-white shadow-sm'
                        }`}
                        aria-label={`Copy ${account.owner}'s account number`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Bottom: Account Name & Blessing */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 z-10 text-xs text-[#D8CFBE]">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A19586] block">
                        Account Name
                      </span>
                      <span className="font-serif text-base text-white">
                        {account.owner}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#DFBA73]">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[11px]">#JustByGrace</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Special Guest Area (Underneath) */}
        <motion.div
          id="special-guest"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-8 sm:p-10 bg-white/95 border-2 border-[#C5A059]/40 shadow-xl rounded-3xl relative overflow-hidden">
            {/* Gold banner / watermarked corner */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#C5A059]/15 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#EBE3D3]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F6F0E3] border border-[#DFCFA8] flex items-center justify-center text-[#AA7C11] shrink-0 shadow-sm">
                  <Crown className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="gold" className="text-[10px]">
                      VIP & Protocols
                    </Badge>
                    <span className="text-xs text-[#8A7968] flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#AA7C11]" />
                      Reserved Seating
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#2C2724] font-medium">
                    Special Guest Area
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs font-serif italic text-[#7C6C5C]">
                  Personal Bookings & Protocol Requests
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
              <div className="lg:col-span-2 space-y-3">
                <p className="text-sm text-[#5C5144] leading-relaxed">
                  As our wedding in Ijegun is an intimate, personally seated gathering, seating in the <strong className="text-[#2C2724]">Special Guest Area</strong> is strictly verified and arranged directly by the couple.
                </p>
                <p className="text-sm text-[#5C5144] leading-relaxed">
                  This dress code is strictly provided on each official invite card, and all invited guests are strictly required to know and adhere to it.
                </p>
                <p className="text-sm text-[#5C5144] leading-relaxed">
                  If you have been directed here to request or confirm a <strong className="text-[#2C2724]">Special Guest Pass, VIP Seating, or Dignitary Protocol Accommodation</strong>, please reach out directly using the official booking email below:
                </p>

                {/* Email Callout Box */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFC8] mt-4">
                  <div className="flex items-center gap-2 text-sm text-[#3E352B] font-semibold">
                    <Mail className="w-4 h-4 text-[#AA7C11]" />
                    <span className="font-mono text-base text-[#1F1C19]">
                      odionjulius7@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:ml-auto">
                    <button
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#DDD3C2] text-xs text-[#5C5144] hover:bg-[#F2ECE1] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col justify-center items-start lg:items-end">
                <Button
                  size="lg"
                  onClick={() =>
                    (window.location.href =
                      'mailto:odionjulius7@gmail.com?subject=Special%20Guest%20Reservation%20Request%20-%20Julius%20%26%20Temi%20Wedding&body=Dear%20Julius%20%26%20Temi%2C%0A%0AI%20am%20writing%20to%20request%2Fconfirm%20my%20Special%20Guest%20Area%20reservation%20for%20the%20wedding%20on%20February%2027th%2C%202027%20in%20Ijegun.%0A%0AFull%20Name%3A%20%0ANumber%20of%20Seats%3A%20%0APhone%20Number%3A%20%0ANotes%2FSpecial%20Arrangements%3A%20')
                  }
                  className="w-full sm:w-auto shadow-md flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email to Book Special Guest</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <span className="text-[11px] text-[#8F7E6D] mt-2 block text-center lg:text-right">
                  Strictly for Special Guest & Protocol reservations
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
