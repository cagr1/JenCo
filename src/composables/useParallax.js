/**
 * Parallax Effect Composable
 * Creates parallax scrolling effects using Motion.dev
 */
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'
import { useScroll } from '@vueuse/core'

export function useParallax(speed = 0.5) {
  const element = ref(null)
  const { y: scrollY } = useScroll(window)

  const motionInstance = useMotion(element, {
    scroll: {
      y: {
        value: (v) => v * speed,
        direction: 'down'
      }
    }
  })

  return {
    element,
    motionInstance
  }
}

