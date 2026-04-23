import { motion, useReducedMotion } from 'framer-motion'
import BlobBackground from './shared/BlobBackground'
import { person, about } from '../data/content'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <BlobBackground color="#D4A853" opacity={0.22} className="w-[600px] h-[600px] -top-20 -right-32" />
      <BlobBackground color="#C4694A" opacity={0.14} className="w-[500px] h-[500px] -bottom-16 -left-28" />

      <motion.div
        className="relative z-10 max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate={shouldReduce ? 'visible' : 'visible'}
      >
        <motion.p
          variants={shouldReduce ? {} : itemVariants}
          className="font-body text-xs uppercase tracking-[0.3em] mb-6"
          style={{ color: 'var(--color-amber)' }}
        >
          Senior Product Manager · Financial Services
        </motion.p>

        <motion.h1
          variants={shouldReduce ? {} : itemVariants}
          className="font-display font-black leading-[1.05] mb-6"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: 'var(--color-charcoal)',
          }}
        >
          {person.name}
        </motion.h1>

        <motion.div
          variants={shouldReduce ? {} : itemVariants}
          className="mx-auto mb-6"
          style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-amber)' }}
        />

        <motion.p
          variants={shouldReduce ? {} : itemVariants}
          className="font-display italic text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--color-charcoal)', opacity: 0.7 }}
        >
          {about.tagline}
        </motion.p>

        <motion.div
          variants={shouldReduce ? {} : itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#about"
            whileHover={shouldReduce ? {} : { y: -2, boxShadow: '0 8px 24px rgba(212,168,83,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-colors"
            style={{ backgroundColor: 'var(--color-amber)', color: 'var(--color-charcoal)' }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide border-2 transition-colors"
            style={{ borderColor: 'var(--color-charcoal)', color: 'var(--color-charcoal)' }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--color-brown)' }}>Scroll</span>
        <motion.div
          className="w-px h-12"
          style={{ backgroundColor: 'var(--color-amber)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </motion.div>
    </section>
  )
}
