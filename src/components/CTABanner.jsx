import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function CTABanner({ title, buttonText = 'Request a Quote', buttonLink = '/contact' }) {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(255,106,0,0.92), rgba(232,93,0,0.95)), url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1600&q=80')` }}
      />
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Decorative shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -left-20 -top-20 w-80 h-80 border-2 border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-32 -bottom-32 w-96 h-96 border-2 border-white/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wider leading-[1] max-w-3xl"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Link to={buttonLink}>
            <MagneticButton className="bg-dark text-white font-head font-bold tracking-widest text-sm uppercase px-8 py-4 clip-tag flex items-center gap-3 hover:bg-white hover:text-orange transition-colors">
              {buttonText} <ArrowRight size={18} />
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
