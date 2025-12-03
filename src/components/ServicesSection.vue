<template>
  <section id="services" class="relative py-32 px-4 overflow-hidden bg-porcelain-50">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Enhanced Title Section -->
      <div ref="titleSection" class="text-center mb-32">
        <h2 class="section-title font-playfair font-bold mb-6 bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent">
          {{ $t('services.title') }}
        </h2>
        <div ref="underline" class="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
      </div>

      <!-- BLOQUE 1: Cards 1, 2 + Óvalo Derecha -->
      <div class="relative mb-24 h-[600px]">
        <div class="grid grid-cols-12 grid-rows-6 gap-2 h-full w-full">
          <!-- Card 1 -->
          <div ref="card1" class="col-start-5 col-end-7 row-start-2 row-end-5 flex items-center justify-center z-30">
            <div class="w-[200px] h-[260px]">
              <div class="service-card-enhanced group h-full">
                <div class="relative bg-gradient-to-br from-antique-white-50 to-white rounded-2xl shadow-xl overflow-hidden border border-amber-100/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <!-- Icon Container -->
                  <div class="bg-antique-white-200 p-4 flex items-center justify-center">
                    <Icon icon="heroicons:sparkles-solid" class="w-12 h-12 text-amber-600" />
                  </div>
                  
                  <!-- Content -->
                  <div class="p-4 flex-1 flex flex-col">
                    <h3 class="text-base font-playfair font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {{ $t('services.makeup_bride') }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed flex-1">
                      {{ $t('services.makeup_bride_desc') }}
                    </p>
                    
                    <!-- Feature Badge -->
                    <div class="mt-2">
                      <span class="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] rounded-full font-medium">Premium</span>
                    </div>
                  </div>

                  <!-- Hover Border -->
                  <div class="absolute inset-0 rounded-2xl border-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div ref="card2" class="col-start-2 col-end-4 row-start-3 row-end-6 flex items-center justify-center z-30">
            <div class="w-[200px] h-[260px]">
              <div class="service-card-enhanced group h-full">
                <div class="relative bg-gradient-to-br from-antique-white-50 to-white rounded-2xl shadow-xl overflow-hidden border border-amber-100/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <!-- Icon Container -->
                  <div class="bg-antique-white-200 p-4 flex items-center justify-center">
                    <Icon icon="heroicons:star-solid" class="w-12 h-12 text-amber-600" />
                  </div>
                  
                  <!-- Content -->
                  <div class="p-4 flex-1 flex flex-col">
                    <h3 class="text-base font-playfair font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {{ $t('services.makeup_quince') }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed flex-1">
                      {{ $t('services.makeup_quince_desc') }}
                    </p>
                    
                    <!-- Feature Badge -->
                    <div class="mt-2">
                      <span class="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] rounded-full font-medium">Personalizado</span>
                    </div>
                  </div>

                  <!-- Hover Border -->
                  <div class="absolute inset-0 rounded-2xl border-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Óvalo 1 - Inclinado a la derecha, imagen vertical -->
          <div ref="oval1" class="col-start-8 col-end-12 row-start-1 row-end-6 flex items-center justify-center z-10">
            <div class="relative w-[300px] h-[500px]">
              <!-- Óvalo inclinado -->
              <div class="absolute inset-0 rounded-[50%] overflow-hidden shadow-2xl" style="transform: rotate(15deg);">
                <!-- Imagen vertical (sin rotar) -->
                <div 
                  ref="ovalImage1"
                  class="absolute inset-0 bg-cover bg-center"
                  style="transform: rotate(-15deg) scale(1.2); transform-origin: center;"
                  :style="{ backgroundImage: `url(/src/assets/Service1.jpg)` }"
                ></div>
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-rose-900/20"></div>
              </div>
              
              <!-- Decorative Blur -->
              <div class="absolute inset-0 rounded-[50%] bg-gradient-to-br from-amber-200/20 to-rose-200/20 blur-3xl -z-10" style="transform: rotate(15deg) scale(1.1);"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- BLOQUE 2: Óvalo Izquierda + Cards 3, 4 -->
      <div class="relative mb-24 h-[600px]">
        <div class="grid grid-cols-12 grid-rows-6 gap-2 h-full w-full">
          <!-- Óvalo 2 - Inclinado a la izquierda, imagen vertical -->
          <div ref="oval2" class="col-start-2 col-end-6 row-start-1 row-end-6 flex items-center justify-center z-10">
            <div class="relative w-[300px] h-[500px]">
              <!-- Óvalo inclinado -->
              <div class="absolute inset-0 rounded-[50%] overflow-hidden shadow-2xl" style="transform: rotate(-15deg);">
                <!-- Imagen vertical (sin rotar) -->
                <div 
                  ref="ovalImage2"
                  class="absolute inset-0 bg-cover bg-center"
                  style="transform: rotate(15deg) scale(1.2); transform-origin: center;"
                  :style="{ backgroundImage: `url(/src/assets/Service2.jpg)` }"
                ></div>
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-amber-900/20"></div>
              </div>
              
              <!-- Decorative Blur -->
              <div class="absolute inset-0 rounded-[50%] bg-gradient-to-br from-purple-200/20 to-amber-200/20 blur-3xl -z-10" style="transform: rotate(-15deg) scale(1.1);"></div>
            </div>
          </div>

          <!-- Card 3 -->
          <div ref="card3" class="col-start-7 col-end-9 row-start-2 row-end-5 flex items-center justify-center z-30">
            <div class="w-[200px] h-[260px]">
              <div class="service-card-enhanced group h-full">
                <div class="relative bg-gradient-to-br from-antique-white-50 to-white rounded-2xl shadow-xl overflow-hidden border border-amber-100/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <!-- Icon Container -->
                  <div class="bg-antique-white-200 p-4 flex items-center justify-center">
                    <Icon icon="heroicons:camera-solid" class="w-12 h-12 text-amber-600" />
                  </div>
                  
                  <!-- Content -->
                  <div class="p-4 flex-1 flex flex-col">
                    <h3 class="text-base font-playfair font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {{ $t('services.makeup_photo') }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed flex-1">
                      {{ $t('services.makeup_photo_desc') }}
                    </p>
                    
                    <!-- Feature Badge -->
                    <div class="mt-2">
                      <span class="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] rounded-full font-medium">HD Ready</span>
                    </div>
                  </div>

                  <!-- Hover Border -->
                  <div class="absolute inset-0 rounded-2xl border-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4 -->
          <div ref="card4" class="col-start-10 col-end-12 row-start-3 row-end-6 flex items-center justify-center z-30">
            <div class="w-[200px] h-[260px]">
              <div class="service-card-enhanced group h-full">
                <div class="relative bg-gradient-to-br from-antique-white-50 to-white rounded-2xl shadow-xl overflow-hidden border border-amber-100/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <!-- Icon Container -->
                  <div class="bg-antique-white-200 p-4 flex items-center justify-center">
                    <Icon icon="heroicons:fire-solid" class="w-12 h-12 text-amber-600" />
                  </div>
                  
                  <!-- Content -->
                  <div class="p-4 flex-1 flex flex-col">
                    <h3 class="text-base font-playfair font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {{ $t('services.waxing') }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed flex-1">
                      {{ $t('services.waxing_desc') }}
                    </p>
                    
                    <!-- Feature Badge -->
                    <div class="mt-2">
                      <span class="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] rounded-full font-medium">Indoloro</span>
                    </div>
                  </div>

                  <!-- Hover Border -->
                  <div class="absolute inset-0 rounded-2xl border-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BLOQUE 3: Cards 5, 6 + Óvalo Derecha -->
      <div class="relative h-[600px]">
        <div class="grid grid-cols-12 grid-rows-6 gap-2 h-full w-full">
          <!-- Card 5 -->
          <div ref="card5" class="col-start-5 col-end-7 row-start-2 row-end-5 flex items-center justify-center z-30">
            <div class="w-[200px] h-[260px]">
              <div class="service-card-enhanced group h-full">
                <div class="relative bg-gradient-to-br from-antique-white-50 to-white rounded-2xl shadow-xl overflow-hidden border border-amber-100/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <!-- Icon Container -->
                  <div class="bg-antique-white-200 p-4 flex items-center justify-center">
                    <Icon icon="heroicons:eye-solid" class="w-12 h-12 text-amber-600" />
                  </div>
                  
                  <!-- Content -->
                  <div class="p-4 flex-1 flex flex-col">
                    <h3 class="text-base font-playfair font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {{ $t('services.lash') }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed flex-1">
                      {{ $t('services.lash_desc') }}
                    </p>
                    
                    <!-- Feature Badge -->
                    <div class="mt-2">
                      <span class="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] rounded-full font-medium">Natural</span>
                    </div>
                  </div>

                  <!-- Hover Border -->
                  <div class="absolute inset-0 rounded-2xl border-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 6 -->
          <div ref="card6" class="col-start-2 col-end-4 row-start-3 row-end-6 flex items-center justify-center z-30">
            <div class="w-[200px] h-[260px]">
              <div class="service-card-enhanced group h-full">
                <div class="relative bg-gradient-to-br from-antique-white-50 to-white rounded-2xl shadow-xl overflow-hidden border border-amber-100/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <!-- Icon Container -->
                  <div class="bg-antique-white-200 p-4 flex items-center justify-center">
                    <Icon icon="heroicons:heart-solid" class="w-12 h-12 text-amber-600" />
                  </div>
                  
                  <!-- Content -->
                  <div class="p-4 flex-1 flex flex-col">
                    <h3 class="text-base font-playfair font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {{ $t('services.massage') }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed flex-1">
                      {{ $t('services.massage_desc') }}
                    </p>
                    
                    <!-- Feature Badge -->
                    <div class="mt-2">
                      <span class="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] rounded-full font-medium">Relajante</span>
                    </div>
                  </div>

                  <!-- Hover Border -->
                  <div class="absolute inset-0 rounded-2xl border-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Óvalo 3 - Inclinado a la derecha, imagen vertical -->
          <div ref="oval3" class="col-start-8 col-end-12 row-start-1 row-end-6 flex items-center justify-center z-10">
            <div class="relative w-[300px] h-[500px]">
              <!-- Óvalo inclinado -->
              <div class="absolute inset-0 rounded-[50%] overflow-hidden shadow-2xl" style="transform: rotate(15deg);">
                <!-- Imagen vertical (sin rotar) -->
                <div 
                  ref="ovalImage3"
                  class="absolute inset-0 bg-cover bg-center"
                  style="transform: rotate(-15deg) scale(1.2); transform-origin: center;"
                  :style="{ backgroundImage: `url(/src/assets/Service3.jpg)` }"
                ></div>
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-transparent to-amber-900/20"></div>
              </div>
              
              <!-- Decorative Blur -->
              <div class="absolute inset-0 rounded-[50%] bg-gradient-to-br from-teal-200/20 to-amber-200/20 blur-3xl -z-10" style="transform: rotate(15deg) scale(1.1);"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Refs
const titleSection = ref(null)
const underline = ref(null)
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)
const card5 = ref(null)
const card6 = ref(null)
const oval1 = ref(null)
const oval2 = ref(null)
const oval3 = ref(null)
const ovalImage1 = ref(null)
const ovalImage2 = ref(null)
const ovalImage3 = ref(null)

onMounted(() => {
  // Title Animation
  gsap.fromTo(titleSection.value,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleSection.value,
        start: 'top 80%',
      }
    }
  )

  gsap.fromTo(underline.value,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleSection.value,
        start: 'top 80%',
      }
    }
  )

  // PARALLAX EFFECT - Cards move faster than ovals on scroll
  const cards = [card1.value, card2.value, card3.value, card4.value, card5.value, card6.value]
  const ovals = [oval1.value, oval2.value, oval3.value]
  const ovalImages = [ovalImage1.value, ovalImage2.value, ovalImage3.value]

  // Cards parallax - Move faster (more movement)
  cards.forEach((card, index) => {
    if (card) {
      gsap.to(card, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      })

      // Initial animation
      gsap.fromTo(card,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          }
        }
      )
    }
  })

  // Ovals parallax - Move slower (less movement)
  ovals.forEach((oval, index) => {
    if (oval) {
      gsap.to(oval, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: oval,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      })

      // Initial animation
      gsap.fromTo(oval,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: oval,
            start: 'top 85%',
          }
        }
      )
    }
  })

  // Oval Images - Subtle parallax inside oval
  ovalImages.forEach((img) => {
    if (img) {
      gsap.to(img, {
        y: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.5,
        }
      })
    }
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap');

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.service-card-enhanced {
  transform-style: preserve-3d;
  will-change: transform;
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>