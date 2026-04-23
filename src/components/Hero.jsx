import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { person } from '../data/content'

const FONT_SEQUENCE = [
  { family: "'Bebas Neue', sans-serif",        spacing: '0.02em'  },
  { family: "'Raleway', sans-serif",            spacing: '0.02em'  },
  { family: "'Cormorant Garamond', serif",      spacing: '-0.01em' },
  { family: "'Cinzel', serif",                 spacing: '0.01em'  },
  { family: "'Pacifico', cursive",             spacing: '0em'     },
  { family: "'Orbitron', sans-serif",           spacing: '-0.02em' },
  { family: "'Righteous', sans-serif",         spacing: '0em'     },
  { family: "'Space Grotesk', sans-serif",     spacing: '-0.035em'},
]

// Delays decelerate like a slot machine stopping
const DELAYS = [90, 110, 140, 180, 240, 320, 440]

function useFontRoulette(shouldReduce) {
  const [step, setStep] = useState(shouldReduce ? FONT_SEQUENCE.length - 1 : 0)

  useEffect(() => {
    if (shouldReduce) return
    if (step >= FONT_SEQUENCE.length - 1) return
    const t = setTimeout(() => setStep(s => s + 1), DELAYS[step] ?? 200)
    return () => clearTimeout(t)
  }, [step, shouldReduce])

  return FONT_SEQUENCE[step]
}

function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
    </svg>
  )
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  const shouldReduce = useReducedMotion()
  const currentFont = useFontRoulette(shouldReduce)

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-x-hidden w-full"
      style={{ backgroundColor: '#fff' }}
    >
      {/* ── img2: full-height faded photo — right side, desktop only ── */}
      <div className="absolute inset-y-0 right-0 z-0 hidden md:block" style={{ width: '58%' }}>
        <img
          src="/img2.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: '40% 15%' }}
        />

        {/* Amber brand wash — ties the photo to the palette */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(212,168,83,0.06)' }}
        />

        {/* Left fade — must be total white so text area is clean */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #fff 0%, rgba(255,255,255,0.95) 8%, rgba(255,255,255,0.4) 28%, rgba(255,255,255,0.05) 50%, transparent 100%)',
          }}
        />

        {/* Bottom fade — blends into the next section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.75) 78%, #fff 100%)',
          }}
        />
      </div>

      {/* Mobile: slim top photo strip with heavy fade to white */}
      <div className="md:hidden absolute top-16 inset-x-0 z-0" style={{ height: '260px' }}>
        <img
          src="/img2.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 12%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, #fff 88%)' }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-24">
        <motion.div
          variants={shouldReduce ? {} : container}
          initial="hidden"
          animate="visible"
          className="max-w-[600px]"
        >
          {/* Eyebrow */}
          <motion.p
            variants={shouldReduce ? {} : item}
            className="font-body text-sm font-medium mb-6 flex items-center gap-3"
            style={{ color: 'var(--color-muted)' }}
          >
            <span
              className="inline-block w-7 h-px"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            Hello, I'm
          </motion.p>

          {/* Name — the single most important element on the page */}
          <motion.h1
            variants={shouldReduce ? {} : item}
            className="font-bold leading-[0.88] mb-8"
            style={{
              fontSize: 'clamp(2.8rem, 7.5vw, 7rem)',
              letterSpacing: currentFont.spacing,
              color: 'var(--color-ink)',
              fontFamily: currentFont.family,
              transition: 'font-family 0.05s, letter-spacing 0.12s ease',
            }}
          >
            Nitish<br />Agrawal
          </motion.h1>

          {/* Title divider row */}
          <motion.div
            variants={shouldReduce ? {} : item}
            className="flex items-center gap-3 mb-8 flex-wrap"
          >
            <span
              className="h-px w-8 flex-shrink-0"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <span
              className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.12em] sm:tracking-[0.2em]"
              style={{ color: 'var(--color-ink)' }}
            >
              Senior Product Manager
            </span>
            <span className="hidden sm:inline" style={{ color: 'var(--color-border)', fontSize: '1.2rem' }}>·</span>
            <span
              className="font-display text-xs sm:text-sm uppercase tracking-[0.08em] sm:tracking-[0.14em]"
              style={{ color: 'var(--color-muted)' }}
            >
              Financial Services
            </span>
          </motion.div>

          {/* Credential pills — fast credibility signals for recruiters */}
          <motion.div
            variants={shouldReduce ? {} : item}
            className="flex flex-wrap gap-2.5 mb-10"
          >
            {[
              { label: 'Morgan Stanley', accent: true },
              { label: '10+ Years Experience', accent: false },
              { label: 'AI-Native Builder', accent: false },
              { label: 'Montreal, QC', accent: false },
            ].map(({ label, accent }) => (
              <span
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-semibold"
                style={{
                  backgroundColor: accent ? 'rgba(212,168,83,0.1)' : 'var(--color-surface)',
                  border: `1px solid ${accent ? 'rgba(212,168,83,0.35)' : 'var(--color-border)'}`,
                  color: accent ? 'var(--color-ink)' : 'var(--color-muted)',
                }}
              >
                {accent && (
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                )}
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={shouldReduce ? {} : item}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="#about"
              className="px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all hover:opacity-80"
              style={{ backgroundColor: 'var(--color-ink)', color: '#fff' }}
            >
              View My Work →
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full font-body font-semibold text-sm border-2 transition-all hover:bg-[var(--color-surface)]"
              style={{ borderColor: 'var(--color-ink)', color: 'var(--color-ink)' }}
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${person.email}`}
              className="w-12 h-12 flex items-center justify-center rounded-full border transition-all hover:scale-105"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)' }}
              aria-label="Send email"
            >
              <MailIcon />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator — bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-6 hidden md:flex items-center gap-3"
        >
          <motion.div
            className="w-px"
            style={{ height: '40px', backgroundColor: 'var(--color-border)' }}
            animate={shouldReduce ? {} : { scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            style={{ transformOrigin: 'top', backgroundColor: 'var(--color-border)' }}
          />
          <span
            className="font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-muted)' }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
