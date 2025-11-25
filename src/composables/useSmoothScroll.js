/**
 * Smooth Scroll Composable
 * Alternative to Lenis - Native smooth scroll implementation
 */
import { onMounted, onUnmounted } from 'vue'

export function useSmoothScroll(options = {}) {
  const {
    duration = 800,
    easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    offset = 0
  } = options

  let isScrolling = false
  let scrollTimeout = null

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const smoothScrollTo = (target, customOffset = offset) => {
    if (isScrolling) return

    const startPosition = window.pageYOffset
    const targetElement = typeof target === 'string' 
      ? document.querySelector(target) 
      : target
    
    if (!targetElement) return

    const targetPosition = targetElement.getBoundingClientRect().top + startPosition - customOffset
    const distance = targetPosition - startPosition
    let startTime = null

    isScrolling = true

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        isScrolling = false
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const handleAnchorClick = (e) => {
    const href = e.target.getAttribute('href')
    if (href && href.startsWith('#')) {
      e.preventDefault()
      smoothScrollTo(href)
    }
  }

  onMounted(() => {
    // Add smooth scroll behavior to CSS
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Handle anchor clicks
    document.addEventListener('click', handleAnchorClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleAnchorClick)
    if (scrollTimeout) clearTimeout(scrollTimeout)
  })

  return {
    smoothScrollTo,
    isScrolling: () => isScrolling
  }
}

