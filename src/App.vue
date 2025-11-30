<template>
  <div class="min-h-screen bg-linen text-graphite">
    <!-- NAVBAR: fixed, glass, responsive, auto-hide -->
    <header
      :class="[
        'fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none', 
      ]"
      aria-hidden="false"
    >
      <nav
        :class="[
          'w-[min(1200px,calc(100%-2rem))] pointer-events-auto transition-transform duration-300 ease-out',
          visible ? 'translate-y-0' : '-translate-y-28',
        ]"
        :style="{ willChange: 'transform' }"
      >
        <div
          class="glass-card rounded-full px-4 md:px-6 py-3 flex items-center justify-between gap-4 shadow-sm border border-white/20 bg-white/10 backdrop-blur-xl"
          role="navigation"
          aria-label="Main navigation"
        >
          <!-- left: brand -->
          <div class="flex items-center gap-3">
            <img :src="logoJen" alt="Jennifer & Co" class="h-9 md:h-11 w-auto select-none" />
            
          </div>

          <!-- center: nav links (desktop) -->
          <div class="hidden md:flex items-center gap-8">
            <a
              v-for="item in navItems"
              :key="item.key"
              :href="item.href"
              @click.prevent="handleNavClick($event, item.href)"
              class="text-sm font-inter hover:text-rose transition-colors duration-300 relative group"
            >
              {{ $t(item.key) }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <!-- right: language switch + mobile button -->
          <div class="flex items-center gap-3">
            <!-- Language switch pill -->
            <div
              class="flex items-center rounded-full px-1.5 py-0.5 border border-white/10 bg-white/5"
              role="tablist"
              aria-label="Idioma"
            >
              <button
                @click="setLocale('en')"
                :aria-pressed="$i18n.locale === 'en'"
                class="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-250"
                :class="locale.value === 'en' ? 'bg-rose/10 text-rose font-bold' : 'text-graphite hover:text-rose-300 hover:bg-white/3'"
              >
                EN
              </button>
              <button
                @click="setLocale('es')"
                :aria-pressed="$i18n.locale === 'es'"
                class="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-250"
                :class="locale.value === 'es' ? 'bg-rose/10 text-rose font-bold' : 'text-graphite hover:text-rose-300 hover:bg-white/3'"
              >
                ES
              </button>
            </div>

            <!-- Hamburger (mobile) -->
            <button
              @click="toggleMenu"
              class="md:hidden text-2xl p-2 rounded-full hover:bg-white/5 transition-all"
              :aria-expanded="menuOpen"
              aria-label="Open menu"
            >
              <span v-if="!menuOpen">☰</span>
              <span v-else>✕</span>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mobile menu slide -->
    <transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-40 md:hidden"
        @click.self="menuOpen = false"
      >
        <div class="absolute top-20 left-4 right-4 bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg">
          <nav class="flex flex-col gap-4">
            <a
              v-for="item in navItems"
              :key="item.key + '-mobile'"
              :href="item.href"
              @click.prevent="handleNavClick($event, item.href)"
              class="text-lg font-medium"
            >
              {{ $t(item.key) }}
            </a>

            <div class="pt-2 border-t border-white/6 mt-2 flex items-center gap-2">
              <button @click="setLocale('en')" :class="localeBtnClass('en')" class="flex-1 py-2 rounded-md">EN</button>
              <button @click="setLocale('es')" :class="localeBtnClass('es')" class="flex-1 py-2 rounded-md">ES</button>
            </div>
          </nav>
        </div>
      </div>
    </transition>

    <!-- Page sections -->
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <!-- footer (unchanged) -->
    <footer class="bg-cocoa text-linen text-center py-12">
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
      <p class="text-sm opacity-80">&copy; {{ new Date().getFullYear() }} Jennifer & Co. Made with ❤️ by CG. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import GallerySection from './components/GallerySection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import { useSmoothScroll } from './composables/useSmoothScroll'
import logoJen from './assets/logo.png'

const menuOpen = ref(false)
const visible = ref(true) // controls translateY for hide/show
const lastScroll = { y: 0 }
let mouseTimeout = null
const {locale} = useI18n()

// smooth scroll util (keeps your existing behaviour)
const { smoothScrollTo } = useSmoothScroll({ duration: 800, offset: 80 })

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.contact', href: '#contact' },
]

const handleNavClick = (e, href) => {
  e.preventDefault()
  smoothScrollTo(href)
  menuOpen.value = false
}

// Locale helpers (keeps your existing i18n API)
const setLocale = (l) => {
  if (locale.value === l) return
  locale.value = l
}

// classes for mobile locale buttons
const localeBtnClass = (l) => {
  return $i18n.locale === l
    ? 'bg-rose/10 text-rose font-bold'
    : 'text-white/80 hover:bg-white/3'
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  // when opening menu, ensure navbar is visible
  if (menuOpen.value) visible.value = true
}

// Auto hide/show logic: hide on scroll down, show on scroll up; also show on mousemove briefly
function onScrollHandler() {
  const y = window.scrollY || window.pageYOffset
  const delta = y - lastScroll.y

  // if menu open keep visible
  if (menuOpen.value) {
    lastScroll.y = y
    return
  }

  if (Math.abs(delta) < 5) {
    // tiny jitter ignore
    return
  }

  if (delta > 0 && y > 30) {
    // scrolled down
    visible.value = false
  } else if (delta < 0) {
    // scrolled up
    visible.value = true
  }
  lastScroll.y = y
}

function onMouseMoveHandler() {
  // show on mouse move
  visible.value = true
  if (mouseTimeout) clearTimeout(mouseTimeout)
  // hide after short idle if user has scrolled down far
  mouseTimeout = setTimeout(() => {
    if (window.scrollY > 60) {
      visible.value = false
    }
  }, 1800)
}

onMounted(() => {
  lastScroll.y = window.scrollY || window.pageYOffset

  window.addEventListener('scroll', onScrollHandler, { passive: true })
  window.addEventListener('mousemove', onMouseMoveHandler)

  // keep nav visible briefly on load so user sees it
  setTimeout(() => { visible.value = true }, 100)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScrollHandler)
  window.removeEventListener('mousemove', onMouseMoveHandler)
  if (mouseTimeout) clearTimeout(mouseTimeout)
})
</script>

<style scoped>
/* small transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 180ms ease, transform 200ms ease;
}
.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}
.mobile-menu-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* glass-card helper (kept local so you can reuse) */
.glass-card {
  background-clip: padding-box;
}

/* accessibility: reduce motion respect */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}

/* small fix: ensure header doesn't overlap when hidden */
header {
  pointer-events: none;
}
header > nav {
  pointer-events: auto;
}
</style>
