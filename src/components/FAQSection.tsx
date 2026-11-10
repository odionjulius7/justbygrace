import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Badge } from './ui/Badge'

interface FAQItem {
  question: string
  answer: string
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'What is the schedule between the Traditional and White Wedding?',
      answer:
        'Both celebrations take place on Saturday, 27th of February 2027 in Ijegun. The Traditional Engagement ceremony begins at 10:00 AM prompt, followed by the White Church Matrimony at 1:30 PM and the Grand Reception at 4:00 PM.',
    },
    {
      question: 'Is this wedding strictly by personal invitation?',
      answer:
        'Yes. To maintain an intimate, sacred atmosphere, Julius & Temi and their families are personally booking and inviting all guests directly. Admission is strictly by personal invitation.',
    },
    {
      question: 'What is the dress code for both ceremonies?',
      answer:
        'This dress code is strictly provided on each official invite card, and all invited guests are strictly required to know and adhere to it.',
    },
    {
      question: 'What is the inspiration behind the theme #JustByGrace?',
      answer:
        'The theme "JustByGrace" celebrates God’s faithfulness in orchestrating Julius and Temi’s love story. We believe every blessing, growth, and joy in our union is made whole through divine grace. In "JustByGrace", the J is the J initial in Julius, same for u and s in Just while the T is for the Temi initial — two lives forever intertwined and sustained by grace.',
    },
    {
      question: 'What is the venue location and accessibility in Ijegun?',
      answer:
        'The celebrations are situated in Ijegun, Lagos State. To protect privacy and ensure security, exact hall names and gate directions are provided strictly on official invite cards for invited guests.',
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Badge variant="champagne">
            <HelpCircle className="w-3.5 h-3.5" />
            Helpful Notes
          </Badge>
          <Badge variant="gold">Theme: JustByGrace</Badge>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2724] font-normal tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="max-w-md mx-auto text-[#6D6154] text-base font-light">
          Everything you need to know ahead of Julius & Temi’s traditional & white wedding celebration in Ijegun.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={faq.question}
              className="border border-[#E7DECD] bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="font-serif text-xl text-[#2C2724] font-medium">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#AA7C11] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm text-[#5E5244] leading-relaxed border-t border-[#F2EAE0]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
