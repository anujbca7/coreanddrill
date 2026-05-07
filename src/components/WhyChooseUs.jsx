import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Users, Wrench, Award, HeartHandshake } from 'lucide-react'
import { SectionTag, SectionTitle, FadeIn } from './SectionTitle'

const reasons = [
  { icon: ShieldCheck, title: 'Fully Licensed & Insured', desc: 'All operators carry valid certifications and we hold full public liability insurance for every job.' },
  { icon: Zap, title: 'Fastest Response Time', desc: 'Site visit booked within 24 hours. Quote in your inbox within 60 minutes during work hours.' },
  { icon: Users, title: 'In-House Crew', desc: 'No subcontracting. Every operator is on our payroll, trained on our gear, accountable to our standards.' },
  { icon: Wrench, title: 'German & Japanese Tools', desc: 'Hilti, Husqvarna, Tyrolit and Makita equipment, maintained on a strict service schedule.' },
  { icon: Award, title: 'Pull-Test Certificates', desc: 'Anchor and structural fixings come with documented load-test certification — no questions asked.' },
  { icon: HeartHandshake, title: 'No-Surprise Pricing', desc: 'Written quote signed before work starts. Final invoice matches to the rupee. Always.' },
]

export default function WhyChooseUs({ light = false }) {
  return (
    <section className={`py-32 px-6 relative overflow-hidden ${light ? 'bg-cream' : 'bg-dark text-white'}`}>
      {!light && (
        <>
          <div className="absolute top-0 -left-40 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto relative">
        <SectionTag>Why Choose Core & Drill</SectionTag>
        <SectionTitle light={!light} accent="The Difference" className={light ? '' : 'text-white'}>
          Built On
        </SectionTitle>
        <FadeIn delay={0.2}>
          <p className={`mt-6 mb-16 max-w-xl text-lg ${light ? 'text-gray-600' : 'text-white/60'}`}>
            Six reasons builders, contractors and homeowners across UP keep us on speed dial.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 cursor-pointer overflow-hidden ${
                light
                  ? 'bg-white border-l-4 border-orange shadow-lg hover:shadow-2xl'
                  : 'glass-dark hover:bg-orange'
              } transition-all duration-500`}
            >
              {/* Number watermark */}
              <div className={`absolute -top-4 -right-2 font-display text-9xl leading-none tracking-wider pointer-events-none transition-colors ${
                light
                  ? 'text-orange/5 group-hover:text-orange/10'
                  : 'text-white/5 group-hover:text-white/15'
              }`}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className={`relative w-16 h-16 mb-6 grid place-items-center transition-colors duration-500 ${
                  light
                    ? 'bg-orange text-white group-hover:bg-dark'
                    : 'bg-orange/20 text-orange group-hover:bg-white/20 group-hover:text-white'
                }`}
              >
                <r.icon size={28} strokeWidth={1.8} />
                <span className={`absolute inset-0 border-2 transition-colors ${
                  light ? 'border-orange group-hover:border-dark' : 'border-orange/40 group-hover:border-white/40'
                }`}></span>
              </motion.div>

              <h4 className={`relative font-head font-bold uppercase tracking-wider text-xl mb-3 transition-colors ${
                light ? 'text-dark' : 'text-white'
              }`}>
                {r.title}
              </h4>
              <p className={`relative text-sm leading-relaxed transition-colors ${
                light ? 'text-gray-600' : 'text-white/70 group-hover:text-white/95'
              }`}>
                {r.desc}
              </p>

              {/* Bottom orange accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className={`absolute bottom-0 left-0 right-0 h-1 origin-left ${
                  light ? 'bg-dark' : 'bg-white'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
