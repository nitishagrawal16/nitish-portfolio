import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: shouldReduce ? 0 : -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: logo + nav links */}
        <div className="flex items-center gap-14">
          <a href="#hero" className="font-display font-bold text-2xl tracking-tight" style={{ color: 'var(--color-ink)' }}>
            NA<span style={{ color: 'var(--color-accent)' }}>.</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: 'var(--color-ink)' }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: CTA */}
        <a
          href="mailto:agrawalnitish16@gmail.com"
          className="hidden md:block px-5 py-2 rounded-full font-body text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'var(--color-ink)', color: '#fff' }}
        >
          Work With Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: 'var(--color-ink)', transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
          <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: 'var(--color-ink)', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: 'var(--color-ink)', transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ backgroundColor: 'rgba(255,255,255,0.97)', borderBottom: '1px solid var(--color-border)' }}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-body text-base font-medium"
              style={{ color: 'var(--color-ink)' }}
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:agrawalnitish16@gmail.com"
            className="px-5 py-2.5 rounded-full font-body text-sm font-semibold text-center"
            style={{ backgroundColor: 'var(--color-ink)', color: '#fff' }}
          >
            Work With Me
          </a>
        </div>
      )}
    </motion.header>
  )
}
