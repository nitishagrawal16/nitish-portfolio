import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../data/content'

const StatusBadge = ({ status }) => {
  const colors = {
    'In Progress': { bg: 'rgba(212,168,83,0.15)', color: '#D4A853', dot: '#D4A853' },
    'Building':    { bg: 'rgba(88,166,255,0.12)', color: '#58a6ff', dot: '#58a6ff' },
    'Coming Soon': { bg: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)', dot: 'rgba(255,255,255,0.3)' },
    'Live':        { bg: 'rgba(74,222,128,0.12)', color: '#4ade80', dot: '#4ade80' },
  }
  const c = colors[status] || colors['Coming Soon']
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-body text-xs font-semibold"
      style={{ backgroundColor: c.bg, color: c.color }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.dot }} />
      {status}
    </span>
  )
}

function FeaturedCard({ project, index }) {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-3xl overflow-hidden relative"
      style={{
        background: project.gradient,
        border: '1px solid rgba(255,255,255,0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 32px 80px rgba(0,0,0,0.25)' : '0 8px 32px rgba(0,0,0,0.12)',
      }}
    >
      <div className="grid md:grid-cols-[1fr_1fr]">
        {/* Left — content */}
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <span
                className="font-display font-bold"
                style={{ fontSize: '4.5rem', lineHeight: 1, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
              >
                {project.id}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h3
              className="font-display font-bold mb-2"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              {project.title}
            </h3>
            <p className="font-body text-sm font-medium mb-5" style={{ color: project.accent }}>
              {project.subtitle}
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '380px' }}>
              {project.description}
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full font-body text-xs font-medium"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — abstract visual */}
        <div className="hidden md:flex relative overflow-hidden items-center justify-center p-10">
          {/* Glowing orb */}
          <div
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${project.accent}28 0%, transparent 70%)`,
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              transition: 'transform 0.5s ease',
              scale: hovered ? '1.2' : '1',
            }}
          />
          {/* Floating UI mockup */}
          <div className="relative z-10 w-full max-w-[260px] space-y-3">
            <motion.div
              animate={inView && !shouldReduce ? { y: [0, -6, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl p-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accent }} />
                <div className="h-2 rounded-full flex-1" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded-full w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
                <div className="h-2 rounded-full w-4/5" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                <div className="h-2 rounded-full w-3/5" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
              </div>
              <div className="mt-3 h-16 rounded-xl" style={{ background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)`, border: `1px solid ${project.accent}20` }} />
            </motion.div>
            <motion.div
              animate={inView && !shouldReduce ? { y: [0, 4, 0] } : {}}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="rounded-xl p-3 flex items-center gap-3"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ backgroundColor: `${project.accent}25` }} />
              <div className="space-y-1.5 flex-1">
                <div className="h-1.5 rounded-full w-3/4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <div className="h-1.5 rounded-full w-1/2" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
              </div>
              <div className="px-2.5 py-1 rounded-lg font-body text-xs font-semibold" style={{ backgroundColor: `${project.accent}20`, color: project.accent }}>
                Live
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: project.gradient,
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.22)' : '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      {/* Visual header */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 60% 40%, ${project.accent}22 0%, transparent 65%)`,
            transition: 'opacity 0.3s ease',
            opacity: hovered ? 1 : 0.6,
          }}
        />
        {/* Abstract grid lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.06 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0,1,2,3,4,5].map(i => (
            <line key={`v${i}`} x1={`${i * 20}%`} y1="0" x2={`${i * 20}%`} y2="100%" stroke="white" strokeWidth="1" />
          ))}
          {[0,1,2,3,4].map(i => (
            <line key={`h${i}`} x1="0" y1={`${i * 25}%`} x2="100%" y2={`${i * 25}%`} stroke="white" strokeWidth="1" />
          ))}
        </svg>

        {/* Project number */}
        <span
          className="font-display font-bold select-none"
          style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.05em', lineHeight: 1 }}
        >
          {project.id}
        </span>

        {/* Floating accent dot */}
        <motion.div
          animate={inView && !shouldReduce ? { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
          className="absolute top-5 right-5 w-3 h-3 rounded-full"
          style={{ backgroundColor: project.accent }}
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-bold text-xl mb-0.5" style={{ color: '#fff', letterSpacing: '-0.02em' }}>
              {project.title}
            </h3>
            <p className="font-body text-xs font-medium" style={{ color: project.accent }}>
              {project.subtitle}
            </p>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <p className="font-body text-sm leading-relaxed flex-1 mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full font-body text-xs"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const shouldReduce = useReducedMotion()
  const [headingRef, headingInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const featured = projects.filter(p => p.featured)
  const grid = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 overflow-x-hidden w-full" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto">

        <div ref={headingRef} className="mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            Personal Projects
          </motion.p>

          <div className="flex items-end justify-between gap-4 flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-bold"
              style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: 'var(--color-ink)', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              Built.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-sm pb-2"
              style={{ color: 'var(--color-muted)', maxWidth: '280px' }}
            >
              Hands-on projects shipping real products — from design to deployment
            </motion.p>
          </div>
        </div>

        <div className="h-px mb-12" style={{ backgroundColor: 'var(--color-border)' }} />

        {/* Featured */}
        <div className="mb-5">
          {featured.map((p, i) => <FeaturedCard key={p.id} project={p} index={i} />)}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {grid.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-body text-xs text-center mt-10"
          style={{ color: 'var(--color-muted)' }}
        >
          More projects being built with AI — check back soon.
        </motion.p>

      </div>
    </section>
  )
}
