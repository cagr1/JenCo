<template>
  <section id="services" class="py-24 px-4 bg-cream">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title">{{ $t('services.title') }}</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Service Card 1 -->
        <div ref="card1" class="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div class="mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blush to-gold flex items-center justify-center text-3xl">
              💄
            </div>
          </div>
          <h3 class="text-xl font-playfair font-bold text-gray-800 mb-2">{{ $t('services.makeup_bride') }}</h3>
          <p class="text-gray-600 text-sm">{{ $t('services.makeup_bride_desc') }}</p>
        </div>

        <!-- Service Card 2 -->
        <div ref="card2" class="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div class="mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-blush flex items-center justify-center text-3xl">
              ✨
            </div>
          </div>
          <h3 class="text-xl font-playfair font-bold text-gray-800 mb-2">{{ $t('services.makeup_quince') }}</h3>
          <p class="text-gray-600 text-sm">{{ $t('services.makeup_quince_desc') }}</p>
        </div>

        <!-- Service Card 3 -->
        <div ref="card3" class="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div class="mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blush to-nude flex items-center justify-center text-3xl">
              📸
            </div>
          </div>
          <h3 class="text-xl font-playfair font-bold text-gray-800 mb-2">{{ $t('services.makeup_photo') }}</h3>
          <p class="text-gray-600 text-sm">{{ $t('services.makeup_photo_desc') }}</p>
        </div>

        <!-- Service Card 4 -->
        <div ref="card4" class="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div class="mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-nude flex items-center justify-center text-3xl">
              🧴
            </div>
          </div>
          <h3 class="text-xl font-playfair font-bold text-gray-800 mb-2">{{ $t('services.waxing') }}</h3>
          <p class="text-gray-600 text-sm">{{ $t('services.waxing_desc') }}</p>
        </div>

        <!-- Service Card 5 -->
        <div ref="card5" class="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div class="mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blush to-gold flex items-center justify-center text-3xl">
              👁️
            </div>
          </div>
          <h3 class="text-xl font-playfair font-bold text-gray-800 mb-2">{{ $t('services.lash') }}</h3>
          <p class="text-gray-600 text-sm">{{ $t('services.lash_desc') }}</p>
        </div>

        <!-- Service Card 6 -->
        <div ref="card6" class="service-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
          <div class="mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-nude to-blush flex items-center justify-center text-3xl">
              🧘
            </div>
          </div>
          <h3 class="text-xl font-playfair font-bold text-gray-800 mb-2">{{ $t('services.massage') }}</h3>
          <p class="text-gray-600 text-sm">{{ $t('services.massage_desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = ref([])
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)
const card5 = ref(null)
const card6 = ref(null)

onMounted(() => {
  cards.value = [card1.value, card2.value, card3.value, card4.value, card5.value, card6.value]

  cards.value.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
}
</style>
