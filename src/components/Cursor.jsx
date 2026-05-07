import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [hoverState, setHoverState] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHoverEnter = () => setHoverState(true)
    const handleHoverLeave = () => setHoverState(false)

    window.addEventListener('mousemove', moveCursor)

    const interactiveSelectors = 'a, button, .interactive, [data-cursor-hover]'
    const updateListeners = () => {
      const elements = document.querySelectorAll(interactiveSelectors)
      elements.forEach(el => {
        el.addEventListener('mouseenter', handleHoverEnter)
        el.addEventListener('mouseleave', handleHoverLeave)
      })
      return elements
    }
    let elements = updateListeners()

    const observer = new MutationObserver(() => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
      elements = updateListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          marginLeft: -4,
          marginTop: -4,
        }}
      />
      <motion.div
        className={`cursor-ring ${hoverState ? 'hover' : ''}`}
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
      />
    </>
  )
}
