import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from './shared/SectionWrapper'
import { skillGroups, tools } from '../data/content'

function SkillGroup({ category, items, delay }) {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
  }
  const chipVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  }

  return (
    <motion.div
      ref={ref}
      variants={shouldReduce ? {} : containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="p-6 rounded-2xl"
      style={{ backgroundColor: 'var(--color-cream-dark)' }}
    >
      <p
        className="font-body text-xs uppercase tracking-[0.2em] font-semibold mb-4"
        style={{ color: 'var(--color-terracotta)' }}
      >
        {category}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <motion.span
            key={item}
            variants={shouldReduce ? {} : chipVariants}
            className="px-3 py-1.5 rounded-full font-body text-xs border"
            style={{
              backgroundColor: 'var(--color-cream)',
              borderColor: 'var(--color-brown)',
              color: 'var(--color-charcoal)',
              opacity: 0.85,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const shouldReduce = useReducedMotion()
  const [toolsRef, toolsInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const toolVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  }
  const toolChipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <SectionWrapper id="skills" className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--color-amber)' }}>
            Skills
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-charcoal)' }}
          >
            What I bring to the table
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} {...group} delay={i * 0.08} />
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="font-body text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--color-brown)' }}>
            Tools I Use
          </p>
        </div>

        <motion.div
          ref={toolsRef}
          variants={shouldReduce ? {} : toolVariants}
          initial="hidden"
          animate={toolsInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-3"
        >
          {tools.map((tool) => (
            <motion.span
              key={tool}
              variants={shouldReduce ? {} : toolChipVariants}
              className="px-4 py-2 rounded-full font-body text-sm font-medium"
              style={{
                backgroundColor: 'rgba(212,168,83,0.15)',
                color: 'var(--color-charcoal)',
                border: '1px solid rgba(212,168,83,0.35)',
              }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
