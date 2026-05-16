import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { SectionTag, SectionTitle, FadeIn } from '../components/SectionTitle'
import MagneticButton from '../components/MagneticButton'

const allServices = [
  {
    num: '01', id: 'core-cutting', title: 'Concrete Core Cutting',
    short: 'Clean circular cuts through reinforced concrete walls and slabs.',
    desc: 'Diamond core drilling produces perfectly circular openings in reinforced concrete with zero impact damage. We cut through floors, walls, columns and beams — through rebar, post-tension cable and aggregate.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80',
    features: ['Core diameters from 25mm to 600mm', 'Vertical, horizontal and overhead cutting', 'Wet-cut system — no airborne dust', 'Slurry containment & site cleanup', 'GPR scanning available before cutting']
  },
  {
    num: '02', id: 'drilling', title: 'Diamond Drilling',
    short: 'Precision holes for HVAC, plumbing, conduits and structural anchors.',
    desc: 'Whether a single anchor hole or 200 conduit penetrations, our diamond rigs deliver consistent, dimension-accurate holes through the toughest substrates. Concrete, masonry, granite, hardstone.',
    img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1000&q=80',
    features: ['HVAC duct & exhaust penetrations', 'Plumbing risers and drain holes', 'Electrical conduit pathways', 'Structural anchor holes (single or array)', 'Stitch drilling for non-impact demolition']
  },
  {
    num: '03', id: 'wall-cutting', title: 'Wall Cutting & Sawing',
    short: 'Track-mounted saws for door openings, windows, structural cuts.',
    desc: 'Track-mounted diamond wall saws deliver perfectly square, straight cuts through reinforced walls up to 730mm thick. Ideal for retrofitting door openings, windows, or structural sections.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80',
    features: ['Cuts up to 730mm depth in single pass', 'Door & window opening retrofits', 'Stair openings through slabs', 'Structural wall removal & remodeling', 'Heritage & sensitive structure work']
  },
  {
    num: '04', id: 'floor-sawing', title: 'Floor Sawing & Cutting',
    short: 'Walk-behind saws for joints, trenches and slab removal.',
    desc: 'Walk-behind floor saws cut clean expansion joints, drainage channels and demolition lines through concrete slabs and asphalt. Petrol, diesel and electric models for indoor or outdoor jobs.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=80',
    features: ['Cutting depths up to 500mm', 'Expansion & control joints', 'Drainage trench cutting', 'Asphalt road cutting', 'Slab removal preparation']
  },
  {
    num: '05', id: 'anchor-fixing', title: 'Chemical Anchor Fixing',
    short: 'High-load mechanical and resin anchors for any structural retrofit.',
    desc: 'High-load mechanical and chemical anchor installation for railings, machinery bases, façade fixings, signage and structural retrofits. Pull-test certified on request.',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1000&q=80',
    features: ['Mechanical wedge & sleeve anchors', 'Chemical resin anchors (epoxy & polyester)', 'Rebar dowel & post-installed connections', 'Façade & curtain wall fixing', 'Pull-out load testing certificates']
  },
  {
    num: '06', id: 'rebaring', title: 'Complete Rebaring',
    short: 'Full-house and commercial rebaring with certified safety testing.',
    desc: 'Full-house and commercial rebaring with ISI-marked bars, proper placement and anchoring. We coordinate with our cutting crew so chasing happens as one job.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80',
    features: ['Residential & apartment rebaring', 'Commercial & retail rebaring', 'Proper bar placement & anchoring', 'Concrete cover & spacing', 'Rebar tying & splicing']
  },
]

function ExpandingServiceList() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-dark py-32 px-6 relative overflow-hidden">
      <div className="absolute -top-20 right-0 font-display text-[15rem] text-white/[0.02] tracking-widest leading-none pointer-events-none">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTag>Service Lineup</SectionTag>
        <SectionTitle light accent="Expertise" className="text-white">Our Areas of</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-white/60 mt-6 mb-16 max-w-xl text-lg">Hover any service to expand. Six specialized areas under one roof.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Left: list */}
          <div className="border-t border-white/10">
            {allServices.map((s, i) => (
              <motion.div
                key={s.id}
                onMouseEnter={() => setActive(i)}
                className="relative border-b border-white/10 cursor-pointer"
              >
                <div className="flex items-center justify-between py-7 group">
                  <div className="flex items-center gap-6">
                    <span className={`font-display text-3xl tracking-widest transition-colors duration-300 ${active === i ? 'text-orange' : 'text-white/30'}`}>
                      {s.num}
                    </span>
                    <h3 className={`font-display text-3xl md:text-4xl tracking-wider transition-colors duration-300 ${active === i ? 'text-white' : 'text-white/30'}`}>
                      {s.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ x: active === i ? 0 : -10, opacity: active === i ? 1 : 0.3 }}
                    className={`${active === i ? 'text-orange' : 'text-white/30'}`}
                  >
                    <ArrowRight size={28} />
                  </motion.div>
                </div>
                {/* Active underline */}
                {active === i && (
                  <motion.div
                    layoutId="serviceActive"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:sticky lg:top-32 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-dark p-2"
              >
                <div className="relative aspect-video overflow-hidden mb-6">
                  <img src={allServices[active].img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-orange text-white px-4 py-2 font-display text-xl tracking-widest">
                    {allServices[active].num}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {allServices[active].features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-white/80 text-sm"
                      >
                        <Check size={18} className="text-orange flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceDetailRows() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTag>Detailed Breakdown</SectionTag>
        <SectionTitle accent="Service">Each</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-gray-600 mt-6 mb-20 max-w-xl text-lg">Detailed breakdown of every cutting, drilling, anchoring and electrical service we offer.</p>
        </FadeIn>

        <div className="space-y-32">
          {allServices.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className="relative [direction:ltr]">
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-orange -z-10"></div>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={s.img}
                  alt=""
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-dark text-orange grid place-items-center font-display text-5xl border-4 border-orange">
                  {s.num}
                </div>
              </div>

              <div className="[direction:ltr]">
                <SectionTag>Service {s.num}</SectionTag>
                <h3 className="font-display text-4xl md:text-5xl tracking-wider leading-none mb-5">
                  {s.title.split(' ').slice(0, -1).join(' ')} <span className="text-orange">{s.title.split(' ').slice(-1)}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 py-3 border-b border-dashed border-gray-200">
                      <span className="w-6 h-6 bg-orange grid place-items-center flex-shrink-0">
                        <Check size={14} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader title="Our" accent="Services" breadcrumb="Services" image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" />
      <ExpandingServiceList />
      <ServiceDetailRows />
      <CTABanner title="Need more than one of these on the same job? That's our specialty." buttonText="Get Combined Quote" />
    </motion.div>
  )
}
