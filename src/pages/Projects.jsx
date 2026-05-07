import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { SectionTag, SectionTitle, FadeIn } from '../components/SectionTitle'

const projects = [
  { cat: 'core', catLabel: 'Core Cutting', title: '600mm Slab Core Cut', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80' },
  { cat: 'wall', catLabel: 'Wall Cutting', title: 'Office Door Opening', img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80' },
  { cat: 'drill', catLabel: 'Diamond Drilling', title: 'HVAC Riser, Hotel Block', img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80' },
  { cat: 'floor', catLabel: 'Floor Sawing', title: 'Industrial Expansion Joints', img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80' },
  { cat: 'anchor', catLabel: 'Anchor Fixing', title: 'Steel Frame Mount', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80' },
  { cat: 'wire', catLabel: 'Rewiring', title: '4-BHK Apartment Rewire', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80' },
  { cat: 'core', catLabel: 'Core Cutting', title: 'Drainage Cut, Varanasi', img: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=900&q=80' },
  { cat: 'wall', catLabel: 'Wall Cutting', title: 'Window Retrofit, Lucknow', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80' },
  { cat: 'drill', catLabel: 'Drilling', title: 'Conduit Array, Mall Site', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80' },
  { cat: 'wire', catLabel: 'Rewiring', title: 'Hotel Block Wiring', img: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=900&q=80' },
  { cat: 'floor', catLabel: 'Floor Sawing', title: 'Warehouse Trench Cut', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80' },
  { cat: 'anchor', catLabel: 'Anchor Fixing', title: 'Façade Bracket Install', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80' },
]

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'core', label: 'Core Cutting' },
  { id: 'drill', label: 'Drilling' },
  { id: 'wall', label: 'Wall Cutting' },
  { id: 'floor', label: 'Floor Sawing' },
  { id: 'anchor', label: 'Anchor Fixing' },
  { id: 'wire', label: 'Rewiring' },
]

function FilterableGallery() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTag>Field Work</SectionTag>
        <SectionTitle accent="Wires Done Right">Cuts, Drills &</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-gray-600 mt-6 mb-12 max-w-xl text-lg">Browse selected projects from across UP — filter by service to see what matters to you.</p>
        </FadeIn>

        {/* Filter buttons */}
        <LayoutGroup>
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {filters.map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setActive(f.id)}
                whileHover={{ y: -3 }}
                className={`relative font-head font-semibold uppercase tracking-widest text-xs px-6 py-3 border-2 transition-colors ${
                  active === f.id
                    ? 'bg-orange text-white border-orange'
                    : 'bg-white text-dark border-gray-200 hover:border-orange'
                }`}
              >
                {active === f.id && (
                  <motion.span
                    layoutId="filterActive"
                    className="absolute inset-0 bg-orange -z-10"
                  />
                )}
                <span className="relative">{f.label}</span>
              </motion.button>
            ))}
          </div>
        </LayoutGroup>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
              >
                <motion.img
                  src={p.img}
                  alt=""
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-5 right-5 w-12 h-12 bg-orange"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <div className="font-head tracking-widest uppercase text-xs text-orange mb-2">{p.catLabel}</div>
                  <div className="font-head font-bold uppercase text-xl tracking-wider">{p.title}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader title="Our" accent="Projects" breadcrumb="Projects" image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80" />
      <FilterableGallery />
      <CTABanner title="Want your project featured next? Let's get to work." buttonText="Start A Project" />
    </motion.div>
  )
}
