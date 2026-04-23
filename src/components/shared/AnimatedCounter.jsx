import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useReducedMotion } from 'framer-motion'

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1800 }) {
  const shouldReduce = useReducedMotion()
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const rafRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    if (shouldReduce) { setCount(target); return }

    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(easeInOutQuad(progress) * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, target, duration, shouldReduce])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}
