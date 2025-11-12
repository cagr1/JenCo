<template>
  <section class="py-24 px-4 bg-gradient-to-b from-blush/10 to-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title">{{ $t('testimonials.title') }}</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Testimonial Card 1 -->
        <div ref="testimonial1" class="testimonial-card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex mb-4">
            <span v-for="i in 5" :key="i" class="text-gold text-lg">★</span>
          </div>
          <p class="text-gray-700 italic mb-6 leading-relaxed">
            "{{ $t('testimonials.review1') }}"
          </p>
          <div class="border-t border-gray-200 pt-4">
            <p class="font-playfair font-bold text-gray-800">{{ $t('testimonials.author1') }}</p>
            <p class="text-sm text-gray-500">{{ $t('contact.followUs') }}</p>
          </div>
        </div>

        <!-- Testimonial Card 2 -->
        <div ref="testimonial2" class="testimonial-card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex mb-4">
            <span v-for="i in 5" :key="i" class="text-gold text-lg">★</span>
          </div>
          <p class="text-gray-700 italic mb-6 leading-relaxed">
            "{{ $t('testimonials.review2') }}"
          </p>
          <div class="border-t border-gray-200 pt-4">
            <p class="font-playfair font-bold text-gray-800">{{ $t('testimonials.author2') }}</p>
            <p class="text-sm text-gray-500">{{ $t('contact.followUs') }}</p>
          </div>
        </div>

        <!-- Testimonial Card 3 -->
        <div ref="testimonial3" class="testimonial-card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex mb-4">
            <span v-for="i in 5" :key="i" class="text-gold text-lg">★</span>
          </div>
          <p class="text-gray-700 italic mb-6 leading-relaxed">
            "{{ $t('testimonials.review3') }}"
          </p>
          <div class="border-t border-gray-200 pt-4">
            <p class="font-playfair font-bold text-gray-800">{{ $t('testimonials.author3') }}</p>
            <p class="text-sm text-gray-500">{{ $t('contact.followUs') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonial1 = ref(null)
const testimonial2 = ref(null)
const testimonial3 = ref(null)

onMounted(() => {
  const testimonials = [testimonial1.value, testimonial2.value, testimonial3.value]

  testimonials.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
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
.testimonial-card {
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
}
</style>
