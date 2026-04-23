import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certifications, education } from '../data/content'

export default function Certifications() {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="certifications" className="py-24 md:py-28 px-4 sm:px-6 overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-xs font-semibold uppercase tracking-[0.25em] mb-12"
          style={{ color: 'var(--color-muted)' }}
        >
          Awards & Recognition
        </motion.p>

        {/* Certifications */}
        <div className="space-y-4 mb-16">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start sm:items-center justify-between gap-4 py-5 px-5 sm:px-6 rounded-2xl flex-wrap sm:flex-nowrap"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-xs"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-ink)' }}
                >
                  {cert.issuer.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base" style={{ color: 'var(--color-ink)' }}>
                    {cert.title}
                  </h3>
                  <p className="font-body text-sm" style={{ color: 'var(--color-muted)' }}>{cert.issuer}</p>
                </div>
              </div>
              <span
                className="flex-shrink-0 px-3 py-1 rounded-full font-body text-xs"
                style={{ backgroundColor: 'var(--color-surface-2)', color: 'var(--color-muted)' }}
              >
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--color-muted)' }}>
            Education
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <h3 className="font-display font-semibold text-base mb-1" style={{ color: 'var(--color-ink)' }}>
                  {edu.degree}
                </h3>
                <p className="font-body text-sm" style={{ color: 'var(--color-accent)' }}>{edu.school}</p>
                <p className="font-body text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                  {edu.location} · {edu.period}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
