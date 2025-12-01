import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

/**
 * Composable para el efecto de blob volumétrico animado
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.autoDetectLightMode - Detectar automáticamente modo ligero para dispositivos de bajo rendimiento
 * @param {number} options.rotationDuration - Duración de la rotación completa en segundos (default: 42)
 * @param {number} options.pulseDuration - Duración del pulso en segundos (default: 8)
 * @param {number} options.fadeInDuration - Duración del fade in inicial en segundos (default: 2.2)
 * @param {string} options.gradientColors - Colores del gradiente radial (default: basado en rgba(201,81,54))
 * @returns {Object} Referencias y funciones de control
 */
export function useBlobEffect(options = {}) {
  const {
    autoDetectLightMode = true,
    rotationDuration = 42,
    pulseDuration = 8,
    fadeInDuration = 2.2,
    gradientColors = 'rgba(201,81,54,0.95) 0%, rgba(201,81,54,0.82) 18%, rgba(201,81,54,0.68) 32%, rgba(201,81,54,0.52) 46%, rgba(201,81,54,0.35) 60%, rgba(201,81,54,0.20) 72%, rgba(201,81,54,0.08) 84%, transparent 95%'
  } = options

  // Referencias DOM
  const blobContainer = ref(null)
  const blob = ref(null)
  const blobInner = ref(null)
  
  // Estado
  const lightMode = ref(false)
  let demoWrapper = null

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
    if (!blob.value || !blobInner.value) return

    try {
      // Fade in inicial
      gsap.to(blob.value, {
        opacity: 1,
        duration: fadeInDuration,
        ease: 'power2.out'
      })

      // Rotación continua
      gsap.to(blob.value, {
        rotation: 800,
        duration: rotationDuration,
        repeat: -1,
        ease: 'none'
      })

      // Pulso de escala y opacidad
      gsap.to(blobInner.value, {
        scale: 1.06,
        opacity: 0.9,
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
      background: `radial-gradient(ellipse 42% 32% at 50% 18%, ${gradientColors})`
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
      }
    } else {
      animateBlob()
    }
  })

  // Limpieza
  onUnmounted(() => {
    stopBlob()
    if (demoWrapper && demoWrapper.parentNode) {
      demoWrapper.parentNode.removeChild(demoWrapper)
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