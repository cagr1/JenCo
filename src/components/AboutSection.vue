<template>
  <section id="about" class="relative py-24 px-4 bg-porcelain-50 overflow-hidden">
    
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
      <!-- <path ref="shimmer3" d="M -20 120 C -5 105, 5 90, 18 75 C 31 60, 42 48, 50 40 C 54 36, 58 34, 62 34 C 66 34, 70 36, 72 40 C 74 44, 74 48, 72 52 C 70 56, 66 58, 62 58 C 58 58, 54 56, 52 52 C 52 48, 54 44, 58 42 C 64 40, 72 38, 82 30 C 92 22, 102 12, 112 0 C 118 -8, 122 -15, 125 -22" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" />
      <path ref="shimmer4" d="M 50 120 C 48 105, 46 90, 48 75 C 50 60, 54 48, 58 38 C 60 32, 62 28, 64 26 C 66 24, 70 24, 72 26 C 74 28, 76 32, 76 36 C 76 40, 74 44, 70 46 C 66 48, 62 46, 60 42 C 60 38, 62 34, 66 32 C 72 30, 80 28, 90 22 C 100 16, 110 8, 118 0 C 122 -6, 125 -12, 128 -18" stroke="url(#shimmerGradient)" stroke-width="0.1" fill="none" stroke-linecap="round" class="shimmer-line" opacity="0" /> -->
    </svg>

    
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title text-powder-blush-800">{{ $t('about.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div ref="imageRef" class="w-[300px] h-[440px] rounded-2xl overflow-hidden shadow-lg text-center mx-auto">
          <img
            :src="profile"
            alt="Jennifer Gallardo"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Text Content -->
        <div ref="contentRef" class="space-y-6">
          <p class="text-lg font-inter text-powder-blush-800 leading-relaxed">
            {{ $t('about.bio1') }}
          </p>

          <p class="text-lg font-inter text-powder-blush-800 leading-relaxed">
            {{ $t('about.bio2') }}
          </p>

          <div class="border-l-4 border-shadow-grey-300 pl-6">
            <p class="text-2xl font-cormorant text-shadow-grey-300  italic">
              "{{ $t('about.philosophy') }}"
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-shadow-grey-300">
            <div class="text-center">
              <p class="text-3xl font-bold text-gold">10+</p>
              <p class="text-sm text-gray-600">{{ $t('contact.followUs') }}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-gold">1000+</p>
              <p class="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profile from '../assets/Profile.png'
import { useShimmerEffect } from '../composables/useShimmerEffect'


gsap.registerPlugin(ScrollTrigger)

const imageRef = ref(null)
const contentRef = ref(null)


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



onMounted(() => {
  gsap.fromTo(
    imageRef.value,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  gsap.fromTo(
    contentRef.value,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>
<style scoped>
@import '../styles/effects.css';

</style>


