<template>
  <section id="gallery" class="py-24 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title">{{ $t('nav.gallery') }}</h2>

      <div class="relative">
        <div class="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            class="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg snap-start"
            :ref="(el) => (galleryItems[index] = el)"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery navigation buttons (mobile-friendly) -->
      <div class="flex justify-center gap-4 mt-8">
        <button @click="scroll(-1)" class="p-2 rounded-full border border-gold hover:bg-blush transition">←</button>
        <button @click="scroll(1)" class="p-2 rounded-full border border-gold hover:bg-blush transition">→</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = ref([
  { src: '/placeholder.svg?height=400&width=400', alt: 'Bridal Makeup' },
  { src: '/placeholder.svg?height=400&width=400', alt: 'Professional Makeup' },
  { src: '/placeholder.svg?height=400&width=400', alt: 'Beauty Treatment' },
  { src: '/placeholder.svg?height=400&width=400', alt: 'Makeup Session' },
  { src: '/placeholder.svg?height=400&width=400', alt: 'Beauty Salon' },
  { src: '/placeholder.svg?height=400&width=400', alt: 'Spa Treatment' }
])

const galleryItems = ref([])

onMounted(() => {
  galleryItems.value.forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})

const scroll = (direction) => {
  const container = document.querySelector('.flex.overflow-x-auto')
  const scrollAmount = container.clientWidth * 0.8
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  })
}
</script>
