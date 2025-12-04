import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Registrar el plugin de MotionPath
gsap.registerPlugin(MotionPathPlugin)

/**
 * Composable para el efecto de blob volumétrico animado
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.autoDetectLightMode - Detectar automáticamente modo ligero para dispositivos de bajo rendimiento
 * @param {number} options.rotationDuration - Duración de la rotación completa en segundos (default: 50)
 * @param {number} options.pulseDuration - Duración del pulso en segundos (default: 10)
 * @param {number} options.fadeInDuration - Duración del fade in inicial en segundos (default: 2.5)
 * @param {string} options.gradientColors - Colores del gradiente radial (default: basado en rgba(201,81,54))
 * @returns {Object} Referencias y funciones de control
 */
export function useBlobEffect(options = {}) {
  const {
    autoDetectLightMode = true,
    rotationDuration = 50,
    pulseDuration = 10,
    fadeInDuration = 2.5,
    gradientColors = 'rgba(201,81,54,0.45) 0%, rgba(201,81,54,0.38) 12%, rgba(201,81,54,0.30) 24%, rgba(201,81,54,0.22) 36%, rgba(201,81,54,0.16) 48%, rgba(201,81,54,0.11) 60%, rgba(201,81,54,0.06) 72%, rgba(201,81,54,0.03) 84%, transparent 95%'
  } = options

  // Referencias DOM
  const blobContainer = ref(null)
  const blob = ref(null)
  const blobInner = ref(null)
  
  // Estado
  const lightMode = ref(false)
  let demoWrapper = null
  let resizeObserver = null

  // HTML para modo ligero (móviles)
  const DEMO_BLOB_HTML = `
    <div class="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
      <div class="mobile-aura-wrap">
        <div class="mobile-aura"></div>
        <div class="mobile-pulse"></div>
      </div>
    </div>
  `

  /**
   * Detecta si debemos usar el modo ligero (dispositivos de bajo rendimiento)
   */
  const detectLightMode = () => {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return true
      }

      const ua = navigator.userAgent || ''
      const isMobileUA = /Mobi|Android|iPhone|iPad|iPod|Windows Phone|Opera Mini/i.test(ua)
      const isTouch = (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || 
                      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)

      return window.innerWidth < 380 || navigator.hardwareConcurrency <= 2
    } catch (e) {
      return false
    }
  }

  /**
   * Activa el modo ligero (animaciones simplificadas para móviles)
   */
  const enableLightMode = () => {
    if (!blobContainer.value) return

    // Ocultar blob pesado
    if (blob.value) blob.value.style.display = 'none'
    if (blobInner.value) blobInner.value.style.display = 'none'

    // Agregar wrapper demo si no existe
    if (!blobContainer.value.querySelector('.blob-demo-wrapper')) {
      demoWrapper = document.createElement('div')
      demoWrapper.className = 'blob-demo-wrapper'
      demoWrapper.innerHTML = DEMO_BLOB_HTML
      blobContainer.value.appendChild(demoWrapper)
    }

    // Matar animaciones pesadas
    try {
      gsap.killTweensOf(blob.value)
      gsap.killTweensOf(blobInner.value)
    } catch (e) {}
  }

  /**
   * Desactiva el modo ligero y restaura animaciones completas
   */
  const disableLightMode = () => {
    if (!blobContainer.value) return

    // Mostrar blob original
    if (blob.value) blob.value.style.display = ''
    if (blobInner.value) blobInner.value.style.display = ''

    // Remover wrapper demo
    const existing = blobContainer.value.querySelector('.blob-demo-wrapper')
    if (existing) existing.remove()

    // Reiniciar animaciones
    animateBlob()
  }

  /**
   * Inicia las animaciones del blob
   */
  const animateBlob = () => {
    if (!blob.value || !blobInner.value || !blobContainer.value) return

    try {
      // Fade in inicial
      gsap.to(blob.value, {
        opacity: 1,
        duration: fadeInDuration,
        ease: 'power2.out'
      })

      // Obtener dimensiones reales del contenedor (la sección completa)
      const containerRect = blobContainer.value.getBoundingClientRect()
      const containerWidth = containerRect.width
      const containerHeight = containerRect.height
      
      // Calcular órbita DENTRO de los límites de la sección
      // Usamos porcentajes menores para que quede bien dentro
      const radiusX = containerWidth * 0.30
      const radiusY = containerHeight * 0.30

      // Animación orbital alrededor del perímetro
      gsap.to(blob.value, {
        motionPath: {
          path: [
            { x: radiusX, y: 0 },                           // Derecha
            { x: radiusX * 0.7, y: radiusY * 0.7 },       // Diagonal abajo-derecha
            { x: 0, y: radiusY },                          // Abajo
            { x: -radiusX * 0.7, y: radiusY * 0.7 },      // Diagonal abajo-izquierda
            { x: -radiusX, y: 0 },                         // Izquierda
            { x: -radiusX * 0.7, y: -radiusY * 0.7 },     // Diagonal arriba-izquierda
            { x: 0, y: -radiusY },                         // Arriba
            { x: radiusX * 0.7, y: -radiusY * 0.7 },      // Diagonal arriba-derecha
            { x: radiusX, y: 0 }                           // Vuelta al inicio
          ],
          curviness: 1.5,
          autoRotate: false
        },
        duration: rotationDuration,
        repeat: -1,
        ease: 'none'
      })

      // Rotación del blob sobre sí mismo
      gsap.to(blob.value, {
        rotation: 360,
        duration: rotationDuration * 0.6,
        repeat: -1,
        ease: 'none'
      })

      // Pulso de escala y opacidad
      gsap.to(blobInner.value, {
        scale: 1.08,
        opacity: 0.85,
        duration: pulseDuration,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      })
    } catch (e) {
      console.warn('Error animating blob:', e)
    }
  }

  /**
   * Detiene todas las animaciones del blob
   */
  const stopBlob = () => {
    try {
      gsap.killTweensOf(blob.value)
      gsap.killTweensOf(blobInner.value)
    } catch (e) {}
  }

  /**
   * Reinicia las animaciones del blob
   */
  const restartBlob = () => {
    stopBlob()
    if (!lightMode.value) {
      animateBlob()
    }
  }

  /**
   * Genera el estilo inline para el blob inner
   */
  const getBlobInnerStyle = () => {
    return {
      background: `radial-gradient(circle at center, ${gradientColors})`,
      filter: 'blur(90px)',
      mixBlendMode: 'normal'
    }
  }

  // Inicialización
  onMounted(() => {
    if (autoDetectLightMode) {
      lightMode.value = detectLightMode()
      
      if (lightMode.value) {
        enableLightMode()
      } else {
        animateBlob()
        
        // Observar cambios de tamaño y re-animar
        if (blobContainer.value && window.ResizeObserver) {
          resizeObserver = new ResizeObserver(() => {
            restartBlob()
          })
          resizeObserver.observe(blobContainer.value)
        }
      }
    } else {
      animateBlob()
      
      // Observar cambios de tamaño y re-animar
      if (blobContainer.value && window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => {
          restartBlob()
        })
        resizeObserver.observe(blobContainer.value)
      }
    }
  })

  // Limpieza
  onUnmounted(() => {
    stopBlob()
    if (demoWrapper && demoWrapper.parentNode) {
      demoWrapper.parentNode.removeChild(demoWrapper)
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return {
    // Referencias
    blobContainer,
    blob,
    blobInner,
    
    // Estado
    lightMode,
    
    // Métodos
    animateBlob,
    stopBlob,
    restartBlob,
    enableLightMode,
    disableLightMode,
    detectLightMode,
    getBlobInnerStyle
  }
}






