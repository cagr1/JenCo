<template>
  <section id="about" class="py-24 px-4 bg-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title">{{ $t('about.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div ref="imageRef" class="rounded-lg overflow-hidden shadow-lg">
          <!-- <img
            src="/placeholder.svg?height=400&width=400"
            alt="Jennifer Gallardo"
            class="w-full h-full object-cover"
          /> -->
        </div>

        <!-- Text Content -->
        <div ref="contentRef" class="space-y-6">
          <p class="text-lg font-inter text-gray-700 leading-relaxed">
            {{ $t('about.bio') }}
          </p>

          <div class="border-l-4 border-gold pl-6">
            <p class="text-2xl font-cormorant text-blush italic">
              "{{ $t('about.philosophy') }}"
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
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

gsap.registerPlugin(ScrollTrigger)

const imageRef = ref(null)
const contentRef = ref(null)

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
