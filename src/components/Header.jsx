import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import MagneticButton from './MagneticButton'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/videos', label: 'Videos' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <>
      {/* Top Strip */}
      <div className="bg-dark text-gray-400 text-xs font-head tracking-wider py-2.5 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-orange">MON–SAT: 8AM–8PM</span>
            <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-orange">coreanddrill@gmail.com</span>
            <span className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-orange">+91 8400664700</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-orange transition">FACEBOOK</a>
            <a href="#" className="hover:text-orange transition">INSTAGRAM</a>
            <a href="#" className="hover:text-orange transition">YOUTUBE</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-orange/30' : 'bg-white border-b-2 border-orange'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
         <Link to="/" className="group flex items-center">
  <img
    src="/logo.png"
    alt="Core & Drill Logo"
    className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
  />
</Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative font-head font-semibold text-sm tracking-widest uppercase px-5 py-3 transition ${
                    location.pathname === item.to ? 'text-orange' : 'text-dark hover:text-orange'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.to && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-5 right-5 bottom-1 h-0.5 bg-orange"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="hidden lg:inline-block">
            <MagneticButton className="bg-orange text-white font-head font-bold tracking-widest text-sm uppercase px-7 py-3.5 clip-tag flex items-center gap-2 hover:bg-white hover:text-dark transition-colors">
              <Phone size={16} /> Get a Quote
            </MagneticButton>
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-dark border-t border-orange/30 overflow-hidden"
            >
              <ul className="flex flex-col py-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`block px-6 py-3 font-head uppercase tracking-wider ${
                        location.pathname === item.to ? 'text-orange' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="px-6 pt-4">
                  <Link to="/contact" className="block bg-orange text-white text-center font-head font-bold tracking-widest text-sm uppercase px-7 py-3.5 clip-tag">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
