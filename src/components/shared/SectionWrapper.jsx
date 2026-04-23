import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionWrapper({ children, id, className = '', style, delay = 0 }) {
  const shouldReduce = useReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  )
}
