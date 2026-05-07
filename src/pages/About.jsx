import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import WhyChooseUs from '../components/WhyChooseUs'
import { SectionTag, SectionTitle, FadeIn } from '../components/SectionTitle'
import MagneticButton from '../components/MagneticButton'

function AboutMain() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={ref} className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-4/5 h-4/5 border-4 border-orange -z-10"></div>
          <motion.img
            style={{ y: imgY }}
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&q=80"
            alt="Core & Drill team"
            className="w-full aspect-[4/5] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -bottom-8 -right-8 bg-orange text-white p-8 max-w-xs shadow-2xl"
          >
            <div className="font-display text-7xl leading-none">15</div>
            <div className="font-head uppercase tracking-widest text-sm mt-2">Years of Field Experience</div>
          </motion.div>
        </div>

        <div>
          <SectionTag>Who We Are</SectionTag>
          <SectionTitle accent="Precision">A Cutting Crew Built On</SectionTitle>
          <FadeIn delay={0.2}>
            <p className="text-gray-600 mt-6 mb-5 text-lg leading-relaxed">
              Core & Drill started in 2010 with a single diamond core machine and a simple promise: clean cuts, accurate holes, no excuses. Fifteen years on, we run a full fleet of wall saws, floor saws, ring saws and core rigs.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're the team contractors call when the job is too tight, too thick, or too sensitive for the average drilling outfit. Hospitals at night. Live commercial floors. RCC walls with rebar at 100mm centers. We've handled them all.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {[
              { num: '01', title: 'Diamond-Tool Specialists', desc: 'The right blade, the right water flow, the right RPM. No improvisation.' },
              { num: '02', title: 'Site-First Mentality', desc: 'We protect floors, contain dust, manage slurry — your site stays clean.' },
              { num: '03', title: 'Single-Point Accountability', desc: 'One foreman per job. One number to call. Issues solved on the spot.' },
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
                  <h4 className="font-head font-bold uppercase tracking-wider mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'Free Site Visit', desc: 'We inspect the slab, identify rebar location, confirm access and water/power needs.' },
    { num: '02', title: 'Detailed Quote', desc: 'Written estimate with cut dimensions, machinery, crew size, timeline and final price.' },
    { num: '03', title: 'Cut & Drill', desc: 'Crew arrives with all gear, sets up containment, and executes with minimal disruption.' },
    { num: '04', title: 'Cleanup & Handover', desc: 'Slurry removed, tools packed, debris cleared. Site ready for the next trade.' },
  ]
  return (
    <section className="py-32 px-6 bg-dark text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <SectionTag>How We Work</SectionTag>
        <SectionTitle light accent="Process" className="text-white">Our 4-Step</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-white/60 mt-6 mb-16 max-w-xl text-lg">A no-nonsense workflow that keeps your project on schedule and your site safe.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-8 glass-dark relative group"
            >
              {/* Connecting line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-0.5 bg-orange/40"></div>
              )}

              <motion.div
                whileHover={{ scale: 1.1, color: '#ff6a00' }}
                className="font-display text-8xl leading-none mb-4 text-stroke text-orange"
              >
                {s.num}
              </motion.div>
              <h4 className="font-head font-bold uppercase tracking-widest text-lg mb-3 group-hover:text-orange transition-colors">{s.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const team = [
    { name: 'Vikram Singh', role: 'Founder & Lead Operator', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { name: 'Rohit Sharma', role: 'Site Supervisor', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
    { name: 'Arun Yadav', role: 'Drilling Specialist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80' },
    { name: 'Manoj Kumar', role: 'Master Electrician', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80' },
  ]
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTag>The Crew</SectionTag>
        <SectionTitle accent="The Cuts">People Behind</SectionTitle>
        <FadeIn delay={0.2}>
          <p className="text-gray-600 mt-6 mb-16 max-w-xl text-lg">Trained operators, certified electricians, disciplined supervisors.</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden bg-dark"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img
                  src={t.img}
                  alt=""
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="bg-dark text-white p-5 relative group-hover:bg-orange transition-colors duration-300">
                <div className="absolute -top-4 left-5 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[15px] border-b-dark group-hover:border-b-orange transition-colors"></div>
                <h4 className="font-head font-bold uppercase tracking-wider text-lg">{t.name}</h4>
                <span className="text-xs text-orange group-hover:text-white tracking-wider transition-colors">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader title="About" accent="Core & Drill" breadcrumb="About Us" image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80" />
      <AboutMain />
      <ProcessSection />
      <WhyChooseUs />
      <TeamSection />
      <CTABanner title="Ready to put a real cutting crew on your site?" buttonText="Talk To Us" />
    </motion.div>
  )
}
