import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

/**
 * Composable para el efecto shimmer (destellos animados)
 * @param {Object} options - Opciones de configuración
 * @param {number} options.strokeWidth - Ancho del trazo (default: 0.15)
 * @param {string} options.gradientId - ID del gradiente SVG (default: 'shimmerGradient')
 * @param {number} options.animationDuration - Duración de cada animación en segundos (default: 2.4)
 * @param {number} options.repeatDelay - Delay entre repeticiones en segundos (default: 12)
 * @param {Array<number>} options.delays - Delays iniciales para cada shimmer (default: [2.5, 6.5, 10.5, 14.5])
 * @returns {Object} Referencias y funciones de control
 */
export function useShimmerEffect(options = {}) {
  const {
    strokeWidth = 0.15,
    gradientId = 'shimmerGradient',
    animationDuration = 2.4,
    repeatDelay = 12,
    delays = [2.5, 6.5, 10.5, 14.5],
    paths = 4
  } = options

  // Referencias para los paths
  const shimmerRefs =  ref(Array.from({ length: paths }, () => null))
  
  const shimmer1 = ref(null) 
  const shimmer2 = ref(null)
  const shimmer3 = ref(null)
  const shimmer4 = ref(null)
  

  const updateShimmerRefs = () => {
    shimmerRefs.value = [shimmer1.value, shimmer2.value, shimmer3.value, shimmer4.value]
  }

  // Timelines de GSAP
  const timelines = []

  /**
   * Anima un path shimmer individual
   * @param {HTMLElement} pathElement - Elemento path SVG
   * @param {number} delay - Delay inicial en segundos
   */
  const animateShimmerPath = (pathElement, delay = 0) => {
    if (!pathElement) return

    try {
      const pathLength = pathElement.getTotalLength()
      pathElement.style.strokeDasharray = pathLength
      pathElement.style.strokeDashoffset = pathLength

      const tl = gsap.timeline({ 
        delay, 
        repeat: -1, 
        repeatDelay 
      })
        .to(pathElement, { 
          opacity: 1, 
          duration: 0.25, 
          ease: 'power1.in' 
        })
        .to(pathElement, { 
          strokeDashoffset: 0, 
          duration: animationDuration, 
          ease: 'power1.inOut' 
        }, '<')
        .to(pathElement, { 
          opacity: 0, 
          duration: 0.45, 
          ease: 'power1.out' 
        }, '-=0.4')

      timelines.push(tl)
    } catch (e) {
      console.warn('Error animating shimmer path:', e)
    }
  }

  /**
   * Inicia todas las animaciones shimmer
   */
  const startShimmers = () => {
    shimmerRefs.value.forEach((ref, index) => {
      if (ref) {
        const delay = delays[index] || index * 4
        animateShimmerPath(ref, delay)
      }
    })
  }

  /**
   * Detiene todas las animaciones shimmer
   */
  const stopShimmers = () => {
    timelines.forEach(tl => {
      try {
        tl.kill()
      } catch (e) {}
    })
    timelines.length = 0
  }

  /**
   * Reinicia todas las animaciones shimmer
   */
  const restartShimmers = () => {
    stopShimmers()
    startShimmers()
  }

  /**
   * Añade un nuevo path shimmer a las referencias
   * @param {HTMLElement} pathElement - Elemento path SVG
   */
  const addShimmerRef = (pathElement) => {
    if (pathElement && !shimmerRefs.value.includes(pathElement)) {
      shimmerRefs.value.push(pathElement)
    }
  }

  /**
   * Genera el gradiente SVG para los shimmers
   */
  const getShimmerGradient = () => {
    return `
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: transparent; stop-opacity: 0" />
        <stop offset="35%" style="stop-color: #E44D2E; stop-opacity: 0.6" />
        <stop offset="50%" style="stop-color: #E44D2E; stop-opacity: 1" />
        <stop offset="65%" style="stop-color: #E44D2E; stop-opacity: 0.6" />
        <stop offset="100%" style="stop-color: transparent; stop-opacity: 0" />
      </linearGradient>
    `
  }

  /**
   * Genera los paths de ejemplo para los shimmers
   * Puedes personalizar estos paths según tus necesidades
   */
  const getDefaultShimmerPaths = () => {
    return [
      'M 25 -15 C 15 0, 10 20, 12 40 C 14 55, 20 65, 30 70 C 38 74, 46 74, 52 70 C 58 66, 62 58, 62 48 C 62 38, 58 30, 50 26 C 42 22, 32 24, 26 32 C 22 38, 22 46, 26 52 C 30 58, 38 60, 46 58 C 56 55, 68 48, 78 38 C 88 28, 98 15, 108 0 C 115 -10, 120 -18, 125 -25',
      'M 115 15 C 100 25, 85 38, 72 52 C 58 68, 48 82, 42 90 C 38 95, 36 98, 36 98 C 36 98, 38 94, 42 88 C 48 78, 56 68, 62 60 C 68 52, 72 46, 74 42 C 76 38, 76 36, 74 36 C 72 36, 68 38, 62 44 C 54 52, 44 64, 32 78 C 20 92, 8 104, -4 110 C -12 114, -18 115, -22 114',
      'M -20 120 C -5 105, 5 90, 18 75 C 31 60, 42 48, 50 40 C 54 36, 58 34, 62 34 C 66 34, 70 36, 72 40 C 74 44, 74 48, 72 52 C 70 56, 66 58, 62 58 C 58 58, 54 56, 52 52 C 52 48, 54 44, 58 42 C 64 40, 72 38, 82 30 C 92 22, 102 12, 112 0 C 118 -8, 122 -15, 125 -22',
      'M 50 120 C 48 105, 46 90, 48 75 C 50 60, 54 48, 58 38 C 60 32, 62 28, 64 26 C 66 24, 70 24, 72 26 C 74 28, 76 32, 76 36 C 76 40, 74 44, 70 46 C 66 48, 62 46, 60 42 C 60 38, 62 34, 66 32 C 72 30, 80 28, 90 22 C 100 16, 110 8, 118 0 C 122 -6, 125 -12, 128 -18'
    ]
  }

  /**
   * Obtiene atributos comunes para los paths shimmer
   */
  const getShimmerPathAttributes = () => {
    return {
      stroke: `url(#${gradientId})`,
      strokeWidth: strokeWidth.toString(),
      fill: 'none',
      strokeLinecap: 'round',
      class: 'shimmer-line',
      opacity: '0'
    }
  }

  // Inicialización
  onMounted(() => {
    updateShimmerRefs()
    // Pequeño delay para asegurar que los refs estén disponibles
    setTimeout(() => {
      startShimmers()
    }, 100)
  })

  // Limpieza
  onUnmounted(() => {
    
    stopShimmers()
  })

  return {
    // Referencias
    shimmerRefs,
    shimmer1,
    shimmer2,
    shimmer3,
    shimmer4,
    // Métodos
    //addShimmerRef,
    startShimmers,
    stopShimmers,
    //restartShimmers,
    //animateShimmerPath,
    
    // Helpers para SVG
    //getShimmerGradient,
    //getDefaultShimmerPaths,
    //getShimmerPathAttributes
  }
}

