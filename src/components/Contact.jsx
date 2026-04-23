import SectionWrapper from './shared/SectionWrapper'
import BlobBackground from './shared/BlobBackground'
import { person } from '../data/content'

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ backgroundColor: 'var(--color-charcoal)' }}
    >
      <BlobBackground color="#C4694A" opacity={0.07} className="w-[500px] h-[500px] -top-16 -right-20" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--color-amber)' }}>
          Contact
        </p>

        <h2
          className="font-display font-bold leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'var(--color-cream)' }}
        >
          Let's build something
          <span className="italic" style={{ color: 'var(--color-amber)' }}> together.</span>
        </h2>

        <p className="font-body text-base mb-10 leading-relaxed" style={{ color: 'var(--color-cream)', opacity: 0.6 }}>
          Whether you're looking for a product leader, want to discuss ideas, or just want to connect — my inbox is open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={`mailto:${person.email}`}
            className="px-7 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--color-amber)', color: 'var(--color-charcoal)' }}
          >
            {person.email}
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide border-2 transition-all hover:opacity-80"
            style={{ borderColor: 'var(--color-amber)', color: 'var(--color-amber)' }}
          >
            LinkedIn <ExternalLinkIcon />
          </a>
        </div>

        <div className="border-t pt-8" style={{ borderColor: 'rgba(245,240,232,0.12)' }}>
          <p className="font-body text-xs" style={{ color: 'var(--color-cream)', opacity: 0.35 }}>
            © {new Date().getFullYear()} Nitish Agrawal · Montreal, QC
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
