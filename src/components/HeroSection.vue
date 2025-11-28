<template>
  <section
    id="home"
    ref="heroSection"
    class="relative h-screen flex items-center justify-center overflow-hidden bg-[#fffbe5]"
  >
    <!-- Blob Volumétrico (light, no blur animado) -->
    <div ref="blobContainer" class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        ref="blob"
        class="absolute opacity-0"
        style="top:50%; left:50%; width:140vmax; height:140vmax; transform:translate(-50%,-50%) rotate(90deg); transform-origin:center center; will-change:transform;"
      >
        <div
          ref="blobInner"
          class="absolute inset-0"
          :style="{
            background: 'radial-gradient(ellipse 42% 32% at 50% 18%, rgba(201,81,54,0.95) 0%, rgba(201,81,54,0.82) 18%, rgba(201,81,54,0.68) 32%, rgba(201,81,54,0.52) 46%, rgba(201,81,54,0.35) 60%, rgba(201,81,54,0.20) 72%, rgba(201,81,54,0.08) 84%, transparent 95%)'
          }"
        ></div>
      </div>
    </div>

    <!-- SVG destellos (shimmer animations) -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none z-5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: transparent; stop-opacity: 0" />
          <stop offset="35%" style="stop-color: #E44D2E; stop-opacity: 0.6" />
          <stop offset="50%" style="stop-color: #E44D2E; stop-opacity: 1" />
          <stop offset="65%" style="stop-color: #E44D2E; stop-opacity: 0.6" />
          <stop offset="100%" style="stop-color: transparent; stop-opacity: 0" />
        </linearGradient>
      </defs>
      <path ref="shimmer1" d="M 25 -15 C 15 0, 10 20, 12 40 C 14 55, 20 65, 30 70 C 38 74, 46 74, 52 70 C 58 66, 62 58, 62 48 C 62 38, 58 30, 50 26 C 42 22, 32 24, 26 32 C 22 38, 22 46, 26 52 C 30 58, 38 60, 46 58 C 56 55, 68 48, 78 38 C 88 28, 98 15, 108 0 C 115 -10, 120 -18, 125 -25" stroke="url(#shimmerGradient)" stroke-width="0.15" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer2" d="M 115 15 C 100 25, 85 38, 72 52 C 58 68, 48 82, 42 90 C 38 95, 36 98, 36 98 C 36 98, 38 94, 42 88 C 48 78, 56 68, 62 60 C 68 52, 72 46, 74 42 C 76 38, 76 36, 74 36 C 72 36, 68 38, 62 44 C 54 52, 44 64, 32 78 C 20 92, 8 104, -4 110 C -12 114, -18 115, -22 114" stroke="url(#shimmerGradient)" stroke-width="0.15" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer3" d="M -20 120 C -5 105, 5 90, 18 75 C 31 60, 42 48, 50 40 C 54 36, 58 34, 62 34 C 66 34, 70 36, 72 40 C 74 44, 74 48, 72 52 C 70 56, 66 58, 62 58 C 58 58, 54 56, 52 52 C 52 48, 54 44, 58 42 C 64 40, 72 38, 82 30 C 92 22, 102 12, 112 0 C 118 -8, 122 -15, 125 -22" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer4" d="M 50 120 C 48 105, 46 90, 48 75 C 50 60, 54 48, 58 38 C 60 32, 62 28, 64 26 C 66 24, 70 24, 72 26 C 74 28, 76 32, 76 36 C 76 40, 74 44, 70 46 C 66 48, 62 46, 60 42 C 60 38, 62 34, 66 32 C 72 30, 80 28, 90 22 C 100 16, 110 8, 118 0 C 122 -6, 125 -12, 128 -18" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
    </svg>

    <!-- CENTER ROW: left text | image | right text -->
<div
  ref="centerRow"
  class="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
>
  <!-- LEFT TEXT -->
  <div
    ref="textLeft"
    class="flex flex-col items-end text-right mr-6"
    :style="{
      opacity: sideTextOpacity,
      transform: `translateY(${ -30 * (1 - sideTextOpacity) }px)`
    }"
  >
    <h1 class="text-2xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-[#433623] leading-tight">
      <span class="block">LA</span>
      <span class="block mt-0.5">MEJOR</span>
    </h1>
  </div>

  <!-- IMAGE CARD (mantengo el ref imageCard) -->
  <div
    ref="imageCard"
    class="relative z-10 w-[210px] h-[340px] rounded-2xl overflow-hidden shadow-2xl bg-black/10 transition-transform duration-150 ease-out"
    style="border: none; transform-origin: center center;"
  >
    <img
      ref="imageEl"
      src="/src/assets/pexels-shiny-diamond.jpg"
      alt="Hero Image"
      class="w-full h-full object-cover"
      draggable="false"
      :style="{ objectPosition: '50% 35%' }"
    />
    <div
      ref="imageOverlay"
      class="absolute inset-0 bg-black pointer-events-none"
      style="opacity: 0; will-change: opacity;"
    ></div>
  </div>

  <!-- RIGHT TEXT -->
  <div
    ref="textRight"
    class="flex flex-col items-start text-left ml-6"
    :style="{
      opacity: sideTextOpacity,
      transform: `translateY(${ 30 * (1 - sideTextOpacity) }px)`
    }"
  >
    <h1 class="text-2xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-[#433623] leading-tight">
      <span class="block">VERSIÓN</span>
      <span class="block mt-0.5">DE TI</span>
    </h1>
  </div>
</div>


    <!-- Mensaje elegante durante el zoom (SOBRE la imagen con overlay) -->
    <div
      ref="zoomMessage"
      class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 px-6"
      :style="{
        opacity: messageOpacity,
        transform: `scale(${ 0.95 + 0.05 * messageOpacity })`,
      }"
    >
      <h2 class="text-powder-blush-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 drop-shadow-2xl leading-tight" style="text-shadow: 0 6px 24px rgba(0,0,0,0.8)">
        Bienvenida a tu Transformación
      </h2>
      <p class="text-powder-blush-50/95 text-lg sm:text-xl md:text-2xl text-center max-w-3xl drop-shadow-xl leading-relaxed" style="text-shadow: 0 3px 16px rgba(0,0,0,0.6)">
        Servicios profesionales de belleza diseñados para resaltar tu esencia única y revelar la mejor versión de ti misma
      </p>
    </div>

    <!-- TEXT + CTA (will blur & fade during zoom) -->
    <div
      ref="textBlock"
      class="absolute bottom-8 text-center z-20 px-4 sm:px-6 max-w-4xl transition-all duration-150 ease-out"
      :style="{
        opacity: textOpacity,
        transform: `translateY(${ textTranslateY }px)`,
        filter: `blur(${ textBlur }px)`
      }"
    >
      <button
        ref="ctaButton"
        @click="scrollToContact"
        class="px-7 sm:px-8 md:px-10 py-3 md:py-3 mr-5 sm:mr-6 md:mr-7 bg-gradient-to-r from-[#d4745e] to-[#bf6840] text-white text-sm sm:text-base font-semibold rounded-full shadow-xl transition-all duration-500 hover:shadow-[#d4745e]/50 hover:scale-110"
      >
        {{ $t('hero.cta') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from '../composables/useSmoothScroll'

gsap.registerPlugin(ScrollTrigger)

const heroSection = ref(null)
const blob = ref(null)
const blobInner = ref(null)
const blobContainer = ref(null)
const shimmer1 = ref(null)
const shimmer2 = ref(null)
const shimmer3 = ref(null)
const shimmer4 = ref(null)
const imageCard = ref(null)
const imageEl = ref(null)
const imageOverlay = ref(null)
const textBlock = ref(null)
const textLeft = ref(null)
const textRight = ref(null)
const ctaButton = ref(null)
const zoomMessage = ref(null)

const useScrollTrigger = true

//control devices 
const lightMode = ref(false)
let demoWrapper = null


const DEMO_BLOB_HTML = 
`
  <div class="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
    <!-- Rotating Aura Blob -->
    <div class="relative w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] max-w-[1000px] max-h-[1000px] animate-spin-slow opacity-60">
      <div class="absolute inset-0 rounded-full conic-aura blur-[80px] md:blur-[120px]"></div>
    </div>
    <!-- Secondary Pulse Blob (Static but pulsing) -->
    <div class="absolute w-[40vw] h-[40vw] bg-rose-100/30 rounded-full blur-3xl animate-float"></div>
  </div>
`

function detectLightMode(){
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
    if (window.innerWidth < 900) return true
    if (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) return true
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return true
  } catch (e) { /* safe fallback */ }
  return false
}

function enableLightMode(){
  if (!blobContainer.value) return
  // hide original heavy blob (if exists)
  if (blob.value) blob.value.style.display = 'none'
  if (blobInner.value) blobInner.value.style.display = 'none'

  // hide SVG shimmer
  const svg = heroSection.value?.querySelector('svg')
  if (svg) svg.style.display = 'none'

  // append demo wrapper (avoid re-creating if ya existe)
  if (!blobContainer.value.querySelector('.hero-demo-blob')) {
    demoWrapper = document.createElement('div')
    demoWrapper.className = 'hero-demo-blob'
    demoWrapper.innerHTML = DEMO_BLOB_HTML
    blobContainer.value.appendChild(demoWrapper)
  }

  // kill heavy blob tweens (si estan corriendo)
  try { gsap.killTweensOf(blob.value); gsap.killTweensOf(blobInner.value) } catch (e) {}
}

function disableLightMode() {
  if (!blobContainer.value) return
  // reveal original blob
  if (blob.value) blob.value.style.display = ''
  if (blobInner.value) blobInner.value.style.display = ''

  // show svg again
  const svg = heroSection.value?.querySelector('svg')
  if (svg) svg.style.display = ''

  // remove demo wrapper if existe
  const existing = blobContainer.value.querySelector('.hero-demo-blob')
  if (existing) existing.remove()

  // restart light blob animations if necessary (we'll re-run animation block in onMounted or handleModeChange triggers)
  // animateShimmer & blob tweens serán llamados desde onMounted cuando no estemos en light mode

  try {
    if (blob.value && blobInner.value) {
      gsap.to(blob.value, { opacity: 1, duration: 2.2, ease: 'power2.out' })
      gsap.to(blob.value, { rotation: 800, duration: 42, repeat: -1, ease: 'none' })
      gsap.to(blobInner.value, {
        scale: 1.06,
        opacity: 0.9,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      })
    }
    animateShimmer(shimmer1, 2.5)
    animateShimmer(shimmer2, 6.5)
    animateShimmer(shimmer3, 10.5)
    animateShimmer(shimmer4, 14.5)
  } catch (e) {}


}


const { smoothScrollTo } = useSmoothScroll({ duration: 700, offset: 0 })

// UI state
const messageOpacity = ref(0)
const overlayOpacity = ref(0)
const textOpacity = ref(1)
const textBlur = ref(0)
const textTranslateY = ref(0)
const sideTextOpacity = ref(1)

let heroHeight = 0
let heroWidth = 0
let cardHeight = 340 // tamaño actualizado a 340px
let cardWidth = 200  // tamaño actualizado a 200px
let scaleMax = 1
let scrollLocked = false
let messageShown = false

// Fases de la animación - Ajustadas para mostrar mejor el mensaje
const zoomPhase1 = 0.3  // hasta aquí la imagen crece
const zoomPhase2 = 0.5 // aquí aparece el overlay oscuro
const zoomPhase3 = 0.7 // aquí aparece el mensaje completamente
const messageHoldDuration = 1500 // ms que el mensaje permanece antes de desbloquear scroll

// rAF control
let scrollTicking = false
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v))

const updateDimensions = () => {
  if (!heroSection.value || !imageCard.value) return
  const rect = heroSection.value.getBoundingClientRect()
  heroHeight = rect.height || window.innerHeight
  heroWidth = rect.width || window.innerWidth

  cardHeight = imageCard.value.clientHeight || 340
  cardWidth = imageCard.value.clientWidth || 200

  const scaleByHeight = heroHeight / cardHeight
  const scaleByWidth = heroWidth / cardWidth
  scaleMax = Math.max(scaleByHeight, scaleByWidth, 1)
  scaleMax = Math.min(scaleMax, 12) // permitir más zoom para cubrir completamente

  if (heroSection.value) {
  heroSection.value.style.setProperty('--card-half', `${cardWidth / 2}px`)
  }

  try {
    if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll().length) {
      ScrollTrigger.refresh()
    }
  } catch (e) { /* safe */ }


   try {
    const shouldLight = detectLightMode()
    if (shouldLight !== lightMode.value) {
      lightMode.value = shouldLight
      if (lightMode.value) enableLightMode()
      else disableLightMode()
    }
  } catch (e) { /* safe */ }

}

const handleScroll = () => {
  if (scrollTicking) return
  scrollTicking = true
  requestAnimationFrame(() => {
    if (!heroSection.value || !imageCard.value) {
      scrollTicking = false
      return
    }

    const rect = heroSection.value.getBoundingClientRect()
    let scrolled = -rect.top
    
    // Si estamos en fase de mensaje bloqueado, limitar el scroll
    if (scrollLocked) {
      scrolled = Math.min(scrolled, heroHeight * zoomPhase3)
    }
    
    const progress = clamp(scrolled / heroHeight, 0, 1)

    // Fase 1: Imagen crece (0 → zoomPhase1)
    const phase1Progress = clamp(progress / zoomPhase1, 0, 1)
    const scaleX = 1 + (scaleMax - 1) * phase1Progress
    const scaleY = 1 + (scaleMax - 1) * Math.pow(phase1Progress, 1.55)
    imageCard.value.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
    
    overlayOpacity.value = Math.min(phase1Progress * 1.2, 0.85)

    // Fase 2: Overlay oscuro aparece (zoomPhase1 → zoomPhase2)
    if (progress >= zoomPhase1) {
      const overlayProgress = clamp((progress - zoomPhase1) / (zoomPhase2 - zoomPhase1), 0, 1)
      overlayOpacity.value = overlayProgress * 0.8 // 80% de opacidad máxima para mejor contraste
    } else {
      overlayOpacity.value = 0
    }

    // Fase 3: Mensaje aparece (zoomPhase2 → zoomPhase3)
    if (progress >= zoomPhase2) {
      const msgProgress = clamp((progress - zoomPhase2) / (zoomPhase3 - zoomPhase2), 0, 1)
      messageOpacity.value = msgProgress
      
      // Bloquear scroll cuando el mensaje está completamente visible
      if (msgProgress >= 0.98 && !messageShown) {
        messageShown = true
        scrollLocked = true
        
        // Desbloquear después de tiempo de lectura
        setTimeout(() => {
          scrollLocked = false
        }, messageHoldDuration)
      }
    } else {
      messageOpacity.value = 0
      // Reset si el usuario vuelve atrás
      if (messageShown && progress < zoomPhase2 - 0.05) {
        messageShown = false
        scrollLocked = false
      }
    }

    if (useScrollTrigger) {
      // Si ScrollTrigger está manejando el scroll, no hacemos más ajustes
      return
    }


    // Text block transitions (se oculta rápido al inicio del zoom)
    const textFadeProgress = clamp(progress / 0.2, 0, 1)
    textOpacity.value = 1 - textFadeProgress
    textBlur.value = textFadeProgress * 8
    textTranslateY.value = -Math.min(textFadeProgress * 40, 40)

    // Textos laterales - desaparecen más gradualmente
    const sideTextFadeProgress = clamp(progress / 0.3, 0, 1)
    sideTextOpacity.value = 1 - sideTextFadeProgress

    scrollTicking = false
  })
}

const animateShimmer = (elRef, delay = 0) => {
  if (!elRef?.value) return
  try {
    const pathLength = elRef.value.getTotalLength()
    elRef.value.style.strokeDasharray = pathLength
    elRef.value.style.strokeDashoffset = pathLength
    gsap.timeline({ delay, repeat: -1, repeatDelay: 12 })
      .to(elRef.value, { opacity: 1, duration: 0.25, ease: 'power1.in' })
      .to(elRef.value, { strokeDashoffset: 0, duration: 2.4, ease: 'power1.inOut' }, '<')
      .to(elRef.value, { opacity: 0, duration: 0.45, ease: 'power1.out' }, '-=0.4')
  } catch (e) { /* safe */ }
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)

  if( imageCard.value ) {
    imageCard.value.style.transformOrigin = 'none'
  }

  lightMode.value = detectLightMode()
  if (lightMode.value) {
    enableLightMode()
   
  } else {
    // blob animation (GPU-friendly; no dynamic blur)
  if (blob.value && blobInner.value) {
    gsap.to(blob.value, { opacity: 1, duration: 2.2, ease: 'power2.out' })
    gsap.to(blob.value, { rotation: 800, duration: 42, repeat: -1, ease: 'none' })
    gsap.to(blobInner.value, {
      scale: 1.06,
      opacity: 0.9,
      duration: 8,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })
  }

  // shimmer animations
  animateShimmer(shimmer1, 2.5)
  animateShimmer(shimmer2, 6.5)
  animateShimmer(shimmer3, 10.5)
  animateShimmer(shimmer4, 14.5)
  }
  
  // entry animations
  gsap.fromTo(imageCard.value,
    { opacity: 0, scale: 0.96, y: 10 },
    { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 }
  )
  
  // Animación de entrada para textos laterales (más pronunciada)
  gsap.fromTo([textLeft.value, textRight.value],
    { 
      opacity: 0, 
      x: (i) => i === 0 ? -60 : 60 
    },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1.4, 
      ease: 'power3.out', 
      delay: 0.5, 
      stagger: 0.15 
    }
  )
  
  gsap.fromTo(textBlock.value,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.8 }
  )

  // scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })

  // re-evaluate dims after image/font load
  const img = imageEl.value
  if (img && !img.complete) {
    img.addEventListener('load', () => setTimeout(updateDimensions, 120))
  } else {
    setTimeout(updateDimensions, 120)
  }

  if (imageCard.value) {
  imageCard.value.style.transition = 'none'
}

// esperar al siguiente frame para asegurar que el layout ya está finalizado
requestAnimationFrame(() => {
  // recalcular dimensiones basadas en layout definitivo
  updateDimensions()

  // overshoot para evitar huecos en pantallas ultra anchas
  const finalScale = Math.max(1, Math.min(Math.max(heroWidth / cardWidth, heroHeight / cardHeight) * 1.06, 12))

  // refrescar ScrollTrigger/layout por si hubo cambios
  try { ScrollTrigger.refresh() } catch (e) {}

  // timeline controlado por ScrollTrigger (igual que antes, pero usando finalScale actualizado)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top top",
      end: "+=150%",
      scrub: 0.7,
      pin: true,
      anticipatePin: 1
    }
  })

  // zoom y overlay desde el inicio (overlay ahora controla el DOM directamente)
  tl.to(imageCard.value, { scale: finalScale, ease: "power2.out", duration: 1 }, 0)
  tl.to(imageOverlay.value, { opacity: 0.78, ease: "none", duration: 1 }, 0)

  tl.to(textBlock.value, { y: -24, opacity: 0, filter: "blur(6px)", ease: "power1.out", duration: 0.5 }, 0.35)
  tl.to(zoomMessage.value, {
    opacity: 1, scale: 1, ease: "power2.out", duration: 0.8,
    onStart: () => { if (zoomMessage.value) zoomMessage.value.style.pointerEvents = "auto" },
    onReverseComplete: () => { if (zoomMessage.value) zoomMessage.value.style.pointerEvents = "none" }
  }, 0.6)
})
  
})

onUnmounted(() => {
  try { 
    ScrollTrigger.getAll().forEach(st => st.kill())
    gsap.killTweensOf(imageCard.value)
  }
  catch (e) { /* safe */ }

  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateDimensions)
})

// keep existing exported function
const scrollToContact = () => smoothScrollTo('#contact')
</script>

<style scoped>
.shimmer-line {
  opacity: 1;
  will-change: stroke-dashoffset, opacity;
}

/* no borders, card look */
[ref="imageCard"] {
  border: none !important;
}

/* Ensure transform GPU compositing */
[ref="imageCard"], [ref="imageCard"] img {
  transform-origin: center center;
  backface-visibility: hidden;
  will-change: transform;
}

/* text block will-change */
[ref="textBlock"] {
  will-change: opacity, transform, filter;
}

/* viewport adjustments */
@media (max-width: 768px) {
  section {
    height: 100vh;
    height: 100dvh;
  }
}

/* Responsive para pantallas pequeñas */
@media (max-width: 640px) {
  [ref="imageCard"] {
    width: 180px;
    height: 306px;
  }
}

/* tiny screens */
@media (max-width: 380px) {
  [ref="imageCard"] {
    width: 160px;
    height: 272px;
  }
  [ref="textBlock"] p {
    font-size: 1.05rem;
  }
  [ref="ctaButton"] {
    padding: 0.55rem 1.25rem;
    font-size: 0.85rem;
  }
  [ref="zoomMessage"] h2 {
    font-size: 1.75rem;
  }
  [ref="zoomMessage"] p {
    font-size: 1rem;
  }
}

[ref="textLeft"] h1,
[ref="textRight"] h1 {
  writing-mode: horizontal-tb !important;
  text-orientation: initial !important;
}

/* ajuste fino del gap (puedes cambiar 1.125rem) */
@media (max-width: 640px) {
  .mr-6 { margin-right: 0.75rem; }
  .ml-6 { margin-left: 0.75rem; }
  [ref="textLeft"] h1, [ref="textRight"] h1 { font-size: 2.25rem; }
}

/* asegurar que los textos no capturen eventos */
[ref="centerRow"] > div { pointer-events: none; }

/* small tweak de line-height si quieres las palabras más pegadas */
[ref="textLeft"] h1 span, [ref="textRight"] h1 span {
  line-height: 0.95;
}
/* Asegurar que el mensaje sea visible */
[ref="zoomMessage"] {
  z-index: 30;
}

/* Mejorar la visibilidad del overlay */
[ref="imageOverlay"] {
  z-index: 15;
}
</style>