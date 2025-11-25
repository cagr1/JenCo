/**
 * Scroll Animation Composable
 * Uses Motion.dev for scroll-triggered animations
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import { useIntersectionObserver } from '@vueuse/core'

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    initial = { opacity: 0, y: 50 },
    enter = { opacity: 1, y: 0 },
    leave = { opacity: 0, y: 50 }
  } = options

  const target = ref(null)
  const isVisible = ref(false)

  const { motionInstance } = useMotion(target, {
    initial,
    enter: {
      ...enter,
      transition: {
        duration: 800,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    leave: {
      ...leave,
      transition: {
        duration: 400
      }
    }
  })

  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
        if (once) stop()
      } else if (!once) {
        isVisible.value = false
      }
    },
    {
      threshold,
      rootMargin
    }
  )

  onMounted(() => {
    if (isVisible.value) {
      motionInstance.value?.apply('enter')
    }
  })

  return {
    target,
    isVisible,
    motionInstance
  }
}

