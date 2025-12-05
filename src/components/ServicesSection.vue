<template>
  <section id="services" class="relative py-32 px-4 bg-porcelain-50" style="overflow: visible;">
    
    <!-- Blob Volumétrico -->
    <div ref="blobContainer" class="absolute inset-0 pointer-events-none" style="overflow: visible; z-index: 1;">
      <div
        ref="blob"
        class="absolute opacity-0"
        style="top:50%; left:50%; width:120vmax; height:120vmax; transform:translate(-50%,-50%); transform-origin:center center; will-change:transform;"
      >
        <div
          ref="blobInner"
          class="absolute inset-0"
          :style="getBlobInnerStyle()"
        ></div>
      </div>
    </div>

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
    </svg>
    
    <div class="max-w-5xl mx-auto relative" style="z-index: 10;">
      <!-- Title Section -->
      <motion.div  
        class="max-w-3xl md:mr-auto md:ml-16 md:text-left mb-16"
        :initial="{ opacity: 0, y: 40 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
      >
        <h2 class="section-title text-powder-blush-800 gradient-text md:text-left">
          {{ $t('services.title') }}
        </h2>         
      </motion.div>

      <!-- BLOQUE 1: Card + Card + Imagen -->
      <div class="flex flex-col md:flex-row gap-6 mb-16 items-center justify-center">
        <!-- Imagen 1 - Mobile primero -->
        <div ref="img1" class="w-full relative max-w-[280px] md:max-w-[320px] md:order-3">
          <div class="image-container">
            <div class="image-wrapper">
              <img
                src="/src/assets/Service1.jpg"
                alt="Makeup Services"
                class="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <!-- Card 1 -->
        <div ref="card1" class="w-full max-w-[280px] md:order-1">
          <div class="h-[280px] bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col hover:shadow-2xl transition-all duration-300">
            <div class="mb-4 flex items-center justify-center">
              <Icon icon="heroicons:sparkles" class="w-12 h-12 text-powder-blush-800" />
            </div>
            <h3 class="text-lg font-playfair font-bold text-powder-blush-800 mb-3 text-center">
              {{ $t('services.makeup_bride') }}
            </h3>
            <p class="text-sm text-powder-blush-800/80 leading-relaxed flex-1">
              {{ $t('services.makeup_bride_desc') }}
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div ref="card2" class="w-full max-w-[280px] md:order-2">
          <div class="h-[280px] bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col hover:shadow-2xl transition-all duration-300">
            <div class="mb-4 flex items-center justify-center">
              <Icon icon="heroicons:star" class="w-12 h-12 text-powder-blush-800" />
            </div>
            <h3 class="text-lg font-playfair font-bold text-powder-blush-800 mb-3 text-center">
              {{ $t('services.makeup_quince') }}
            </h3>
            <p class="text-sm text-powder-blush-800/80 leading-relaxed flex-1">
              {{ $t('services.makeup_quince_desc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- BLOQUE 2: Imagen + Card + Card -->
      <div class="flex flex-col md:flex-row gap-6 mb-16 items-center justify-center">
        <!-- Imagen 2 -->
        <div ref="img2" class="w-full max-w-[280px] md:max-w-[320px] md:order-1">
          <div class="image-container">
            <div class="image-wrapper">
              <img
                src="/src/assets/Service2.png"
                alt="Beauty Services"
                class="w-full h-full object-cover rounded-2xl shadow-lg" 
              />
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div ref="card3" class="w-full max-w-[280px] md:order-2">
          <div class="h-[280px] bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col hover:shadow-2xl transition-all duration-300">
            <div class="mb-4 flex items-center justify-center">
              <Icon icon="heroicons:camera" class="w-12 h-12 text-powder-blush-800" />
            </div>
            <h3 class="text-lg font-playfair font-bold text-powder-blush-800 mb-3 text-center">
              {{ $t('services.makeup_photo') }}
            </h3>
            <p class="text-sm text-powder-blush-800/80 leading-relaxed flex-1">
              {{ $t('services.makeup_photo_desc') }}
            </p>
          </div>
        </div>

        <!-- Card 4 -->
        <div ref="card4" class="w-full max-w-[280px] md:order-3">
          <div class="h-[280px] bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col hover:shadow-2xl transition-all duration-300">
            <div class="mb-4 flex items-center justify-center">
              <Icon icon="heroicons:fire" class="w-12 h-12 text-powder-blush-800" />
            </div>
            <h3 class="text-lg font-playfair font-bold text-powder-blush-800 mb-3 text-center">
              {{ $t('services.waxing') }}
            </h3>
            <p class="text-sm text-powder-blush-800/80 leading-relaxed flex-1">
              {{ $t('services.waxing_desc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- BLOQUE 3: Card + Card + Imagen -->
      <div class="flex flex-col md:flex-row gap-6 items-center justify-center">
        <!-- Imagen 3 - Mobile primero -->
        <div ref="img3" class="w-full max-w-[280px] md:max-w-[320px] md:order-3">
          <div class="image-container">
            <div class="image-wrapper">
              <img
                src="/src/assets/Service3.jpg"
                alt="Spa Services"
                class="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div ref="card5" class="w-full max-w-[280px] md:order-1">
          <div class="h-[280px] bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col hover:shadow-2xl transition-all duration-300">
            <div class="mb-4 flex items-center justify-center">
              <Icon icon="heroicons:eye" class="w-12 h-12 text-powder-blush-800" />
            </div>
            <h3 class="text-lg font-playfair font-bold text-powder-blush-800 mb-3 text-center">
              {{ $t('services.lash') }}
            </h3>
            <p class="text-sm text-powder-blush-800/80 leading-relaxed flex-1">
              {{ $t('services.lash_desc') }}
            </p>
          </div>
        </div>

        <!-- Card 6 -->
        <div ref="card6" class="w-full max-w-[280px] md:order-2">
          <div class="h-[280px] bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col hover:shadow-2xl transition-all duration-300">
            <div class="mb-4 items-center justify-center flex">
              <Icon icon="heroicons:heart" class="w-12 h-12 text-powder-blush-800" />
            </div>
            <h3 class="text-lg font-playfair font-bold text-powder-blush-800 mb-3 text-center">
              {{ $t('services.massage') }}
            </h3>
            <p class="text-sm text-powder-blush-800/80 leading-relaxed flex-1">
              {{ $t('services.massage_desc') }}
            </p>
          </div>
        </div>
      </div>
    
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { motion } from 'motion-v'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useBlobEffect } from '../composables/useBlobEffect'
import { useShimmerEffect } from '../composables/useShimmerEffect'

gsap.registerPlugin(ScrollTrigger)

const {
  shimmer1,
  shimmer2,
  animateShimmer
} = useShimmerEffect({
  strokeWidth: 0.15,
  gradientId: 'shimmerGradient',
  animationDuration: 2.4,
  repeatDelay: 12,
  delays: [2.5, 6.5],
  paths: 2
})

const {
  blobContainer,
  blob,
  blobInner,
  getBlobInnerStyle
} = useBlobEffect({
  autoDetectLightMode: true,
  rotationDuration: 50,
  pulseDuration: 10,
  fadeInDuration: 2.5
})

// Refs
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)
const card5 = ref(null)
const card6 = ref(null)
const img1 = ref(null)
const img2 = ref(null)
const img3 = ref(null)

onMounted(() => {
  const images = [img1.value, img2.value, img3.value]
  const cards = [card1.value, card2.value, card3.value, card4.value, card5.value, card6.value]

  // PARALLAX SOLO EN IMÁGENES
  
})
</script>

<style scoped>
.service-card-enhanced {
  transform-style: preserve-3d;
  will-change: transform;
}

* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

#services {
  isolation: auto;
}

#services > div:first-of-type {
  clip-path: none !important;
}
</style>