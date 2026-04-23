import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../data/content'

const logoMap = {
  'Morgan Stanley':                    '/ms.jpg',
  'BNP Paribas':                       '/bnpp.jpg',
  'TrackTik Canada Inc.':              '/tt.png',
  'Nuance Communications (Microsoft)': '/nuance.png',
}

const MONTH_MAP = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 }

function parseDate(str) {
  if (str.trim() === 'Present') return new Date()
  const [mon, yr] = str.trim().split(' ')
  return new Date(parseInt(yr), MONTH_MAP[mon])
}

function calcDuration(period) {
  const [startStr, endStr] = period.split('—')
  const start = parseDate(startStr)
  const end   = parseDate(endStr)
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const yrs = Math.floor(totalMonths / 12)
  const mos = totalMonths % 12
  if (yrs === 0) return `${mos}m`
  if (mos === 0)  return `${yrs} yr${yrs > 1 ? 's' : ''}`
  return `${yrs} yr${yrs > 1 ? 's' : ''} ${mos}m`
}

function startYear(period) { return period.split('—')[0].trim().split(' ').pop() }
function endLabel(period)   { const e = period.split('—')[1].trim(); return e === 'Present' ? 'Now' : e.split(' ').pop() }
function isPresent(period)  { return period.split('—')[1].trim() === 'Present' }

// ── Animated timeline footer ──────────────────────────────────────────────
function PeriodBar({ period, inView, index, shouldReduce }) {
  const live     = isPresent(period)
  const duration = calcDuration(period)
  const from     = startYear(period)
  const to       = endLabel(period)

  return (
    <div
      className="px-5 sm:px-7 pb-6 pt-4"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="flex items-center gap-2.5">

        {/* Live / static dot */}
        <div className="relative flex items-center justify-center flex-shrink-0 w-3 h-3">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: live ? 'var(--color-accent)' : 'var(--color-surface-2)', border: live ? 'none' : '1.5px solid var(--color-muted)', zIndex: 1, position: 'relative' }}
          />
          {live && !shouldReduce && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: 'var(--color-accent)' }}
              animate={{ scale: [1, 2.6, 1], opacity: [0.55, 0, 0.55] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>

        {/* Start year */}
        <span
          className="font-display font-semibold text-xs flex-shrink-0"
          style={{ color: 'var(--color-muted)' }}
        >
          {from}
        </span>

        {/* Animated line */}
        <div
          className="flex-1 relative rounded-full overflow-hidden"
          style={{ height: '2px', backgroundColor: 'var(--color-surface-2)' }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)' }}
            initial={{ width: '0%' }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.9, ease: 'easeOut', delay: shouldReduce ? 0 : 0.35 + index * 0.06 }}
          />
          {/* Travelling dot that runs along the line during animation */}
          {!shouldReduce && (
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--color-accent)' }}
              initial={{ left: '0%' }}
              animate={inView ? { left: 'calc(100% - 6px)' } : {}}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 + index * 0.06 }}
            />
          )}
        </div>

        {/* End label */}
        <span
          className="font-display font-semibold text-xs flex-shrink-0"
          style={{ color: live ? 'var(--color-accent)' : 'var(--color-muted)' }}
        >
          {to}
        </span>

        {/* Duration pill */}
        <span
          className="flex-shrink-0 px-2.5 py-0.5 rounded-full font-body text-xs font-semibold"
          style={{
            backgroundColor: live ? 'rgba(212,168,83,0.12)' : 'var(--color-surface-2)',
            color: live ? 'var(--color-accent)' : 'var(--color-muted)',
          }}
        >
          {duration}
        </span>
      </div>
    </div>
  )
}

// ── Experience card ───────────────────────────────────────────────────────
function ExperienceCard({ role, company, location, period, bullets, index }) {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })
  const [hovered, setHovered] = useState(false)
  const logo = logoMap[company]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {/* ── Logo header ── */}
      <div
        className="px-5 sm:px-7 pt-6 pb-5 flex items-center justify-between gap-4"
        style={{ backgroundColor: '#fff' }}
      >
        {logo ? (
          <img
            src={logo}
            alt={company}
            style={{
              height: '34px',
              width: 'auto',
              maxWidth: '130px',
              objectFit: 'contain',
              objectPosition: 'left center',
              filter: hovered ? 'grayscale(20%) opacity(0.95)' : 'grayscale(100%) opacity(0.65)',
              mixBlendMode: 'multiply',
              transition: 'filter 0.35s ease',
            }}
          />
        ) : (
          <span className="font-display font-bold text-base" style={{ color: 'var(--color-ink)' }}>
            {company}
          </span>
        )}

        {/* Location tag replaces the period badge here */}
        <span
          className="flex-shrink-0 px-3 py-1 rounded-full font-body text-xs"
          style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-muted)' }}
        >
          {location}
        </span>
      </div>

      <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

      {/* ── Card body ── */}
      <div className="px-5 sm:px-7 py-6 flex flex-col flex-1">
        <h3
          className="font-display font-bold leading-tight mb-1"
          style={{ fontSize: '1.1rem', color: 'var(--color-ink)', letterSpacing: '-0.01em' }}
        >
          {role}
        </h3>
        <p className="font-display font-semibold text-sm mb-5" style={{ color: 'var(--color-accent)' }}>
          {company}
        </p>

        <ul className="space-y-2.5 flex-1">
          {bullets.slice(0, 3).map((bullet, i) => (
            <li key={i} className="flex gap-3 font-body text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              <span
                className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Animated period bar ── */}
      <PeriodBar period={period} inView={inView} index={index} shouldReduce={shouldReduce} />
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────
export default function Experience() {
  const shouldReduce = useReducedMotion()
  const [headingRef, headingInView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="experience" className="py-24 md:py-32 px-4 sm:px-6 overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto">

        <div ref={headingRef} className="mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            Career
          </motion.p>

          <div className="flex items-end justify-between gap-4 flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-bold"
              style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: 'var(--color-ink)', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-sm pb-2"
              style={{ color: 'var(--color-muted)', maxWidth: '260px' }}
            >
              A decade of shipping across financial services and SaaS
            </motion.p>
          </div>
        </div>

        <div className="h-px mb-12" style={{ backgroundColor: 'var(--color-border)' }} />

        <div className="grid md:grid-cols-2 gap-5">
          {experience.map((exp, i) => (
            <ExperienceCard key={i} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
