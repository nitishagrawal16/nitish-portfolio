import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { person } from '../data/content'

export default function Contact() {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 px-4 sm:px-6 overflow-x-hidden w-full"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="font-display text-xs font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: 'var(--color-muted)' }}
            >
              Say Hi 👋
            </motion.p>

            {/* Giant "Creative" watermark text — like the reference */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65 }}
                className="font-display font-bold leading-none select-none"
                style={{
                  fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                  color: 'var(--color-ink)',
                  letterSpacing: '-0.03em',
                }}
              >
                Let's Talk
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="font-body text-base mt-5 max-w-md"
              style={{ color: 'var(--color-muted)' }}
            >
              Whether you're looking for a product leader, want to exchange ideas, or just connect — I'd love to hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href={`mailto:${person.email}`}
                className="px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-opacity hover:opacity-80 truncate max-w-[260px] sm:max-w-none"
                style={{ backgroundColor: 'var(--color-ink)', color: '#fff' }}
              >
                {person.email}
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full font-body font-semibold text-sm border-2 transition-opacity hover:opacity-70"
                style={{ borderColor: 'var(--color-ink)', color: 'var(--color-ink)' }}
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </div>

          {/* Contact info block */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-col gap-2 md:text-right"
          >
            <p className="font-display font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>{person.location}</p>
            <p className="font-body text-sm" style={{ color: 'var(--color-muted)' }}>{person.email}</p>
            <p className="font-body text-xs mt-4" style={{ color: 'var(--color-muted)' }}>© {new Date().getFullYear()} Nitish Agrawal</p>
          </motion.div>
        </div>

        {/* Bottom nav row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-6 mt-16 pt-8"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="font-display font-bold text-lg" style={{ color: 'var(--color-ink)' }}>
            NA<span style={{ color: 'var(--color-accent)' }}>.</span>
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {['About', 'Experience', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm hover:opacity-60 transition-opacity"
                style={{ color: 'var(--color-muted)' }}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
