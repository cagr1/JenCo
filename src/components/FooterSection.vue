<template>
  <footer 
    ref="footerRef"
    class="footer-container bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-stone-400 py-20 px-6 border-t border-stone-800 relative overflow-hidden"
  >
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-96 h-96 bg-powder-blush-400 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-gold/50 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10 ">
      <!-- Giant Name -->
      <motion.h2 
        class="footer-title text-[10vw] md:text-[10vw] leading-[1.4] font-playfair text-stone-100 tracking-tighter mb-16 text-center  opacity-90 text-left md:text-left"
        :initial="{ opacity: 0, y: 50 }"
        :in-view="{ opacity: 0.9, y: 0 }"
        :transition="{ duration: 1, ease: [0.16, 1, 0.3, 1] }"
      >
        Jennifer Gallardo
      </motion.h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Tagline -->
        <motion.div 
          class="col-span-1 sm:col-span-2 lg:col-span-1"
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.1 }"
        >
          <p class="text-stone-300 text-lg leading-relaxed italic">
            {{ $t('footer.subtitle') }}
          </p>
        </motion.div>

        <!-- Services -->
        <motion.div 
          class="flex flex-col gap-3"
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.2 }"
        >
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-2">
            {{ $t('services.title') }}
          </h4>
          <a href="#services" class="footer-link">{{ $t('footer.services.makeup') }}</a>
          <a href="#services" class="footer-link">{{ $t('footer.services.waxing') }}</a>
          <a href="#services" class="footer-link">{{ $t('footer.services.lash') }}</a>
          <a href="#services" class="footer-link">{{ $t('footer.services.massage') }}</a>
        </motion.div>

        <!-- Links -->
        <motion.div 
          class="flex flex-col gap-3"
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.3 }"
        >
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-2">
            {{ $t('footer.linkTitle') }}
          </h4>
          <a href="#home" class="footer-link">{{ $t('footer.links.home') }}</a>
          <a href="#about" class="footer-link">{{ $t('footer.links.about') }}</a>
          <a href="#services" class="footer-link">{{ $t('footer.links.services') }}</a>
          <a href="#gallery" class="footer-link">{{ $t('footer.links.gallery') }}</a>
          <a href="#testimonials" class="footer-link">{{ $t('footer.links.testimonials') }}</a>
        </motion.div>

        <!-- Contact Info -->
        <motion.div 
          class="flex flex-col gap-3"
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.4 }"
        >
          <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-2">
            {{ $t('contact.title') }}
          </h4>
          <a href="tel:+14169980495" class="footer-link">+1 (416) 998-0495</a>
          <a href="mailto:jenn130888@gmail.com" class="footer-link">jenn130888@gmail.com</a>
          <p class="text-sm">North York, ON</p>
          
          <!-- Social Icons -->
          <div class="flex gap-4 mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="Instagram"
            >
              <Icon icon="heroicons:camera" class="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/14169980495"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="WhatsApp"
            >
              <Icon icon="heroicons:chat-bubble-left-ellipsis" class="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="Facebook"
            >
              <Icon icon="heroicons:globe-alt" class="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <!-- Bottom Bar -->
      <motion.div 
        class="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest"
        :initial="{ opacity: 0 }"
        :in-view="{ opacity: 1 }"
        :transition="{ duration: 0.8, delay: 0.5 }"
      >
        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <p class="text-stone-500">
            © {{ new Date().getFullYear() }} Jennifer Gallardo. {{ $t('footer.rights') }}
          </p>
          <div class="flex gap-4 text-stone-600">
            <a href="#" class="hover:text-stone-400 transition-colors">{{ $t('footer.privacy') }}</a>
            <span>•</span>
            <a href="#" class="hover:text-stone-400 transition-colors">{{ $t('footer.terms') }}</a>
          </div>
        </div>
        <p class="text-stone-500">
          Made with <span class="text-red-400">❤️</span> by <span class="text-stone-300 font-semibold">CG</span>
        </p>
      </motion.div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { motion } from 'motion-v'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerRef = ref(null)

onMounted(() => {
  if (!footerRef.value) return

  // Footer Reveal Effect - Similar to paisana.studio
  gsap.set(footerRef.value, {
    yPercent: 100,
    opacity: 0
  })

  ScrollTrigger.create({
    trigger: footerRef.value,
    start: 'top bottom',
    end: 'top 80%',
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress
      gsap.to(footerRef.value, {
        yPercent: 100 - (progress * 100),
        opacity: progress,
        duration: 0.1,
        ease: 'none'
      })
    }
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
/* Footer Container */
.footer-container {
  position: relative;
}

/* Footer Title */
.footer-title {
  background: linear-gradient(
    135deg,
    #f5f5f5 0%,
    #e5e5e5 50%,
    #d5d5d5 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Footer Links */
.footer-link {
  color: #a8a29e;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 0;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: #f5f5f5;
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: #f5f5f5;
  padding-left: 8px;
}

.footer-link:hover::before {
  width: 20px;
}

/* Social Icons */
.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a8a29e;
  border: 1px solid #44403c;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #f5f5f5;
  border-color: #78716c;
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.05);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-title {
    font-size: 12vw;
    text-align: center;
  }
}
</style>