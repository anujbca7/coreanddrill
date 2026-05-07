import { motion } from 'framer-motion'

export function SectionTag({ children, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-3 font-head font-bold tracking-[3px] uppercase text-xs text-orange mb-4"
    >
      <span className="w-8 h-0.5 bg-orange"></span>
      {children}
    </motion.div>
  )
}

export function SectionTitle({ children, accent, light = false, className = '' }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-wider ${light ? 'text-white' : 'text-dark'} ${className}`}
    >
      {children} {accent && <span className="text-orange">{accent}</span>}
    </motion.h2>
  )
}

export function FadeIn({ children, delay = 0, y = 30 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
