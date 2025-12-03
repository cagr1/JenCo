<template>
  <section id="services" class="relative py-32 px-4 overflow-hidden bg-porcelain-50">
    

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Enhanced Title Section -->
      <div ref="titleSection" class="text-center mb-20">
        
        <h2 class="section-title font-playfair font-bold mb-6 bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent">
          {{ $t('services.title') }}
        </h2>
        <div ref="underline" class="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
      </div>

      <!-- Innovative 3D Card Carousel -->
      <div class="relative">
        <!-- Navigation Arrows -->
        <button 
          @click="scrollCarousel(-1)"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 group"
        >
          <svg class="w-6 h-6 text-gray-800 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="scrollCarousel(1)"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 group"
        >
          <svg class="w-6 h-6 text-gray-800 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Cards Container -->
        <div ref="carouselContainer" class="overflow-hidden mx-12">
          <div ref="cardsWrapper" class="flex gap-8 transition-transform duration-700 ease-out">
            <!-- Service Card 1 - Makeup Bride -->
            <div 
              v-for="(service, index) in services" 
              :key="index"
              :ref="el => serviceCards[index] = el"
              class="service-card-3d min-w-[380px] group cursor-pointer"
              @mouseenter="handleCardHover(index, true)"
              @mouseleave="handleCardHover(index, false)"
            >
              <div class="relative h-[520px] rounded-3xl overflow-hidden bg-white shadow-2xl">
                <!-- Image Container with Parallax -->
                <div class="relative h-64 overflow-hidden">
                  <div 
                    :ref="el => imageContainers[index] = el"
                    class="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    :style="{ backgroundImage: `url(${service.image})` }"
                  ></div>
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  <!-- Floating Icon -->
                  <div 
                    :ref="el => floatingIcons[index] = el"
                    class="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center transform transition-all duration-500"
                  >
                    <span class="text-3xl" v-html="service.icon"></span>
                  </div>

                  <!-- Category Badge -->
                  <div class="absolute bottom-4 left-4">
                    <span class="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold tracking-wider text-gray-800 shadow-lg">
                      {{ service.category }}
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-8">
                  <h3 class="text-2xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                    {{ $t(service.title) }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-6">
                    {{ $t(service.desc) }}
                  </p>

                  <!-- Features List -->
                  <div class="space-y-2 mb-6">
                    <div 
                      v-for="(feature, fIndex) in service.features" 
                      :key="fIndex"
                      class="flex items-center text-sm text-gray-700"
                    >
                      <svg class="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>{{ feature }}</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <button class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group/btn">
                    <span class="relative z-10">Reservar Ahora</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>

                <!-- Hover Glow Effect -->
                <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div class="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-pink-500/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center gap-3 mt-12">
          <button 
            v-for="(service, index) in services" 
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'transition-all duration-300 rounded-full',
              currentSlide === index 
                ? 'w-12 h-3 bg-gradient-to-r from-amber-500 to-amber-600' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            ]"
          ></button>
        </div>
      </div>

      <!-- Stats Section -->
      
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Refs
const titleSection = ref(null)
const underline = ref(null)
const blob1 = ref(null)
const blob2 = ref(null)
const carouselContainer = ref(null)
const cardsWrapper = ref(null)
const statsSection = ref(null)
const serviceCards = ref([])
const imageContainers = ref([])
const floatingIcons = ref([])
const statCards = ref([])
const currentSlide = ref(0)

// Services Data
const services = [
  {
    title: 'services.makeup_bride',
    desc: 'services.makeup_bride_desc',
    icon: '💎',
    category: 'NOVIAS',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    features: ['Prueba de maquillaje', 'Productos premium', 'Duración 8+ horas']
  },
  {
    title: 'services.makeup_quince',
    desc: 'services.makeup_quince_desc',
    icon: '👑',
    category: 'QUINCEAÑERAS',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    features: ['Estilo personalizado', 'Peinado incluido', 'Retoques durante evento']
  },
  {
    title: 'services.makeup_photo',
    desc: 'services.makeup_photo_desc',
    icon: '📸',
    category: 'FOTOGRAFÍA',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    features: ['Alta definición', 'Resistente a flash', 'Look editorial']
  },
  {
    title: 'services.waxing',
    desc: 'services.waxing_desc',
    icon: '✨',
    category: 'DEPILACIÓN',
    image: 'https://unsplash.com/photos/caucasian-lady-having-an-epilation-procedure-at-the-spa-while-lying-in-the-bed-vuRU9fJ9HxI',
    features: ['Cera premium', 'Técnica indolora', 'Piel suave por semanas']
  },
  {
    title: 'services.lash',
    desc: 'services.lash_desc',
    icon: '👁️',
    category: 'PESTAÑAS',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80',
    features: ['Diseño natural', 'Duración 6-8 semanas', 'Mirada impactante']
  },
  {
    title: 'services.massage',
    desc: 'services.massage_desc',
    icon: '🌸',
    category: 'RELAJACIÓN',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    features: ['Técnicas especializadas', 'Aromaterapia', 'Ambiente zen']
  }
]



// Carousel Functions
const scrollCarousel = (direction) => {
  const newSlide = currentSlide.value + direction
  if (newSlide >= 0 && newSlide < services.length) {
    currentSlide.value = newSlide
    updateCarousel()
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
  updateCarousel()
}

const updateCarousel = () => {
  const offset = -(currentSlide.value * 412) // 380px width + 32px gap
  gsap.to(cardsWrapper.value, {
    x: offset,
    duration: 0.7,
    ease: 'power3.out'
  })
}

const handleCardHover = (index, isHover) => {
  if (imageContainers.value[index]) {
    gsap.to(imageContainers.value[index], {
      scale: isHover ? 1.1 : 1,
      duration: 0.7,
      ease: 'power2.out'
    })
  }
  
  if (floatingIcons.value[index]) {
    gsap.to(floatingIcons.value[index], {
      y: isHover ? -8 : 0,
      rotate: isHover ? 5 : 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
  }
}

onMounted(() => {
  // Animated Blobs
  gsap.to(blob1.value, {
    x: 100,
    y: 50,
    scale: 1.2,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to(blob2.value, {
    x: -80,
    y: -60,
    scale: 1.3,
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

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
        toggleActions: 'play none none reverse'
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
        toggleActions: 'play none none reverse'
      }
    }
  )

  // Cards Stagger Animation
  serviceCards.value.forEach((card, index) => {
    if (card) {
      gsap.fromTo(card,
        { opacity: 0, y: 80, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  })

  // Stats Counter Animation
  statCards.value.forEach((stat, index) => {
    if (stat) {
      gsap.fromTo(stat,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsSection.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  })

  // Continuous floating animation for icons
  floatingIcons.value.forEach((icon) => {
    if (icon) {
      gsap.to(icon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
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

.service-card-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.service-card-3d:hover {
  transform: translateZ(20px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #f59e0b, #d97706);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #d97706, #b45309);
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>