<template>
  <section id="gallery" class="py-24 px-4 bg-porcelain-50 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <motion.div
        class="max-w-3xl text-center mx-auto mb-12"
        :initial="{ opacity: 0, y: 40 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
      >
      
        <h2 class="section-title text-powder-blush-800 text-center mb-20 title opacity-0">{{ $t('nav.gallery') }}</h2>
      </motion.div>
      <div class="grid-container z-10">
        <div class="grid">
          <!-- Primera columna (2 imágenes) -->
          <div class="col">
            <div
              v-for="index in [0, 1]"
              :key="index"
              class="gallery-card"
            >
              <img
                :src="galleryImages[index].src"
                :alt="galleryImages[index].alt"
                class="w-full h-full object-cover "
              />
            </div>
          </div>

          <!-- Segunda columna (2 imágenes) -->
          <div class="col">
            <div
              v-for="index in [2, 3]"
              :key="index"
              class="gallery-card"
            >
              <img
                :src="galleryImages[index].src"
                :alt="galleryImages[index].alt"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Tercera columna (2 imágenes) -->
          <div class="col">
            <div
              v-for="index in [4, 5]"
              :key="index"
              class="gallery-card"
            >
              <img
                :src="galleryImages[index].src"
                :alt="galleryImages[index].alt"
                class="w-full h-full object-cover z-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion} from 'motion-v'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = ref([
  { src: '/gallery/Gallery1.png', alt: 'Bridal Makeup 1' },
  { src: '/gallery/Gallery2.png', alt: 'Professional Makeup 1' },
  { src: '/gallery/Gallery3.JPG', alt: 'Beauty Treatment 1' },
  { src: '/gallery/Gallery4.JPG', alt: 'Bridal Makeup 2' },
  { src: '/gallery/Gallery5.png', alt: 'Professional Makeup 2' },
  { src: '/gallery/Gallery6.png', alt: 'Beauty Treatment 2' }
])

let scrollTriggers = []

onMounted(() => {
  // Animación del título
  gsap.to('.title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  })

  // Animación de entrada del grid
  const gridTrigger = gsap.from('.grid', {
    opacity: 0,
    y: 100,
    ease: 'power2.out',
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.grid',
      start: 'top 100%',
      toggleActions: 'play none none none'
    }
  })
  scrollTriggers.push(gridTrigger.scrollTrigger)

  // Parallax effect - cada columna se mueve a diferente velocidad
  const cols = gsap.utils.toArray('.col')
  
  cols.forEach((col, index) => {
    // Velocidades diferentes: col1 = rápida, col2 = media, col3 = lenta
    const speed = [0.8, 0.5, 0.3][index]
    
    const trigger = gsap.to(col, {
      y: -150 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: '.grid-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    })
    scrollTriggers.push(trigger.scrollTrigger)
  })

  // Animación individual de cada card al entrar en viewport
  gsap.utils.toArray('.gallery-card').forEach((card, index) => {
    const trigger = gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      delay: (index % 2) * 0.1
    })
    scrollTriggers.push(trigger.scrollTrigger)
  })
})

onUnmounted(() => {
  scrollTriggers.forEach(trigger => trigger?.kill())
})
</script>

<style scoped>
.grid-container {
  width: 100%;
  position: relative;
  padding-bottom: 4rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  justify-items: center;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.gallery-card {
  width: 100%;
  max-width: 320px;
  height: 420px;
  margin: 0 auto;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.gallery-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
}

.gallery-card:hover::before {
  opacity: 1;
}

.gallery-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.15);
}

.gallery-card img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
              filter 0.4s ease;
  filter: grayscale(100%) brightness(0.95);
  will-change: transform, filter;
}

.gallery-card:hover img {
  transform: scale(1.08);
  filter: grayscale(0%) brightness(1);
}

/* Tablet: 2 columnas, última fila centrada */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .col:last-child {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }

  .gallery-card {
    max-width: 300px;
    height: 400px;
  }
}

/* Mobile: 1 columna */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .col {
    gap: 1.5rem;
  }

  .col:last-child {
    flex-direction: column;
  }

  .gallery-card {
    max-width: 100%;
    height: auto;
    aspect-ratio: 3/4;
  }

  /* En mobile desactivamos el parallax para mejor performance */
  .col {
    transform: none !important;
  }
}
</style>