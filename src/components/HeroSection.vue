<template>
  <section
    id="home"
    ref="heroSection"
    class="relative h-screen flex items-center justify-center overflow-hidden bg-[#fffbe5]"
  >
    <!-- Blob Volumétrico Animado - DETECCIÓN INTELIGENTE -->
    <div 
      v-if="performanceLevel !== 'low'"
      ref="blobContainer" 
      class="absolute inset-0 z-0 pointer-events-none"
      style="overflow: hidden;"
    >
      <div
        ref="blob"
        class="absolute opacity-0"
        style="
          top: 50%;
          left: 50%;
          width: 140vmax;
          height: 140vmax;
          transform: translate(-50%, -50%) rotate(90deg);
          transform-origin: center center;
          will-change: transform;
        "
      >
        <div
          ref="blobInner"
          class="absolute inset-0"
          :style="{
            background: `radial-gradient(
              ellipse 42% 32% at 50% 18%,
              rgba(201, 81, 54, ${performanceLevel === 'medium' ? 0.85 : 0.95}) 0%,
              rgba(201, 81, 54, ${performanceLevel === 'medium' ? 0.72 : 0.82}) 18%,
              rgba(201, 81, 54, ${performanceLevel === 'medium' ? 0.58 : 0.68}) 32%,
              rgba(201, 81, 54, ${performanceLevel === 'medium' ? 0.42 : 0.52}) 46%,
              rgba(201, 81, 54, ${performanceLevel === 'medium' ? 0.25 : 0.35}) 60%,
              rgba(201, 81, 54, ${performanceLevel === 'medium' ? 0.12 : 0.20}) 72%,
              rgba(201, 81, 54, ${performanceLevel === 'medium' ? 0.04 : 0.08}) 84%,
              transparent 95%
            )`,
            filter: `blur(${performanceLevel === 'medium' ? '100px' : '130px'})`
          }"
        ></div>
      </div>
    </div>
    
    <!-- Gradiente estático para dispositivos de gama baja -->
    <div 
      v-else
      class="absolute inset-0 z-0 pointer-events-none"
      style="
        background: radial-gradient(
          ellipse 60% 50% at 50% 40%,
          rgba(201, 81, 54, 0.5) 0%,
          rgba(201, 81, 54, 0.25) 40%,
          rgba(201, 81, 54, 0.08) 70%,
          transparent 100%
        );
      "
    ></div>

    <!-- SVG Destello Animado - HIGH y MEDIUM -->
    <svg
      v-if="performanceLevel === 'high' || (performanceLevel === 'medium' && !isMobile)"
      class="absolute inset-0 w-full h-full pointer-events-none z-5"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: transparent; stop-opacity: 0" />
          <stop offset="35%" style="stop-color: #E44D2E; stop-opacity: 0.6" />
          <stop offset="50%" style="stop-color: #E44D2E; stop-opacity: 1" />
          <stop offset="65%" style="stop-color: #E44D2E; stop-opacity: 0.6" />
          <stop offset="100%" style="stop-color: transparent; stop-opacity: 0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <path ref="shimmer1" d="M 25 -15 C 15 0, 10 20, 12 40 C 14 55, 20 65, 30 70 C 38 74, 46 74, 52 70 C 58 66, 62 58, 62 48 C 62 38, 58 30, 50 26 C 42 22, 32 24, 26 32 C 22 38, 22 46, 26 52 C 30 58, 38 60, 46 58 C 56 55, 68 48, 78 38 C 88 28, 98 15, 108 0 C 115 -10, 120 -18, 125 -25" stroke="url(#shimmerGradient)" stroke-width="0.15" fill="none" filter="url(#glow)" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer2" d="M 115 15 C 100 25, 85 38, 72 52 C 58 68, 48 82, 42 90 C 38 95, 36 98, 36 98 C 36 98, 38 94, 42 88 C 48 78, 56 68, 62 60 C 68 52, 72 46, 74 42 C 76 38, 76 36, 74 36 C 72 36, 68 38, 62 44 C 54 52, 44 64, 32 78 C 20 92, 8 104, -4 110 C -12 114, -18 115, -22 114" stroke="url(#shimmerGradient)" stroke-width="0.15" fill="none" filter="url(#glow)" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer3" d="M -20 120 C -5 105, 5 90, 18 75 C 31 60, 42 48, 50 40 C 54 36, 58 34, 62 34 C 66 34, 70 36, 72 40 C 74 44, 74 48, 72 52 C 70 56, 66 58, 62 58 C 58 58, 54 56, 52 52 C 52 48, 54 44, 58 42 C 64 40, 72 38, 82 30 C 92 22, 102 12, 112 0 C 118 -8, 122 -15, 125 -22" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" filter="url(#glow)" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer4" d="M 50 120 C 48 105, 46 90, 48 75 C 50 60, 54 48, 58 38 C 60 32, 62 28, 64 26 C 66 24, 70 24, 72 26 C 74 28, 76 32, 76 36 C 76 40, 74 44, 70 46 C 66 48, 62 46, 60 42 C 60 38, 62 34, 66 32 C 72 30, 80 28, 90 22 C 100 16, 110 8, 118 0 C 122 -6, 125 -12, 128 -18" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" filter="url(#glow)" stroke-linecap="round" class="shimmer-line" opacity="0" />
    </svg>

    <!-- VIDEO CARD - Optimizado según rendimiento -->
    <div
      ref="videoCard"
      class="relative z-10 w-[85%] sm:w-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-xl border border-white/10 mb-16 md:mb-20"
      :style="{
        transition: performanceLevel === 'low' ? 'none' : 'transform 0.3s ease-out',
        backdropFilter: performanceLevel === 'low' ? 'blur(4px)' : 'blur(12px)'
      }"
    >
      <video 
        ref="videoEl" 
        class="w-full h-full object-cover" 
        :style="{
          transition: performanceLevel === 'high' ? 'filter 0.3s ease-out' : 'filter 0.2s ease-out'
        }" 
        autoplay 
        muted 
        loop 
        playsinline 
        preload="auto"
      >
        <source src="/src/assets/demo2.webm" type="video/webm" />
      </video>
    </div>

    <!-- TEXT + CTA -->
    <div ref="textBlock" class="absolute bottom-4 sm:bottom-2 text-center z-20 px-4 sm:px-6 opacity-0 transition-all duration-300 ease-out max-w-4xl">
      <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#433623] drop-shadow-xl mb-4 sm:mb-5 md:mb-6 px-2">
        {{ $t('hero.tagline') }}
      </p>
      <button ref="ctaButton" @click="scrollToContact" class="px-8 sm:px-10 md:px-12 py-3 md:py-4 bg-gradient-to-r from-[#d4745e] to-[#bf6840] text-white text-sm sm:text-base font-semibold rounded-full shadow-xl transition-all duration-500 hover:shadow-[#d4745e]/50 hover:scale-110 opacity-0">
        {{ $t('hero.cta') }}
      </button>
    </div>

    <!-- Debug info (eliminar en producción) -->
    <div v-if="showDebug" class="fixed top-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 font-mono">
      <div>Performance: <strong>{{ performanceLevel.toUpperCase() }}</strong></div>
      <div>Score: {{ performanceScore }}</div>
      <div>Device: {{ deviceInfo.device }}</div>
      <div>RAM: {{ deviceInfo.memory }}GB</div>
      <div>CPU: {{ deviceInfo.cores }} cores</div>
      <div>GPU: {{ deviceInfo.gpu }}</div>
      <div>Mobile: {{ isMobile ? 'Yes' : 'No' }}</div>
      <div>FPS: {{ currentFPS }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const heroSection = ref(null)
const blobContainer = ref(null)
const blob = ref(null)
const blobInner = ref(null)
const shimmer1 = ref(null)
const shimmer2 = ref(null)
const shimmer3 = ref(null)
const shimmer4 = ref(null)
const videoCard = ref(null)
const videoEl = ref(null)
const textBlock = ref(null)
const ctaButton = ref(null)
const { smoothScrollTo } = useSmoothScroll({ duration: 900, offset: 80 })

// Sistema de detección inteligente de rendimiento
const performanceScore = ref(0)
const performanceLevel = ref('high') // 'high', 'medium', 'low'
const deviceInfo = ref({})
const currentFPS = ref(60)
const showDebug = ref(false) // Cambiar a true para ver debug info

const isMobile = computed(() => window.innerWidth < 768)

// Función de detección de rendimiento
const detectPerformance = () => {
  let score = 100

  // 1. Hardware Detection
  const memory = navigator.deviceMemory || 4
  const cores = navigator.hardwareConcurrency || 2
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

  deviceInfo.value = {
    memory,
    cores,
    device: isMobile.value ? 'Mobile' : 'Desktop',
    gpu: 'Unknown'
  }

  // 2. Memory Score (0-30 puntos)
  if (memory >= 8) score += 0
  else if (memory >= 4) score -= 10
  else score -= 25

  // 3. CPU Score (0-25 puntos)
  if (cores >= 8) score += 0
  else if (cores >= 4) score -= 8
  else score -= 20

  // 4. Connection Score (0-15 puntos)
  if (connection) {
    const effectiveType = connection.effectiveType
    if (effectiveType === '4g') score += 0
    else if (effectiveType === '3g') score -= 10
    else score -= 15
  }

  // 5. GPU Detection (0-20 puntos)
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        deviceInfo.value.gpu = renderer
        
        // GPU potente (Apple, NVIDIA, AMD high-end)
        if (/(Apple|NVIDIA|AMD|Mali-G|Adreno 6|Adreno 7)/i.test(renderer)) {
          score += 0
        }
        // GPU media (Adreno 5xx, Mali-G5x)
        else if (/(Adreno 5|Mali-G5)/i.test(renderer)) {
          score -= 10
        }
        // GPU baja
        else {
          score -= 20
        }
      }
    }
  } catch (e) {
    score -= 15
  }

  // 6. FPS Test (0-10 puntos) - Test real de rendimiento
  let frameCount = 0
  let lastTime = performance.now()
  let testDuration = 1000 // 1 segundo

  const measureFPS = () => {
    frameCount++
    const currentTime = performance.now()
    
    if (currentTime - lastTime >= testDuration) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
      currentFPS.value = fps
      
      if (fps >= 55) score += 0
      else if (fps >= 40) score -= 5
      else score -= 10

      // Determinar nivel final
      performanceScore.value = Math.max(0, Math.min(100, score))
      
      if (performanceScore.value >= 75) {
        performanceLevel.value = 'high'
      } else if (performanceScore.value >= 50) {
        performanceLevel.value = 'medium'
      } else {
        performanceLevel.value = 'low'
      }

      console.log('🎯 Performance Detection:', {
        score: performanceScore.value,
        level: performanceLevel.value,
        fps,
        device: deviceInfo.value
      })
    } else {
      requestAnimationFrame(measureFPS)
    }
  }

  requestAnimationFrame(measureFPS)
}

// Scroll handler optimizado
let scrollTicking = false
const handleScroll = () => {
  if (scrollTicking) return
  scrollTicking = true
  
  requestAnimationFrame(() => {
    const scroll = window.scrollY
    
    // Blur según performance
    if (videoEl.value) {
      const maxBlur = performanceLevel.value === 'high' ? 12 : 
                     performanceLevel.value === 'medium' ? 8 : 4
      const blurSpeed = performanceLevel.value === 'high' ? 50 : 80
      const blur = scroll > 0 ? Math.min((scroll / blurSpeed) * maxBlur, maxBlur) : 0
      videoEl.value.style.filter = `blur(${blur}px)`
    }

    // Scale solo en high y medium desktop
    if (videoCard.value && performanceLevel.value !== 'low' && !isMobile.value) {
      const scale = 1 + Math.min(scroll / 5000, 0.1)
      videoCard.value.style.transform = `scale(${scale})`
    }

    // Fade out texto
    if (textBlock.value) {
      const opacity = Math.max(1 - scroll / 400, 0)
      const translateY = -Math.min(scroll / 3, 100)
      textBlock.value.style.opacity = opacity
      textBlock.value.style.transform = `translateY(${translateY}px)`
    }
    
    scrollTicking = false
  })
}

onMounted(() => {
  // Detectar rendimiento primero
  detectPerformance()

  // Esperar a que termine la detección (1 segundo)
  setTimeout(() => {
    // ===== LUZ VOLUMÉTRICA =====
    if (blob.value && blobInner.value && performanceLevel.value !== 'low') {
      gsap.to(blob.value, {
        opacity: performanceLevel.value === 'high' ? 1 : 0.8,
        duration: 2.5,
        ease: "power2.out"
      })

      // Rotación según performance
      const rotationDuration = performanceLevel.value === 'high' ? 42 : 
                              performanceLevel.value === 'medium' ? 55 : 70
      
      gsap.to(blob.value, {
        rotation: 800,
        duration: rotationDuration,
        repeat: -1,
        ease: "none"
      })

      // Respiración del blur
      if (performanceLevel.value === 'high') {
        // Animación completa en HIGH
        gsap.to(blobInner.value, {
          onUpdate: function() {
            const progress = (Date.now() % 20000) / 20000
            const blurValue = 130 + Math.sin(progress * Math.PI * 2) * 45
            blobInner.value.style.filter = `blur(${blurValue}px)`
          },
          duration: 20,
          repeat: -1,
          ease: "none"
        })
      } else {
        // Respiración suave en MEDIUM
        gsap.to(blobInner.value, {
          onUpdate: function() {
            const progress = (Date.now() % 16000) / 16000
            const blurValue = 100 + Math.sin(progress * Math.PI * 2) * 25
            blobInner.value.style.filter = `blur(${blurValue}px)`
          },
          duration: 16,
          repeat: -1,
          ease: "none"
        })
      }
    }

    // ===== SHIMMERS =====
    if (performanceLevel.value === 'high' || (performanceLevel.value === 'medium' && !isMobile.value)) {
      const animateShimmer = (shimmerRef, delay = 0) => {
        if (!shimmerRef.value) return
        const pathLength = shimmerRef.value.getTotalLength()
        shimmerRef.value.style.strokeDasharray = pathLength
        shimmerRef.value.style.strokeDashoffset = pathLength
        
        const repeatDelay = performanceLevel.value === 'high' ? 16 : 20
        
        gsap.timeline({ delay, repeat: -1, repeatDelay })
          .to(shimmerRef.value, { opacity: 1, duration: 0.3, ease: "power1.in" })
          .to(shimmerRef.value, { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" }, "<")
          .to(shimmerRef.value, { opacity: 0, duration: 0.5, ease: "power1.out" }, "-=0.5")
      }

      animateShimmer(shimmer1, 3)
      animateShimmer(shimmer2, 7)
      animateShimmer(shimmer3, 11)
      animateShimmer(shimmer4, 15)
    }

    // ===== ENTRADA =====
    const entryDuration = performanceLevel.value === 'high' ? 1.6 : 
                         performanceLevel.value === 'medium' ? 1.3 : 1.0
    
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(videoCard.value, 
      { opacity: 0, scale: 0.95, filter: "blur(15px)" },
      { 
        opacity: 1, 
        scale: 1, 
        filter: "blur(0px)", 
        duration: entryDuration, 
        ease: "power3.out" 
      }
    )
    .to(textBlock.value, { 
      opacity: 1, 
      y: -10, 
      duration: 0.9, 
      ease: "power2.out" 
    }, "-=0.6")
    .to(ctaButton.value, { 
      opacity: 1, 
      scale: 1.03, 
      duration: 0.7, 
      ease: "back.out(1.5)" 
    }, "-=0.3")
  }, 1100)

  window.addEventListener('scroll', handleScroll, { passive: true })

  // Atajo para debug (Ctrl + Shift + D)
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      showDebug.value = !showDebug.value
    }
  }
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToContact = () => smoothScrollTo('#contact')
</script>

<style scoped>
.shimmer-line {
  opacity: 1;
  will-change: stroke-dashoffset, opacity;
}

/* Optimizaciones adaptativas */
@media (max-width: 768px) {
  section {
    height: 100vh;
    height: 100dvh;
  }
}

/* Will-change basado en performance */
[ref="videoCard"], 
[ref="videoEl"], 
[ref="textBlock"], 
[ref="blob"] {
  will-change: auto;
}

@media (min-width: 769px) {
  [ref="videoCard"]:not(.low-performance), 
  [ref="videoEl"]:not(.low-performance), 
  [ref="textBlock"]:not(.low-performance), 
  [ref="blob"]:not(.low-performance) {
    will-change: transform;
  }
}

/* Ajustes pantallas pequeñas */
@media (max-width: 380px) {
  [ref="textBlock"] p {
    font-size: 1.125rem;
  }
  
  [ref="ctaButton"] {
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
  }
}

/* Hardware acceleration */
video {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
</style>