import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillGroups, tools } from '../data/content'

const icons = {
  'Product & Delivery': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  ),
  'Discovery & Strategy': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  'Data & Analytics': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  ),
  'Collaboration & Communication': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  'Financial & Risk Expertise': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
  ),
  'Documentation & Quality': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
  ),
  'AI & Emerging Technology': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z"/><path d="M12 17a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2v-1a2 2 0 012-2z"/><path d="M4.93 4.93a2 2 0 012.83 0l.7.7a2 2 0 010 2.83 2 2 0 01-2.83 0l-.7-.7a2 2 0 010-2.83z"/><path d="M15.54 15.54a2 2 0 012.83 0l.7.7a2 2 0 010 2.83 2 2 0 01-2.83 0l-.7-.7a2 2 0 010-2.83z"/><path d="M2 12a2 2 0 012-2h1a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z"/><path d="M17 12a2 2 0 012-2h1a2 2 0 012 2 2 2 0 01-2 2h-1a2 2 0 01-2-2z"/><path d="M4.93 19.07a2 2 0 010-2.83l.7-.7a2 2 0 012.83 0 2 2 0 010 2.83l-.7.7a2 2 0 01-2.83 0z"/><path d="M15.54 8.46a2 2 0 010-2.83l.7-.7a2 2 0 012.83 0 2 2 0 010 2.83l-.7.7a2 2 0 01-2.83 0z"/></svg>
  ),
}

function SkillCard({ category, items, index }) {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="p-6 rounded-2xl"
      style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--color-surface-2)', color: 'var(--color-accent)' }}
      >
        {icons[category] ?? null}
      </div>
      <h3 className="font-display font-semibold text-sm mb-3" style={{ color: 'var(--color-ink)' }}>
        {category}
      </h3>
      <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {items.join(' · ')}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  const shouldReduce = useReducedMotion()
  const [headingRef, headingInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [toolsRef, toolsInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="skills" className="py-24 md:py-32 px-4 sm:px-6 overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto">

        <div ref={headingRef} className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="font-display text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: 'var(--color-muted)' }}
            >
              Capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-bold"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-ink)', letterSpacing: '-0.02em' }}
            >
              Services Provided
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} {...group} index={i} />
          ))}
        </div>

        {/* Tools row */}
        <div ref={toolsRef}>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--color-muted)' }}>
            Favourite Stack
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={toolsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.9 }}
                animate={toolsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-xl font-body text-sm font-medium"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
