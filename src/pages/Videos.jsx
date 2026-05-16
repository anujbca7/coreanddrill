import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Upload } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { SectionTag, SectionTitle, FadeIn } from '../components/SectionTitle'

const videos = [
  { type: 'video', id: 'oHg5SJYRHA0', cat: 'Core Cutting · Sample', title: '600mm Diamond Core Through Reinforced Slab', desc: 'Watch our team take a 600mm core through 350mm of reinforced concrete on a live commercial site — clean entry, dust-free wet cut.', meta: ['Duration: 2:14', 'Site: Lucknow'], img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80' },
  { type: 'video', id: 'jNQXAC9IVRw', cat: 'Diamond Drilling · Sample', title: 'HVAC Duct Penetration — 250mm Diameter', desc: 'Vertical drilling through an RCC slab for HVAC duct routing. Notice the slurry containment system and rebar handling technique.', meta: ['Duration: 1:48', 'Site: Gorakhpur'], img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80' },
  { type: 'video', id: 'M7lc1UVf-VE', cat: 'Wall Cutting · Sample', title: 'Track-Mounted Wall Saw Door Opening', desc: 'Cutting a 2.1m × 0.9m doorway through a 230mm RCC wall in a residential building — straight, square, no overcuts.', meta: ['Duration: 3:02', 'Site: Kanpur'], img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80' },
  { type: 'placeholder', cat: 'Floor Sawing · Placeholder', title: 'Walk-Behind Floor Saw — Expansion Joints', desc: 'Replace this placeholder with your own YouTube ID. Footage of expansion joint cutting on an industrial slab.', meta: ['Awaiting Upload', 'Format: 16:9'] },
  { type: 'placeholder', cat: 'Anchor Fixing · Placeholder', title: 'Chemical Anchor Installation Walkthrough', desc: 'Replace with footage of M16 chemical anchor installation, hole cleaning and resin injection technique.', meta: ['Awaiting Upload', 'Format: 16:9'] },
  { type: 'placeholder', cat: 'Rebaring · Placeholder', title: 'Full-House Rebar Time-Lapse', desc: 'Replace with a time-lapse of a complete apartment rebar — chasing, conduiting, MCB panel install and final testing.', meta: ['Awaiting Upload', 'Format: 16:9'] },
  { type: 'video', id: '9bZkp7q19f0', cat: 'Anchor Fixing · Sample', title: 'Heavy-Load Mechanical Anchors for Steel Frame', desc: '16mm wedge anchors for a steel structure baseplate — drill-clean-inject-set workflow with pull-test demonstration.', meta: ['Duration: 2:35', 'Site: Industrial'], img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80' },
  { type: 'placeholder', cat: 'Showcase · Placeholder', title: 'Core & Drill — 2026 Company Reel', desc: 'Highlight reel showcasing all six service areas across multiple projects. Replace with your edited showreel.', meta: ['Awaiting Upload', 'Format: 16:9'] },
]

function VideoCard({ v, i, onPlay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
      whileHover={{ y: -10 }}
      className="bg-white shadow-2xl overflow-hidden group"
    >
      <div className="relative aspect-video bg-dark overflow-hidden">
        {v.type === 'video' ? (
          <>
            <motion.img
              src={v.img}
              alt=""
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <motion.button
              onClick={() => onPlay(v.id)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange rounded-full grid place-items-center shadow-2xl shadow-orange/60"
            >
              <Play size={32} className="text-white fill-white ml-1.5" />
            </motion.button>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark to-dark-3 flex flex-col items-center justify-center text-white border-2 border-dashed border-orange/40 relative">
            <div className="absolute inset-5 border border-orange/20 pointer-events-none"></div>
            <Upload size={48} className="text-orange mb-3" strokeWidth={1.5} />
            <div className="font-head uppercase tracking-widest text-sm text-white/70 text-center px-6 mb-3">
              {v.title}
            </div>
            <div className="bg-orange text-white font-head font-bold uppercase tracking-widest text-xs px-4 py-1.5">
              Upload Your Video
            </div>
          </div>
        )}
      </div>
      <div className="p-7 border-t-4 border-orange">
        <div className="font-head tracking-widest uppercase text-xs text-orange font-semibold mb-2">
          {v.cat}
        </div>
        <h3 className="font-head font-bold uppercase tracking-wider text-xl mb-3 leading-tight">
          {v.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{v.desc}</p>
        <div className="flex gap-4 pt-4 border-t border-gray-100">
          {v.meta.map((m, j) => (
            <span key={j} className="font-head uppercase tracking-wider text-xs text-gray-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-orange"></span>
              {m}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function VideoModal({ id, onClose }) {
  if (!id) return null
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] grid place-items-center p-6 cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl aspect-video shadow-2xl shadow-orange/20"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </motion.div>
      <button onClick={onClose} className="absolute top-6 right-6 w-12 h-12 bg-orange text-white rounded-full grid place-items-center font-display text-2xl">×</button>
    </motion.div>
  )
}

export default function Videos() {
  const [active, setActive] = useState(null)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader title="Site" accent="Videos" breadcrumb="Videos" image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80" />

      <section className="py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Watch Our Crew</SectionTag>
          <SectionTitle accent="Real Sites.">Real Cuts.</SectionTitle>
          <FadeIn delay={0.2}>
            <p className="text-gray-600 mt-6 mb-16 max-w-xl text-lg">A growing library of footage from our actual jobs — drilling, sawing, cutting, anchor work and rebaring.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((v, i) => (
              <VideoCard key={i} v={v} i={i} onPlay={setActive} />
            ))}
          </div>

          {/* Instructions box */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-dark text-white p-10 border-l-4 border-orange relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange/10 rounded-full blur-2xl"></div>
            <h3 className="font-display text-3xl tracking-wider text-orange mb-4">📌 How to Replace Placeholders</h3>
            <p className="text-white/80 mb-3">Open <code className="bg-dark-3 px-2 py-1 text-orange">src/pages/Videos.jsx</code> in your editor.</p>
            <p className="text-white/80 mb-3">For sample videos: find the YouTube ID like <code className="bg-dark-3 px-2 py-1 text-orange">'oHg5SJYRHA0'</code> and replace it with your own (the part after <code className="bg-dark-3 px-2 py-1 text-orange">v=</code> in any YouTube URL).</p>
            <p className="text-white/80">For placeholder cards: change <code className="bg-dark-3 px-2 py-1 text-orange">type: 'placeholder'</code> to <code className="bg-dark-3 px-2 py-1 text-orange">type: 'video'</code>, add an <code className="bg-dark-3 px-2 py-1 text-orange">id</code> and <code className="bg-dark-3 px-2 py-1 text-orange">img</code> field.</p>
          </motion.div> */}
        </div>
      </section>

      <CTABanner title="Liked the work? Let us cut for your project too." buttonText="Book A Visit" />

      <VideoModal id={active} onClose={() => setActive(null)} />
    </motion.div>
  )
}
