import SectionWrapper from './shared/SectionWrapper'
import AnimatedCounter from './shared/AnimatedCounter'
import { person, about, stats } from '../data/content'

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 md:py-32 px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs uppercase tracking-[0.3em] mb-10" style={{ color: 'var(--color-amber)' }}>
          About
        </p>

        <div className="grid md:grid-cols-[1fr_320px] gap-14 items-start">
          {/* Left: bio */}
          <div>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-charcoal)' }}
            >
              Product thinker.<br />
              Data-driven.<br />
              <span className="italic" style={{ color: 'var(--color-terracotta)' }}>Human-focused.</span>
            </h2>

            <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--color-charcoal)', opacity: 0.75 }}>
              {about.bio}
            </p>

            <div className="flex items-center gap-2 font-body text-sm mb-10" style={{ color: 'var(--color-brown)' }}>
              <PinIcon />
              <span>{person.location}</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{
                    backgroundColor: 'var(--color-cream-dark)',
                    borderLeft: '3px solid var(--color-amber)',
                    boxShadow: '0 2px 16px rgba(139,115,85,0.10)',
                  }}
                >
                  <div
                    className="font-display font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--color-charcoal)' }}
                  >
                    <AnimatedCounter prefix={stat.prefix} target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="font-body text-xs leading-snug" style={{ color: 'var(--color-brown)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex flex-col items-center md:items-end gap-4 order-first md:order-last">
            <div className="relative">
              {/* Decorative amber ring offset behind the photo */}
              <div
                className="absolute rounded-3xl"
                style={{
                  inset: 0,
                  transform: 'translate(10px, 10px)',
                  backgroundColor: 'var(--color-amber)',
                  opacity: 0.25,
                  borderRadius: '1.5rem',
                  zIndex: 0,
                }}
              />
              {/* Terracotta accent dot */}
              <div
                className="absolute w-5 h-5 rounded-full"
                style={{
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: 'var(--color-terracotta)',
                  opacity: 0.7,
                  zIndex: 2,
                }}
              />
              <img
                src="/pic.jpg"
                alt="Nitish Agrawal"
                className="relative rounded-3xl object-cover"
                style={{
                  width: '280px',
                  height: '340px',
                  zIndex: 1,
                  border: '3px solid var(--color-amber)',
                  boxShadow: '0 8px 32px rgba(139,115,85,0.18)',
                }}
              />
            </div>

            <div className="text-center md:text-right">
              <p className="font-display font-bold text-lg" style={{ color: 'var(--color-charcoal)' }}>
                {person.name}
              </p>
              <p className="font-body text-sm" style={{ color: 'var(--color-amber)' }}>
                {person.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
