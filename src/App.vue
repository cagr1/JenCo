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

          <!-- center: nav links (desktop) CON EFECTO GRADIENT -->
          <div class="hidden md:flex items-center gap-8">
            <a
              v-for="item in navItems"
              :key="item.key"
              :href="item.href"
              @click.prevent="handleNavClick($event, item.href)"
              class="nav-link text-sm font-inter text-stone-700 py-2 transition-colors duration-300"
            >
              {{ $t(item.key) }}
            </a>
          </div>

          <!-- right: language switch + mobile button -->
          <div class="flex items-center gap-3">
            <!-- True Language Switch -->
            <div class="switch">
              <input 
                id="language-toggle" 
                class="check-toggle check-toggle-round-flat" 
                type="checkbox"
                :checked="locale.value === 'es'"
                @change="toggleLocale"
              >
              <label for="language-toggle"></label>
              <span class="on">ES</span>
              <span class="off">EN</span>
            </div>

            <!-- Hamburger (mobile) -->
            <button
              @click="toggleMenu"
              class="md:hidden text-2xl p-2 rounded-full hover:bg-white/10 transition-all duration-300"
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
        <div class="absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
          <nav class="flex flex-col gap-3">
            <a
              v-for="item in navItems"
              :key="item.key + '-mobile'"
              :href="item.href"
              @click.prevent="handleNavClick($event, item.href)"
              class="nav-link-mobile text-lg font-medium text-stone-700 py-3 px-4 rounded-lg transition-all duration-300"
            >
              {{ $t(item.key) }}
            </a>

            <!-- True Language Switch for Mobile -->
            <div class="pt-4  mt-2 flex justify-center">
              <div class="switch switch-mobile">
                <input 
                  id="language-toggle-mobile" 
                  class="check-toggle check-toggle-round-flat" 
                  type="checkbox"
                  :checked="locale.value === 'es'"
                  @change="toggleLocale"
                >
                <label for="language-toggle-mobile"></label>
                <span class="on">ES</span>
                <span class="off">EN</span>
              </div>
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
      <FooterSection />
    </main>

    
    
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
import FooterSection from './components/FooterSection.vue'
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
  { key: 'nav.testimonials', href: '#testimonials' },
  { key: 'nav.contact', href: '#contact' },
]

const handleNavClick = (e, href) => {
  e.preventDefault()
  smoothScrollTo(href)
  menuOpen.value = false
}

// Toggle locale function for the switch
const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
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

  console.log('Scroll:', { y, delta, menuOpen: menuOpen.value, visible: visible.value })
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

/* Efectos de transform mejorados */
.transform {
  transform: translateZ(0);
}
.hover\:scale-102:hover {
  transform: scale(1.02) translateZ(0);
}
.scale-105 {
  transform: scale(1.05) translateZ(0);
}

/* EFECTO GRADIENT PARA NAV LINKS - Desktop */
.nav-link {
  background:
    linear-gradient(
      to right,
      rgba(120, 53, 15, 1),  /* stone-700 */
      rgba(120, 53, 15, 1)
    ),
    linear-gradient(
      to right,
      rgba(223, 150, 134, 1),  
      rgba(212, 116, 94, 1),  
      rgba(81, 32, 21, 1)   
  );
  background-size: 0 2px, 0 2px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms, color 300ms;
}

.nav-link:hover {
  background-size: 0 2px, 100% 2px;
  color: rgba(120, 53, 15, 0.9); /* stone-700 con opacidad */
}

/* EFECTO GRADIENT PARA NAV LINKS - Mobile */
.nav-link-mobile {
  background:
    linear-gradient(
      to right,
      rgba(120, 53, 15, 1),  /* stone-700 */
      rgba(120, 53, 15, 1)
    ),
    linear-gradient(
      to right,
      rgba(223, 150, 134, 1),  
      rgba(212, 116, 94, 1),  
      rgba(81, 32, 21, 1)   
  );
  background-size: 0 2px, 0 2px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms, color 300ms, background-color 300ms;
}

.nav-link-mobile:hover {
  background-size: 0 2px, 100% 2px;
  color: rgba(120, 53, 15, 0.9);
  background-color: rgba(255, 255, 255, 0.15);
}

/* TRUE LANGUAGE SWITCH STYLES - Professional color scheme */
.switch {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  transform: scale(0.9);
}

.switch > span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-weight: bold;
  font-size: 11px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .1);
  width: 50%;
  text-align: center;
  z-index: 2;
}

/* Estado cuando está en ES (checked) - ES activo */
input.check-toggle-round-flat:checked ~ .off {
  color: #8e7171; /* EN en shadow-grey-500 cuando ES está activo */
}

input.check-toggle-round-flat:checked ~ .on {
  color: #fff; /* ES en blanco cuando está activo */
}

/* Estado por defecto (EN activo) */
.switch > span.on {
  left: 0;
  padding-left: 4px;
  color: #8e7171; /* ES en shadow-grey-500 por defecto */
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #fff; /* EN en blanco por defecto */
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

/* Switch background - usando cinnamon-wood para mejor contraste */
input.check-toggle-round-flat + label {
  padding: 2px;
  width: 80px;
  height: 32px;
   background-color: #BF6840; /* Color sólido cinnamon-wood */
  border: 2px solid #BF6840; 
  border-radius: 60px;
  transition: all 0.3s ease;
  
}

input.check-toggle-round-flat + label:before, 
input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #BF6840; /* Color sólido cinnamon-wood */
  backdrop-filter: blur(8px);
  border-radius: 60px;
  transition: background-color 0.3s;
}

input.check-toggle-round-flat + label:after {
  top: 3px;
  left: 3px;
  bottom: 3px;
  width: 38px;
  background: linear-gradient(135deg, #f6e8d5, #d9a259); /* antique-white-100 a antique-white-400 */
  border-radius: 50px;
  transition: margin 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
}

/* Estado cuando está activado (ES seleccionado) */
input.check-toggle-round-flat:checked + label {
  background: #BF6840
  
}

input.check-toggle-round-flat:checked + label:after {
  margin-left: 34px; /* mueve el slider a la derecha para ES */
  background: linear-gradient(135deg, #f6e8d5, #d9a259); 
  
}

/* Mobile version adjustments */
.switch-mobile {
  margin: 0;
  transform: scale(0.8);
}

.switch-mobile input.check-toggle-round-flat + label {
  width: 70px;
  height: 28px;
}

.switch-mobile input.check-toggle-round-flat + label:after {
  width: 32px;
}

.switch-mobile input.check-toggle-round-flat:checked + label:after {
  margin-left: 32px;
}

</style>