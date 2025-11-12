<template>
  <div class="min-h-screen bg-linen text-graphite">
     <header class="fixed top-0 w-full bg-white/25 backdrop-blur-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-50">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img :src="logoJen" alt="Jennifer & Co"  class="h-10 md:h-12 w-auto select-none"/>

        </div>

        <button @click="toggleMenu" class="md:hidden text-2xl">☰</button>

        <div :class="['hidden md:flex gap-8']">
          <a v-for="item in navItems" :key="item.key"
             :href="item.href"
             class="text-sm font-inter hover:text-gold transition">
             {{ $t(item.key) }}
          </a>
        </div>

        <div class="flex gap-3">
          <button @click="$i18n.locale = 'en'"
                  :class="['px-3 py-1 text-sm transition', $i18n.locale === 'en' ? 'text-gold font-bold' : 'text-gray-500']">
            EN
          </button>
          <button @click="$i18n.locale = 'es'"
                  :class="['px-3 py-1 text-sm transition', $i18n.locale === 'es' ? 'text-gold font-bold' : 'text-gray-500']">
            ES
          </button>
        </div>
      </nav>
    </header>

    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />

    <footer class="bg-gray-900 text-white text-center py-8">
      <div class="relative overflow-hidden h-24 mb-6">
  <span
    v-for="n in 15"
    :key="n"
    class="absolute text-gold font-rage text-3xl opacity-80 animate-fall"
    :style="{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      fontSize: `${Math.random() * 1.5 + 1}rem`
    }"
  >
    Jen&nbsp;&amp;&nbsp;Co
  </span>
</div>
      <p class="text-sm">&copy; {{ new Date().getFullYear() }}   Made with ❤️ by CG. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import GallerySection from './components/GallerySection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import logoJen from './assets/logo.png'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.contact', href: '#contact' },
]


</script>

<style scoped>
header {
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
