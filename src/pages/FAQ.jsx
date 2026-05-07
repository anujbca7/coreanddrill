import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import FAQ from '../components/FAQ'
import WhyChooseUs from '../components/WhyChooseUs'

export default function FAQPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHeader
        title="Frequently"
        accent="Asked"
        breadcrumb="FAQ"
        image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&q=80"
      />
      <FAQ />
      <WhyChooseUs light={true} />
      <CTABanner title="Still got questions? Pick up the phone — we love a good chat." buttonText="Call Us Now" />
    </motion.div>
  )
}
