import { motion } from 'framer-motion'

const clients = [
  'SHALIMAR',
  'SHRIRAM CONSTRUCTIONS',
  'Larsen & Toubro',
  'Ristey',
  'BHARAT INFRA',
  'OMEX',
  'Wagman',
  'Migsun Hotel',
]

export default function ClientStrip() {
  return (
    <section className="bg-cream border-y border-dark/5 py-14 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 font-head font-bold tracking-[3px] uppercase text-xs text-gray-500">
            <span className="w-8 h-0.5 bg-orange"></span>
            Trusted By Builders Across UP
            <span className="w-8 h-0.5 bg-orange"></span>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>

          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center pr-16">
                {clients.map((c, j) => (
                  <motion.div
                    key={`${i}-${j}`}
                    whileHover={{ scale: 1.05, color: '#ff6a00' }}
                    className="font-display text-2xl md:text-3xl tracking-widest text-dark/40 hover:text-orange transition-colors flex items-center gap-16 cursor-pointer"
                  >
                    {c}
                    <span className="text-orange/40 text-sm">◆</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
