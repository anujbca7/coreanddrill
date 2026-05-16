import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 pt-20 pb-8 px-6 border-t-4 border-orange relative overflow-hidden">
      {/* Background big text */}
      <div className="absolute -bottom-10 right-0 font-display text-[200px] text-white/[0.02] leading-none tracking-widest pointer-events-none">
        CORE&DRILL
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {/* Brand */}
        <div>
      <Link to="/" className="group flex items-center">
  <img
    src="/logo.png"
    alt="Core & Drill Logo"
    className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
  />
</Link>
          <p className="text-sm leading-relaxed">
            India's specialist crew for concrete cutting, diamond drilling, anchor installation and complete electrical rebaring. Licensed, insured, on time.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -4, backgroundColor: '#ff6a00' }}
                className="w-10 h-10 grid place-items-center bg-dark-3 text-white border border-white/10 transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-2xl text-white tracking-wider mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {['Home', 'About', 'Services', 'Projects', 'Videos', 'FAQ', 'Contact'].map((link) => (
              <li key={link}>
                <Link
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="hover:text-orange transition flex items-center gap-2 group"
                >
                  <span className="text-orange group-hover:translate-x-1 transition-transform">›</span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-2xl text-white tracking-wider mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {['Core Cutting', 'Diamond Drilling', 'Wall Cutting', 'Floor Sawing', 'Anchor Fixing', 'Rebaring'].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-orange transition flex items-center gap-2 group">
                  <span className="text-orange group-hover:translate-x-1 transition-transform">›</span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-2xl text-white tracking-wider mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-orange">
            Get In Touch
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start border-l-2 border-orange pl-4">
              <div>
                <p className="text-white font-semibold mb-1">Office Address</p>
                Rasoolpur Sadat Indira Nagar, Lucknow-2260028<br />Uttar Pradesh , India
              </div>
            </li>
            <li className="flex gap-3 items-start border-l-2 border-orange pl-4">
              <div>
                <p className="text-white font-semibold mb-1">Phone</p>
                +91 8400664700
              </div>
            </li>
            <li className="flex gap-3 items-start border-l-2 border-orange pl-4">
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                coreanddrill@gmail.com
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs relative">
        <div>© 2026 Core & Drill. All Rights Reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange">Privacy Policy</a>
          <a href="#" className="hover:text-orange">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
