import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { person, about, skillGroups } from '../data/content'
import aboutImg from '../assets/img3.jpg'

const highlightTags = ['Financial Services', 'SaaS', 'Agile / Scrum', 'Data Analytics', 'Stakeholder Mgmt', 'SQL', 'Product Roadmaps', 'Cross-functional Leadership', 'Claude Code', 'AI Product Development', 'Prompt Engineering']

export default function About() {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-xs font-semibold uppercase tracking-[0.25em] mb-12"
          style={{ color: 'var(--color-muted)' }}
        >
          About Me
        </motion.p>

        <div className="grid md:grid-cols-[1fr_340px] gap-12 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-ink)', letterSpacing: '-0.02em' }}
            >
              As a Product Manager & Analyst,<br />
              I create <span style={{ borderBottom: '3px solid var(--color-accent)' }}>data-driven</span> solutions<br />
              that bridge complexity and clarity.
            </h2>

            <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--color-muted)', maxWidth: '520px' }}>
              {about.bio}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {highlightTags.map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap px-3 py-1 rounded-full font-body text-xs font-medium border"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)', backgroundColor: 'var(--color-surface)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 font-body text-sm" style={{ color: 'var(--color-muted)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {person.location}
            </div>
          </motion.div>

          {/* Right — value card + photo */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Dark card */}
            <div
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{ backgroundColor: 'var(--color-dark)' }}
            >
              <p className="font-display font-semibold text-sm mb-3 uppercase tracking-wider" style={{ color: 'var(--color-accent)' }}>
                The Value Provided
              </p>
              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Gain insights through user interviews, surveys, and usability tests. Synthesize findings to inform data-driven product decisions and align teams around what matters.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: '+30%', label: 'Detection accuracy' },
                  { val: '95%', label: 'UAT acceptance' },
                  { val: '100%', label: 'On-time delivery' },
                  { val: '10+', label: 'Years shipped' },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                    <p className="font-display font-bold text-xl" style={{ color: '#fff' }}>{s.val}</p>
                    <p className="font-body text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo card — whiteboard strategy shot, perfect for a PM about section */}
            <div className="rounded-2xl overflow-hidden relative" style={{ height: '220px' }}>
              <img
                src={aboutImg}
                alt="Nitish Agrawal presenting product strategy"
                className="w-full h-full object-cover"
                style={{ objectPosition: '35% 50%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
