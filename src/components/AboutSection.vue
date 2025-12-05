<template>
  <section id="about" class="relative py-24 px-4 bg-porcelain-50 overflow-hidden">
    
    <!-- Background Shimmer Effect -->
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

    <div class="max-w-5xl mx-auto">
      <motion.div
          class="max-w-5xl mx-auto"
          :initial="{ opacity: 0, y: 40 }"
          :in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
          
        >
          <div class="max-w-3xl md:ml-auto md:mr-16 md:text-right"> 
            <h2 
            
            class="section-title  mb-6 text-powder-blush-800  text-center md:text-right">
              {{ $t('about.title') }}
            </h2>
          </div>
      </motion.div>
      

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image Container -->
        <motion.div
          class="relative"
          :initial="{ opacity: 0, x: -50 }"
          :in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
        >
          <div class="image-container z-30">
            <div class="image-wrapper">
              <img
                :src="profile"
                alt="Jennifer Gallardo"
                class="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- Floating Stats Card with Gradient -->
          <motion.div
            class="absolute -bottom-6 -right-6 text-white rounded-2xl p-6 shadow-xl z-30 gradient-card"
            :initial="{ y: 20, opacity: 0 }"
            :in-view="{ y: 0, opacity: 1 }"
            :transition="{ delay: 0.3, duration: 0.8 }"
          >
            <p class="text-3xl font-bold text-white mb-1">+10</p>
            <p class="text-xs text-white/90">{{ $t('about.bioCardDesc') }}</p>
          </motion.div>
        </motion.div>

        <!-- Text Content -->
        <motion.div
          class="space-y-6"
          :initial="{ opacity: 0, x: 50 }"
          :in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <p class="text-lg font-inter text-powder-blush-800 leading-relaxed">
            {{ $t('about.bio1') }}
          </p>

          <p class="text-lg font-inter text-powder-blush-800 leading-relaxed">
            {{ $t('about.bio2') }}
          </p>

          <div class="border-l-4 border-shadow-grey-300 pl-6">
            <p class="text-2xl font-cormorant text-shadow-grey-300 italic">
              "{{ $t('about.philosophy') }}"
            </p>
          </div>

          <!-- Stats Grid with Icons -->
          <div class="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-shadow-grey-300">
            <motion.div
              :initial="{ opacity: 0, y: 20 }"
              :in-view="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.2, duration: 0.6 }"
              class="text-center"
            >
              <div class="flex items-center justify-center gap-3 mb-2">
                <Icon icon="heroicons:user-group" class="w-6 h-6 text-powder-blush-800" />
                <p class="text-3xl font-bold text-powder-blush-800">500+</p>
              </div>
              <p class="text-sm text-shadow-grey-600">{{ $t('contact.followUs') }}</p>
            </motion.div>

            <motion.div
              :initial="{ opacity: 0, y: 20 }"
              :in-view="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.3, duration: 0.6 }"
              class="text-center"
            >
              <div class="flex items-center justify-center gap-3 mb-2">
                <Icon icon="heroicons:clock" class="w-6 h-6 text-powder-blush-800" />
                <p class="text-3xl font-bold text-powder-blush-800">24/ 7</p>
              </div>
              <p class="text-sm text-shadow-grey-600">{{ $t('contact.time') }}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion } from 'motion-v'
import { Icon } from '@iconify/vue'
import { useShimmerEffect } from '../composables/useShimmerEffect'
import profile from '../assets/Profile.png'


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



</script>

<style scoped>
@import '../styles/effects.css';



/* Gradient Card */
.gradient-card {
  background: linear-gradient(135deg, #512015 0%, #E44D2E 100%);
  box-shadow: 0 15px 35px rgba(81, 32, 21, 0.25);  
}

/* Optional: Add a subtle animation to the gradient card */
.gradient-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
  box-shadow: 0 20px 40px rgba(81, 32, 21, 0.3);
}




</style>