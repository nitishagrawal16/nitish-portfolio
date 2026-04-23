import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../data/content'

function CardContent({ role, company, location, period, bullets }) {
  return (
    <>
      <h3
        className="font-display font-bold mb-1 leading-tight"
        style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)', color: 'var(--color-charcoal)' }}
      >
        {role}
      </h3>
      <p className="font-body font-semibold text-sm mb-0.5" style={{ color: 'var(--color-amber)' }}>
        {company}
      </p>
      <p className="font-body text-xs mb-4" style={{ color: 'var(--color-brown)' }}>
        {location} · {period}
      </p>
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 font-body text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)', opacity: 0.75 }}>
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-terracotta)' }} />
            {bullet}
          </li>
        ))}
      </ul>
    </>
  )
}

function ExperienceCard({ role, company, location, period, bullets, index }) {
  const shouldReduce = useReducedMotion()
  const isEven = index % 2 === 0

  // Single ref on the outer wrapper — watches whichever layout is rendered
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })
  const [dotRef, dotInView] = useInView({ threshold: 0.5, triggerOnce: true })

  const cardMotion = {
    initial: { opacity: 0, x: shouldReduce ? 0 : (isEven ? -36 : 36) },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.55, ease: 'easeOut', delay: 0.12 },
  }

  return (
    // Single wrapper carries the ref — always in the DOM regardless of breakpoint
    <div ref={ref} className="mb-10 last:mb-0">

      {/* ── Desktop alternating ── */}
      <div className="hidden md:flex items-start">

        {/* Left slot — even cards */}
        <div className="w-5/12 flex justify-end pr-10">
          {isEven && (
            <motion.div
              {...cardMotion}
              className="w-full rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--color-cream-dark)',
                borderTop: '2px solid var(--color-amber)',
                boxShadow: '0 2px 24px rgba(139,115,85,0.11)',
              }}
            >
              <CardContent role={role} company={company} location={location} period={period} bullets={bullets} />
            </motion.div>
          )}
        </div>

        {/* Centre dot */}
        <div className="w-2/12 flex justify-center pt-5 flex-shrink-0">
          <div ref={dotRef} className="relative flex items-center justify-center">
            <motion.div
              animate={dotInView ? { scale: [1, 2, 1], opacity: [0.35, 0, 0.35] } : {}}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute w-4 h-4 rounded-full"
              style={{ backgroundColor: 'var(--color-amber)' }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={dotInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 280, damping: 16 }}
              className="w-4 h-4 rounded-full z-10"
              style={{
                backgroundColor: 'var(--color-amber)',
                boxShadow: '0 0 0 4px var(--color-cream), 0 0 0 6px rgba(212,168,83,0.28)',
              }}
            />
          </div>
        </div>

        {/* Right slot — odd cards */}
        <div className="w-5/12 pl-10">
          {!isEven && (
            <motion.div
              {...cardMotion}
              className="w-full rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--color-cream-dark)',
                borderTop: '2px solid var(--color-amber)',
                boxShadow: '0 2px 24px rgba(139,115,85,0.11)',
              }}
            >
              <CardContent role={role} company={company} location={location} period={period} bullets={bullets} />
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Mobile stacked ── */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center pt-1 flex-shrink-0">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: 'var(--color-amber)', boxShadow: '0 0 0 3px var(--color-cream), 0 0 0 5px rgba(212,168,83,0.25)' }}
          />
          <div className="flex-1 w-px mt-2" style={{ backgroundColor: 'rgba(212,168,83,0.28)' }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 rounded-2xl p-5 mb-2"
          style={{
            backgroundColor: 'var(--color-cream-dark)',
            borderLeft: '3px solid var(--color-amber)',
            boxShadow: '0 2px 16px rgba(139,115,85,0.09)',
          }}
        >
          <CardContent role={role} company={company} location={location} period={period} bullets={bullets} />
        </motion.div>
      </div>
    </div>
  )
}

export default function Experience() {
  const shouldReduce = useReducedMotion()
  const [headingRef, headingInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [lineRef, lineInView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="experience" className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-5xl mx-auto">

        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--color-amber)' }}>
            Experience
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-charcoal)' }}
          >
            A decade of shipping
          </h2>
        </motion.div>

        <div ref={lineRef} className="relative">
          {/* Vertical line draws downward on scroll — desktop only */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.1 }}
            className="hidden md:block absolute top-0 bottom-0 w-px"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(212,168,83,0.28)',
              transformOrigin: 'top',
            }}
          />

          {experience.map((exp, i) => (
            <ExperienceCard key={i} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
