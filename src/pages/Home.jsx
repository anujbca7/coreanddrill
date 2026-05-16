import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion'
import { ArrowRight, Award, Hammer, Shield, Clock, Play, Star, Quote } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'
import CTABanner from '../components/CTABanner'
import ClientStrip from '../components/ClientStrip'
import WhyChooseUs from '../components/WhyChooseUs'
import FAQ from '../components/FAQ'
import { SectionTag, SectionTitle, FadeIn } from '../components/SectionTitle'

const services = [
  { num: '01', title: 'Concrete Core Cutting', desc: 'Clean circular cuts through reinforced walls and slabs from 25mm to 600mm.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80' },
  { num: '02', title: 'Diamond Drilling', desc: 'Precision holes for HVAC, plumbing, conduits and structural anchors.', img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80' },
  { num: '03', title: 'Wall Cutting & Sawing', desc: 'Track-mounted saws for door openings, windows and structural cuts.', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80' },
  { num: '04', title: 'Floor Sawing & Cutting', desc: 'Walk-behind saws for joints, trenches and slab removal up to 500mm.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80' },
  { num: '05', title: 'Chemical Anchor Fixing', desc: 'High-load mechanical and resin anchors for any structural retrofit.', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80' },
  { num: '06', title: 'Complete Rebaring', desc: 'Full-house and commercial wiring with certified safety testing.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80' },
]

const stats = [
  { num: '5+', label: 'Years on Site' },
  { num: '500+', label: 'Projects Done' },
  { num: '98%', label: 'Repeat Clients' },
  { num: '24/7', label: 'Emergency Crew' },
]

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const numericValue = parseFloat(value)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericValue))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(numericValue)
    }
    tick()
  }, [inView, numericValue])

  return <span ref={ref}>{count}{suffix}</span>
}

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative min-h-screen bg-dark text-white overflow-hidden">
      {/* Animated background image */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(20,20,20,0.6), rgba(20,20,20,0.85)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
      </motion.div>

      {/* Glow orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange/15 rounded-full blur-3xl"
      />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center min-h-[85vh]">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-3 font-head tracking-[4px] uppercase text-sm text-orange font-semibold mb-6"
          >
            <span className="w-12 h-0.5 bg-orange"></span>
            Precision Cutting & Drilling
          </motion.div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] tracking-wider">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              BUILT ON
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="block text-orange"
            >
              PRECISION.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              <span className="text-stroke">CUT</span> WITH POWER.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-white/70 max-w-xl mt-8 mb-10 text-lg"
          >
            From concrete core drilling to wall sawing, anchor installation and full Rebaring — we deliver clean, accurate, on-schedule work for contractors and homeowners across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link to="/services">
              <MagneticButton className="bg-orange text-white font-head font-bold tracking-widest text-sm uppercase px-8 py-4 clip-tag flex items-center gap-3 hover:bg-white hover:text-dark transition-colors">
                Our Services <ArrowRight size={18} />
              </MagneticButton>
            </Link>
            <Link to="/contact">
              <MagneticButton className="border-2 border-white text-white font-head font-bold tracking-widest text-sm uppercase px-8 py-4 flex items-center gap-3 hover:bg-orange hover:border-orange transition-colors">
                Free Site Visit
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Stats Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass p-10 relative"
        >
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-orange"></div>
          <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-orange"></div>

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
              className="flex justify-between items-baseline py-4 border-b border-white/10 last:border-b-0"
            >
              <div className="font-display text-5xl md:text-6xl text-orange tracking-wider">
                {stat.num}
              </div>
              <div className="font-head uppercase tracking-widest text-xs text-white/70 max-w-[130px] text-right">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-orange text-dark py-4 overflow-hidden border-t-2 border-white">
        <div className="marquee-track font-display text-2xl tracking-[3px]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {['Core Cutting', 'Diamond Drilling', 'Wall Sawing', 'Floor Cutting', 'Anchor Fixing', 'Rebaring'].map(t => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="text-sm">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureStrip() {
  const features = [
    { icon: Award, title: 'Licensed Crew', desc: 'Trained, certified, fully insured operators.' },
    { icon: Hammer, title: 'Diamond Tools', desc: 'Industrial-grade German & Japanese rigs.' },
    { icon: Shield, title: 'Dust-Free Cutting', desc: 'Wet-cut systems for safe interiors.' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'Schedule-first approach. No delays.' },
  ]
  return (
    <section className="bg-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ backgroundColor: '#ff6a00' }}
            className="p-8 text-white border-r border-b border-white/5 last:border-r-0 flex gap-5 items-start group cursor-pointer transition-colors"
          >
            <div className="text-orange group-hover:text-white transition-colors">
              <f.icon size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-head font-bold uppercase tracking-wider text-base mb-1">{f.title}</h4>
              <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={ref} className="py-32 px-6 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-4/5 h-4/5 border-4 border-orange -z-10"></div>
            <motion.img
              style={{ y: imgY }}
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
              alt=""
              className="w-full aspect-[4/5] object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-orange text-white p-8 max-w-xs shadow-2xl"
            >
              <div className="font-display text-7xl leading-none">
                <Counter value="15" />
              </div>
              <div className="font-head uppercase tracking-widest text-sm mt-2">
                Years of Cutting Experience
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <SectionTag>About Core & Drill</SectionTag>
          <SectionTitle accent="Drilling Experts">
            Concrete Cutting &
          </SectionTitle>
          <FadeIn delay={0.2}>
            <p className="text-gray-600 mt-6 mb-8 text-lg leading-relaxed">
              Since 2010, we've handled the toughest cutting and drilling jobs across residential, commercial and industrial sites — combining diamond-tool precision with disciplined site management.
            </p>
          </FadeIn>

          <div className="space-y-4 mb-8">
            {[
              { num: '01', title: 'Specialist Cutting Crew', desc: 'Trained on every blade size from 12mm cores to 1200mm wall saws.' },
              { num: '02', title: 'Full-Service Renovation', desc: 'Cutting, drilling, anchor fixing and complete electrical Rebaring.' },
              { num: '03', title: 'Transparent Pricing', desc: 'Detailed written quotes. No hidden charges, ever.' },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="bg-white p-5 border-l-4 border-orange shadow-md flex gap-5 cursor-pointer"
              >
                <div className="font-display text-3xl text-orange leading-none">{p.num}</div>
                <div>
                  <h4 className="font-head font-bold uppercase tracking-wider text-base mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link to="/about">
            <MagneticButton className="bg-dark text-white font-head font-bold tracking-widest text-sm uppercase px-8 py-4 clip-tag flex items-center gap-3 hover:bg-orange transition-colors">
              More About Us <ArrowRight size={18} />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-32 px-6 bg-dark text-white relative overflow-hidden">
      {/* Big background text */}
      <div className="absolute top-10 -right-10 font-display text-[20rem] tracking-widest text-white/[0.03] leading-none pointer-events-none">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTag>What We Do</SectionTag>
        <SectionTitle light accent="We Deliver" className="text-white">Core Services</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-white/60 mt-6 mb-16 max-w-xl text-lg">Precision diamond cutting, drilling, anchoring and electrical work — engineered for contractors who can't afford rework.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden bg-dark-2 border border-white/10 hover:bg-orange transition-colors duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 w-12 h-12 grid place-items-center bg-orange group-hover:bg-dark text-white font-display text-xl transition-colors">
                  {s.num}
                </div>
                <motion.img
                  src={s.img}
                  alt=""
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-7">
                <h3 className="font-head font-bold uppercase tracking-wider text-xl mb-3">{s.title}</h3>
                <p className="text-white/60 group-hover:text-white/90 text-sm leading-relaxed mb-5 transition-colors">{s.desc}</p>
                <Link to="/services" className="font-head font-bold uppercase tracking-widest text-xs text-orange group-hover:text-white inline-flex items-center gap-2 transition-colors">
                  Read More
                  <motion.span className="group-hover:translate-x-2 transition-transform">→</motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null)
  const videos = [
    { id: 'oHg5SJYRHA0', cat: 'Featured', title: '600mm Core Cut Through RCC Slab', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80', featured: true },
    { id: 'jNQXAC9IVRw', cat: 'Diamond Drilling', title: 'HVAC Duct Drilling', img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80' },
    { id: 'M7lc1UVf-VE', cat: 'Wall Sawing', title: 'Door Opening Cut', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80' },
    { id: '9bZkp7q19f0', cat: 'Floor Sawing', title: 'Trench Cutting Job', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80' },
    { id: 'dQw4w9WgXcQ', cat: 'Electrical', title: 'Full Apartment Rewire', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80' },
  ]
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionTag>Watch Us In Action</SectionTag>
        <SectionTitle accent="Cutting Edge">See The</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-gray-600 mt-6 mb-16 max-w-xl text-lg">Real footage from real sites. Watch our crew handle drilling, sawing, cutting and Rebaring jobs.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto] md:grid-rows-2 gap-5 h-auto md:h-[640px]">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 0.98 }}
              onClick={() => setActiveVideo(v.id)}
              className={`relative overflow-hidden bg-dark cursor-pointer group ${v.featured ? 'md:col-span-1 md:row-span-2 aspect-video md:aspect-auto' : 'aspect-video'}`}
            >
              <img src={v.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <motion.div
                whileHover={{ scale: 1.15 }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange rounded-full grid place-items-center shadow-2xl shadow-orange/50 ${v.featured ? 'w-28 h-28' : 'w-20 h-20'}`}
              >
                <Play size={v.featured ? 36 : 24} className="text-white fill-white ml-1" />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-head tracking-widest uppercase text-xs text-orange mb-1">{v.cat}</div>
                <div className={`font-head font-bold uppercase ${v.featured ? 'text-2xl' : 'text-base'}`}>{v.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/videos">
            <MagneticButton className="bg-dark text-white font-head font-bold tracking-widest text-sm uppercase px-8 py-4 clip-tag inline-flex items-center gap-3 hover:bg-orange transition-colors">
              View All Videos <ArrowRight size={18} />
            </MagneticButton>
          </Link>
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] grid place-items-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl aspect-video"
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    { cat: 'Wall Cutting', title: 'Office Renovation, Lucknow', img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80' },
    { cat: 'Core Drilling', title: 'Apartment Tower, Gorakhpur', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80' },
    { cat: 'Floor Sawing', title: 'Industrial Floor, Kanpur', img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80' },
    { cat: 'Anchor Fixing', title: 'Steel Structure Mount', img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80' },
    { cat: 'Rebaring', title: 'Hotel Block Rewire', img: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=900&q=80' },
    { cat: 'Core Cutting', title: 'Drainage Cut, Varanasi', img: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=900&q=80' },
  ]
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTag>Recent Work</SectionTag>
        <SectionTitle accent="The Ground">Projects On</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
            >
              <motion.img
                src={p.img}
                alt=""
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute top-5 right-5 w-12 h-12 bg-orange"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <div className="font-head tracking-widest uppercase text-xs text-orange mb-2">{p.cat}</div>
                <div className="font-head font-bold uppercase text-xl tracking-wider">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { quote: "Crew showed up on time, made clean cuts through a 300mm RCC wall, and left the site cleaner than they found it.", name: 'Rajeev Mehta', role: 'Project Engineer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
    { quote: "Got our 4-bedroom apartment fully rewired in 6 days. Neat conduit work, all certified, bill came in exactly as quoted.", name: 'Anita Verma', role: 'Homeowner', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
    { quote: "Floor saw work for our factory expansion was flawless. They cut 280 running meters of joints in two shifts.", name: 'Suresh Kumar', role: 'Plant Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
  ]
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionTag>Client Voices</SectionTag>
        <SectionTitle accent="About Us">What People Say</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-10 relative border-b-4 border-orange shadow-xl"
            >
              <Quote className="absolute top-6 right-6 text-orange/20" size={56} />
              <div className="flex gap-1 text-orange mb-5">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-7">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt="" className="w-14 h-14 rounded-full object-cover border-[3px] border-orange" />
                <div>
                  <h5 className="font-head font-bold uppercase tracking-wider">{t.name}</h5>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeroSection />
      <FeatureStrip />
      <ClientStrip />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <VideoSection />
      <CTABanner title="Got a tough cutting or drilling job? We've already done it." buttonText="Request a Free Quote" />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQ />
    </motion.div>
  )
}
