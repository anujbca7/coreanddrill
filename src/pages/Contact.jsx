import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { SectionTag, SectionTitle, FadeIn } from '../components/SectionTitle'
import MagneticButton from '../components/MagneticButton'

const infoItems = [
  { icon: MapPin, title: 'Office Address', lines: ['Rasoolpur Sadat Indira Nagar', 'Lucknow, Uttar Pradesh 226028', 'India'] },
  { icon: Phone, title: 'Call Us', lines: ['+91 8400664700 (Bookings)', '+91 8400664700 (Site Emergencies)'] },
  { icon: Mail, title: 'Email Us', lines: ['coreanddrill@gmail.com'] },
  { icon: Clock, title: 'Working Hours', lines: ['Mon – Sat: 8:00 AM – 8:00 PM', 'Sunday: Emergency calls only'] },
]

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', location: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', email: '', service: '', location: '', message: '' })
    }, 3500)
  }

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-12">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-dark text-white p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange"></div>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-orange/15 rounded-full blur-3xl"></div>

          <h3 className="font-display text-4xl tracking-wider mb-2">
            Reach Out To <span className="text-orange">Our Crew</span>
          </h3>
          <p className="text-white/60 mb-8 mt-4">
            Whether you need a single core cut or a full renovation crew on site, we respond fast.
          </p>

          <div className="space-y-1">
            {infoItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ x: 6 }}
                className="flex gap-5 py-5 border-b border-white/10 last:border-b-0 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 bg-orange grid place-items-center flex-shrink-0"
                >
                  <item.icon size={20} className="text-white" />
                </motion.div>
                <div>
                  <h5 className="font-head font-bold uppercase tracking-widest text-sm mb-1.5 group-hover:text-orange transition-colors">
                    {item.title}
                  </h5>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-white/70 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 lg:p-12 shadow-2xl relative"
        >
          <h3 className="font-display text-4xl tracking-wider mb-2">
            Request A <span className="text-orange">Free Quote</span>
          </h3>
          <p className="text-gray-600 mb-8 mt-4">
            Fill in the details — we typically respond within 60 minutes during working hours.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-orange/10 border-2 border-orange p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-16 h-16 bg-orange rounded-full grid place-items-center mx-auto mb-4"
              >
                <Check size={32} className="text-white" strokeWidth={3} />
              </motion.div>
              <h4 className="font-display text-3xl tracking-wider mb-2">Enquiry Sent!</h4>
              <p className="text-gray-600">We'll be in touch within an hour during working hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text" placeholder="Your Name *" required
                  value={form.name} onChange={update('name')}
                  className="px-5 py-4 bg-cream border-2 border-transparent focus:border-orange focus:bg-white transition-colors outline-none"
                />
                <input
                  type="tel" placeholder="Phone Number *" required
                  value={form.phone} onChange={update('phone')}
                  className="px-5 py-4 bg-cream border-2 border-transparent focus:border-orange focus:bg-white transition-colors outline-none"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email" placeholder="Email Address *" required
                  value={form.email} onChange={update('email')}
                  className="px-5 py-4 bg-cream border-2 border-transparent focus:border-orange focus:bg-white transition-colors outline-none"
                />
                <select
                  required value={form.service} onChange={update('service')}
                  className="px-5 py-4 bg-cream border-2 border-transparent focus:border-orange focus:bg-white transition-colors outline-none"
                >
                  <option value="">Select Service *</option>
                  <option>Concrete Core Cutting</option>
                  <option>Diamond Drilling</option>
                  <option>Wall Cutting & Sawing</option>
                  <option>Floor Sawing & Cutting</option>
                  <option>Chemical Anchor Fixing</option>
                  <option>Complete Rebaring</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <input
                type="text" placeholder="Project Location / City"
                value={form.location} onChange={update('location')}
                className="w-full px-5 py-4 bg-cream border-2 border-transparent focus:border-orange focus:bg-white transition-colors outline-none"
              />
              <textarea
                placeholder="Tell us about your job — wall thickness, hole sizes, site access, deadline..."
                value={form.message} onChange={update('message')}
                rows={5}
                className="w-full px-5 py-4 bg-cream border-2 border-transparent focus:border-orange focus:bg-white transition-colors outline-none resize-none"
              />
              <MagneticButton
                type="submit"
                className="w-full bg-orange text-white font-head font-bold tracking-widest text-sm uppercase px-8 py-5 clip-tag flex items-center justify-center gap-3 hover:bg-dark transition-colors"
              >
                Send Enquiry <Send size={18} />
              </MagneticButton>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}


export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader title="Get In" accent="Touch" breadcrumb="Contact" image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80" />
      <ContactSection />
      <CTABanner title="Emergency cutting job? We respond 24/7." buttonText="Call: +91 8400664700" />
    </motion.div>
  )
}
