import SectionWrapper from './shared/SectionWrapper'
import { certifications, education } from '../data/content'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="py-20 md:py-28 px-6" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--color-amber)' }}>
            Credentials
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--color-charcoal)' }}
          >
            Learning never stops
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: 'var(--color-cream)',
                borderTop: '3px solid var(--color-amber)',
                boxShadow: '0 2px 16px rgba(139,115,85,0.09)',
              }}
            >
              <h3
                className="font-display font-bold mb-2 leading-snug"
                style={{ fontSize: '1.15rem', color: 'var(--color-charcoal)' }}
              >
                {cert.title}
              </h3>
              <p className="font-body text-sm font-medium" style={{ color: 'var(--color-amber)' }}>{cert.issuer}</p>
              <p className="font-body text-xs mt-1" style={{ color: 'var(--color-brown)' }}>{cert.date}</p>
            </div>
          ))}
        </div>

        <div className="border-t pt-12" style={{ borderColor: 'rgba(139,115,85,0.20)' }}>
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--color-brown)' }}>
            Education
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: 'var(--color-cream)', boxShadow: '0 2px 12px rgba(139,115,85,0.07)' }}
              >
                <h3 className="font-display font-bold text-base mb-1" style={{ color: 'var(--color-charcoal)' }}>
                  {edu.degree}
                </h3>
                <p className="font-body text-sm font-medium" style={{ color: 'var(--color-amber)' }}>{edu.school}</p>
                <p className="font-body text-xs mt-1" style={{ color: 'var(--color-brown)' }}>{edu.location} · {edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
