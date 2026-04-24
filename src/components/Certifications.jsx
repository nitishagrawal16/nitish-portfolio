import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certifications, education } from '../data/content'
import udacityLogo from '../assets/udacity.png'
import ahaLogo from '../assets/aha.png'
import concordiaLogo from '../assets/concordia.png'
import radhaLogo from '../assets/radha.jpeg'

const certLogoMap = {
  'Udacity': udacityLogo,
  'Aha!':    ahaLogo,
}

const eduLogoMap = {
  'Concordia University':                          concordiaLogo,
  'Radharaman Institute of Research and Technology': radhaLogo,
}

const logoStyle = {
  height: '34px',
  width: 'auto',
  maxWidth: '130px',
  objectFit: 'contain',
  objectPosition: 'left center',
  mixBlendMode: 'multiply',
}

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
          {certifications.map((cert, i) => {
            const logo = certLogoMap[cert.issuer]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                {/* Logo header — same white strip as Experience cards */}
                <div
                  className="px-5 sm:px-6 pt-5 pb-4 flex items-center justify-between gap-4"
                  style={{ backgroundColor: '#fff' }}
                >
                  {logo ? (
                    <img src={logo} alt={cert.issuer} style={logoStyle} />
                  ) : (
                    <span className="font-display font-bold text-sm" style={{ color: 'var(--color-ink)' }}>
                      {cert.issuer}
                    </span>
                  )}
                  <span
                    className="flex-shrink-0 px-3 py-1 rounded-full font-body text-xs"
                    style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-muted)' }}
                  >
                    {cert.date}
                  </span>
                </div>

                <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

                {/* Title row */}
                <div className="px-5 sm:px-6 py-4">
                  <h3 className="font-display font-semibold text-base" style={{ color: 'var(--color-ink)' }}>
                    {cert.title}
                  </h3>
                  <p className="font-body text-sm mt-0.5" style={{ color: 'var(--color-accent)' }}>
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            )
          })}
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
            {education.map((edu, i) => {
              const logo = eduLogoMap[edu.school]
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                >
                  {/* Logo header */}
                  <div
                    className="px-6 pt-5 pb-4 flex items-center justify-between gap-4"
                    style={{ backgroundColor: '#fff' }}
                  >
                    {logo ? (
                      <img src={logo} alt={edu.school} style={logoStyle} />
                    ) : (
                      <span className="font-display font-bold text-sm" style={{ color: 'var(--color-ink)' }}>
                        {edu.school}
                      </span>
                    )}
                    <span
                      className="flex-shrink-0 px-3 py-1 rounded-full font-body text-xs"
                      style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-muted)' }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

                  {/* Body */}
                  <div className="px-6 py-4">
                    <h3 className="font-display font-semibold text-base mb-1" style={{ color: 'var(--color-ink)' }}>
                      {edu.degree}
                    </h3>
                    <p className="font-body text-sm" style={{ color: 'var(--color-accent)' }}>{edu.school}</p>
                    <p className="font-body text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{edu.location}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
