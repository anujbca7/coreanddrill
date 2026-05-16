import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionTag, SectionTitle, FadeIn } from './SectionTitle'

const faqs = [
  {
    q: 'What sizes of core cutting do you handle?',
    a: 'We handle diamond core sizes from 25mm right up to 600mm diameter. For non-standard sizes or extra-deep cuts, we can rig up custom bit setups — just describe the job and we will tell you what is possible.'
  },
  {
    q: 'Do you cut through reinforced concrete with rebar?',
    a: 'Yes — every cut we make assumes rebar will be present. Our diamond bits handle steel reinforcement at any density. For sensitive structural cuts, we run GPR scanning first to map rebar layout before drilling.'
  },
  {
    q: 'How do you control dust and slurry on site?',
    a: 'Almost all our cutting is wet-cut, which keeps airborne dust at near-zero. Slurry is contained with bunding, vacuumed up, and disposed of off-site. We protect floors, walls and finishes with poly sheeting before we start.'
  },
  {
    q: 'How quickly can you visit my site?',
    a: 'We aim for a same-day or next-day site visit anywhere in Gorakhpur, Lucknow, Kanpur and surrounding districts. Emergency cutting jobs (water leaks, urgent demolition) — we can be there within few hours.'
  },
  {
    q: 'Will you provide a written quote before starting?',
    a: 'Always. Every job starts with a free site visit and a written quote that lists cut dimensions, machinery, crew size, timeline and final price. The price you sign is the price you pay — no surprises.'
  },
  {
    q: 'What payment terms do you accept?',
    a: 'For jobs above ₹50,000 we ask for 30 percent advance, 40 percent at midpoint and 30 percent on completion. Smaller jobs are paid on completion. We accept bank transfer, UPI, cheque and cash.'
  },
  {
    q: 'Do you work outside Uttar Pradesh?',
    a: 'For larger projects, yes. We have travelled to Bihar, Delhi NCR and Madhya Pradesh for industrial-scale jobs. Travel and accommodation are quoted separately for out-of-state work.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <SectionTag>Frequently Asked</SectionTag>
          <SectionTitle accent="Asked Questions" className="!leading-[0.95]">Got Questions?</SectionTitle>
          <FadeIn delay={0.2}>
            <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg">
              The questions we hear most often from contractors and homeowners. Don't see yours? Just call.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative overflow-hidden border-l-4 transition-colors duration-300 ${
                  isOpen ? 'bg-dark border-orange' : 'bg-cream border-transparent hover:border-orange/50'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full p-6 md:p-7 flex items-center justify-between gap-6 text-left group"
                >
                  <div className="flex items-center gap-5">
                    <span className={`font-display text-2xl tracking-widest transition-colors ${
                      isOpen ? 'text-orange' : 'text-orange/60'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`font-head font-bold uppercase tracking-wider text-base md:text-lg transition-colors ${
                      isOpen ? 'text-white' : 'text-dark group-hover:text-orange'
                    }`}>
                      {item.q}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 grid place-items-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-orange text-white' : 'bg-white text-dark group-hover:bg-orange group-hover:text-white'
                    }`}
                  >
                    <Plus size={20} strokeWidth={2.5} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 pl-[4.5rem]">
                        <p className="text-white/75 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
