<template>
  <section
    id="home"
    ref="heroSection"
    class="relative h-screen flex items-center justify-center overflow-hidden bg-porcelain-50"
  >
    <!-- Blob Volumétrico -->
    <div ref="blobContainer" class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        ref="blob"
        class="absolute opacity-0"
        style="top:50%; left:50%; width:140vmax; height:140vmax; transform:translate(-50%,-50%) rotate(90deg); transform-origin:center center; will-change:transform;"
      >
        <div
          ref="blobInner"
          class="absolute inset-0"
          :style="getBlobInnerStyle()"
        ></div>
      </div>
    </div>

    <!-- SVG destellos (shimmer animations) -->
    <svg 
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
      </defs>
      <path ref="shimmer1" d="M 25 -15 C 15 0, 10 20, 12 40 C 14 55, 20 65, 30 70 C 38 74, 46 74, 52 70 C 58 66, 62 58, 62 48 C 62 38, 58 30, 50 26 C 42 22, 32 24, 26 32 C 22 38, 22 46, 26 52 C 30 58, 38 60, 46 58 C 56 55, 68 48, 78 38 C 88 28, 98 15, 108 0 C 115 -10, 120 -18, 125 -25" stroke="url(#shimmerGradient)" stroke-width="0.15" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer2" d="M 115 15 C 100 25, 85 38, 72 52 C 58 68, 48 82, 42 90 C 38 95, 36 98, 36 98 C 36 98, 38 94, 42 88 C 48 78, 56 68, 62 60 C 68 52, 72 46, 74 42 C 76 38, 76 36, 74 36 C 72 36, 68 38, 62 44 C 54 52, 44 64, 32 78 C 20 92, 8 104, -4 110 C -12 114, -18 115, -22 114" stroke="url(#shimmerGradient)" stroke-width="0.15" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer3" d="M -20 120 C -5 105, 5 90, 18 75 C 31 60, 42 48, 50 40 C 54 36, 58 34, 62 34 C 66 34, 70 36, 72 40 C 74 44, 74 48, 72 52 C 70 56, 66 58, 62 58 C 58 58, 54 56, 52 52 C 52 48, 54 44, 58 42 C 64 40, 72 38, 82 30 C 92 22, 102 12, 112 0 C 118 -8, 122 -15, 125 -22" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer4" d="M -25 120 C -15 100, -5 80, 5 70 C 15 60, 25 55, 35 60 C 45 65, 55 70, 65 65 C 75 60, 85 50, 95 40 C 105 30, 115 20, 125 10 C 135 0, 140 -5, 128 -18" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
    </svg>
    
    <!-- overlay de zoom -->
    
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
        <h1 class="text-2xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-powder-blush-800 leading-tight ">
          <span class="block">{{ $t('hero.title1') }}</span>
          <span class="block mt-0.5">{{ $t('hero.title2') }}</span>
        </h1>
      </div>

      <!-- IMAGE CARD -->
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
          class="absolute inset-0 bg-[linear-gradient(0deg,hsla(32,100%,95%,1)_0%,hsla(22,94%,79%,1)_100%)] pointer-events-none transition-opacity duration-300"
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
        <h1 class="text-2xl sm:text-2xl md:text-4xl lg:text-7xl font-bold leading-tight">
          <span class="block text-powder-blush-800">{{ $t('hero.title3') }}</span>
          <span class="block mt-0.5 italic text-powder-blush-600">{{ $t('hero.title4') }}</span>
        </h1>
      </div>

   

    </div>
    
    <!-- Mensaje elegante durante el zoom -->
    <div
      ref="zoomMessage"
      class="absolute inset-0 flex flex-col  items-center justify-center pointer-events-none z-30 px-6"
      :style="{
        opacity: messageOpacity,
        transform: `scale(${ 0.95 + 0.05 * messageOpacity })`,
      }"
    >
      <h2 class="text-powder-blush-600 text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight" style="text-shadow: 0 3px 24px rgba(0,0,0,0.8)">
        {{ $t('hero.message1') }}
      </h2>
      <p class="text-powder-blush-600 text-lg sm:text-xl md:text-2xl text-center max-w-3xl drop-shadow-sm font-serif italic" style="text-shadow: 0 3px 16px rgba(0,0,0,0.6)">
        {{ $t('hero.message2') }}
      </p>
    </div>

    
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSmoothScroll } from '../composables/useSmoothScroll'
import { useBlobEffect } from '../composables/useBlobEffect'
import { useShimmerEffect } from '../composables/useShimmerEffect'

gsap.registerPlugin(ScrollTrigger)

// Referencias del componente
const heroSection = ref(null)
const imageCard = ref(null)
const imageEl = ref(null)
const imageOverlay = ref(null)
const textBlock = ref(null)
const textLeft = ref(null)
const textRight = ref(null)
const zoomMessage = ref(null)

// Composables de efectos visuales
const {
  blobContainer,
  blob,
  blobInner,
  getBlobInnerStyle
} = useBlobEffect({
  autoDetectLightMode: true,
  rotationDuration: 42,
  pulseDuration: 8,
  fadeInDuration: 2.2
})

const {
  shimmer1,
  shimmer2,
  shimmer3,
  shimmer4,
  animateShimmer
} = useShimmerEffect({
  strokeWidth: 0.15,
  gradientId: 'shimmerGradient',
  animationDuration: 2.4,
  repeatDelay: 12,
  delays: [2.5, 6.5, 10.5, 14.5],
  paths: 4
})

const { smoothScrollTo } = useSmoothScroll({ duration: 700, offset: 0 })

// UI state
const messageOpacity = ref(0)
const textOpacity = ref(1)
const textBlur = ref(0)
const textTranslateY = ref(0)
const sideTextOpacity = ref(1)

// Scroll animation variables
let heroHeight = 0
let heroWidth = 0
let cardHeight = 340
let cardWidth = 200

const updateDimensions = () => {
  if (!heroSection.value || !imageCard.value) return
  const rect = heroSection.value.getBoundingClientRect()
  heroHeight = rect.height || window.innerHeight
  heroWidth = rect.width || window.innerWidth

  cardHeight = imageCard.value.clientHeight || 340
  cardWidth = imageCard.value.clientWidth || 200

  if (heroSection.value) {
    heroSection.value.style.setProperty('--card-half', `${cardWidth / 2}px`)
  }

  try {
    if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll().length) {
      ScrollTrigger.refresh()
    }
  } catch (e) { /* safe */ }
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)

  if (imageCard.value) {
    imageCard.value.style.transformOrigin = 'none'
    imageCard.value.style.transition = 'none'
  }

  // Entry animations
  gsap.fromTo(imageCard.value,
    { opacity: 0, scale: 0.96, y: 10 },
    { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 }
  )

  gsap.fromTo([textLeft.value, textRight.value],
    { 
      opacity: 0, 
      x: (i) => i === 0 ? -120 : 120 
    },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1.25, 
      ease: 'power4.out', 
      delay: 0.3, 
      stagger: 0.1 
    }
  )



  // Re-evaluate dims after image/font load
  const img = imageEl.value
  if (img && !img.complete) {
    img.addEventListener('load', () => setTimeout(updateDimensions, 120))
  } else {
    setTimeout(updateDimensions, 120)
  }

  // ScrollTrigger animation
  requestAnimationFrame(() => {
    updateDimensions()

    const baseScale = Math.max(heroWidth / cardWidth, heroHeight / cardHeight)
    const finalScale = Math.min(baseScale * 1.35, 14)

    try { ScrollTrigger.refresh() } catch (e) {}

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

    tl.to(imageCard.value, { scale: finalScale, ease: "power2.out", duration: 1 }, 0)
    tl.to(imageOverlay.value, { opacity: 0.92, ease: "power1.out", duration: 0.8 }, 0)
    tl.to(zoomMessage.value, {
      opacity: 1, 
      scale: 1, 
      ease: "power3.out", 
      duration: 0.9,
      onStart: () => { if (zoomMessage.value) zoomMessage.value.style.pointerEvents = "auto" },
      onReverseComplete: () => { if (zoomMessage.value) zoomMessage.value.style.pointerEvents = "none" }
    }, 0.6)
  })
})

onUnmounted(() => {
  try { 
    ScrollTrigger.getAll().forEach(st => st.kill())
    gsap.killTweensOf(imageCard.value)
  } catch (e) { /* safe */ }

  window.removeEventListener('resize', updateDimensions)
})

const scrollToContact = () => smoothScrollTo('#contact')
</script>

<style scoped>
/* Importar estilos de efectos */
@import '../styles/effects.css';

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

/* ajuste fino del gap */
@media (max-width: 640px) {
  .mr-6 { margin-right: 0.75rem; }
  .ml-6 { margin-left: 0.75rem; }
  [ref="textLeft"] h1, [ref="textRight"] h1 { font-size: 2.25rem; }
}

/* asegurar que los textos no capturen eventos */
[ref="centerRow"] > div { pointer-events: none; }

/* small tweak de line-height */
[ref="textLeft"] h1 span, [ref="textRight"] h1 span {
  line-height: 0.95;
}

/* Asegurar que el mensaje sea visible */
[ref="zoomMessage"] {
  z-index: 30;
}

/* Mejorar la visibilidad del overlay */
[ref="imageOverlay"] {
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>