import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from './shared/AnimatedCounter'

export default function StatsBanner() {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden w-full py-24 md:py-32 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {/* Background photo with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img4.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 20%', opacity: 0.22 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,13,13,0.95) 40%, rgba(13,13,13,0.75) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
          {/* Big number */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p
              className="font-display font-bold leading-none"
              style={{ fontSize: 'clamp(4rem, 15vw, 11rem)', color: '#fff', letterSpacing: '-0.03em' }}
            >
              <AnimatedCounter target={30} prefix="+" suffix="%" duration={1600} />
            </p>
            <p className="font-body text-base mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Increase in misconduct detection
            </p>
          </motion.div>

          {/* Right metrics grid */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { val: 95, suffix: '%', label: 'UAT user acceptance rate', prefix: '' },
              { val: 100, suffix: '%', label: 'On-time delivery record', prefix: '' },
              { val: 10, suffix: '+', label: 'Years building products', prefix: '' },
              { val: 2, suffix: '', label: 'Major financial institutions', prefix: '' },
              { val: 12, suffix: '+', label: 'Models worked on at Morgan Stanley', prefix: '' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="p-5 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                <p className="font-display font-bold text-3xl" style={{ color: '#fff' }}>
                  <AnimatedCounter target={s.val} prefix={s.prefix} suffix={s.suffix} duration={1400} />
                </p>
                <p className="font-body text-xs mt-1.5 leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
