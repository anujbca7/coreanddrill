import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PageHeader({ title, accent, breadcrumb, image }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark text-white py-32 md:py-40 px-6">
      {/* Parallax bg */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark"></div>
        <div className="absolute inset-0 grid-pattern"></div>
      </motion.div>

      {/* Diagonal stripes */}
      <div
        className="absolute inset-0 -z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,106,0,0.05) 30px, rgba(255,106,0,0.05) 31px)'
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange/20 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-head tracking-[2px] uppercase text-sm text-gray-400 mb-5 flex items-center gap-3"
        >
          <Link to="/" className="text-orange hover:text-white transition">Home</Link>
          <span>/</span>
          <span>{breadcrumb}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wider"
        >
          {title} {accent && <span className="text-orange">{accent}</span>}
        </motion.h1>
      </div>
    </section>
  )
}
