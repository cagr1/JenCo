<template>
  <section
    id="home"
    class="relative h-[120vh] flex items-center justify-center overflow-hidden bg-black"
  >
    <!-- Imagen de fondo Parallax -->
    <div
      ref="parallaxBg"
      class="absolute inset-0 bg-cover bg-center scale-105 will-change-transform"
      :style="{ backgroundImage: `url('/src/assets/hero.png')`,
        transform: `translateY(${scrollY * 0.5}px)`,
        filter: 'brightness(0.4)'
       }"
    ></div>

    <!-- Gradiente oscuro inferior tipo Osmo -->
    <div
      class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent z-[5]"
    ></div>

    <!-- Contenido principal -->
    <div
      class="relative z-10 text-center text-white flex flex-col items-center justify-center px-4 md:pt-64 lg:pt-20 "
      :style="{
        opacity: opacity,
        transform: `scale(${scale})`
      }"
      
    >
      <!-- <h1
        ref="logoRef"
        class="text-6xl md:text-8xl font-playfair font-bold tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
      >
        Jen&nbsp;&amp;&nbsp;Co
      </h1> -->

      <!-- <h1
        ref="nameContainer"
        class="titulo text-[96px] md:text-[120px] leading-tight tracking-wider drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
      >
        <span
          v-for="(letter, i) in firstName"
          :key="'f' + i"
          class="inline-block opacity-0 translate-y-[-120px]"
        >
          {{ letter }}
        </span>
        <span class="inline-block w-8 md:w-12"></span>
     
        <span
          v-for="(letter, i) in lastName"
          :key="'l' + i"
          class="inline-block opacity-0 translate-y-[-120px]"
        >
          {{ letter }}
        </span>
      </h1> -->

      <!-- SVG Name Drawing - GIGANTE -->
<div class="scale-[2] md:scale-[2.5] origin-center">
      <svg
  viewBox="0 0 2400 1200"
  class="w-full"
  preserveAspectRatio="xMidYMid meet"
  style="filter: drop-shadow(0 20px 60px rgba(0,0,0,0.5)); max-height: 120vh;"
>
  <!-- Jennifer - Trazo -->
  <text
    x="50%"
    y="460"
    text-anchor="middle"
    class="svg-text-stroke"
    data-color="gold"
  >
    Jennifer
  </text>
  
  <!-- Gallardo - Trazo -->
  <text
    x="50%"
    y="900"
    text-anchor="middle"
    class="svg-text-stroke"
    data-color="rose"
    style="animation-delay: 0.5s"
  >
    Gallardo
  </text>

  <!-- Jennifer - Relleno -->
  <text
    x="50%"
    y="460"
    text-anchor="middle"
    class="svg-text-fill"
    data-color="gold"
  >
    Jennifer
  </text>
  
  <!-- Gallardo - Relleno -->
  <text
    x="50%"
    y="900"
    text-anchor="middle"
    class="svg-text-fill"
    data-color="rose"
  >
    Gallardo
  </text>
</svg>

</div>


      <p
        ref="taglineRef"
        class="text-lg md:text-2xl mt-6 text-rose-100 drop-shadow-sm"
      >
        {{ $t("hero.tagline") }}
      </p>

      <button
        ref="ctaRef"
        @click="scrollToContact"
        class="mt-10 px-12 py-4 bg-gradient-to-r from-rose to-gold text-white font-inter rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
      >
        {{ $t("hero.cta") }}
      </button>
    </div>

    <!-- Indicador de scroll -->
    <div
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
    >
      <svg
        class="w-6 h-6 text-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const firstName = "Jennifer".split("");
const lastName = "Gallardo".split("");


const heroRef = ref(null);
const parallaxBg = ref(null);
const nameContainer = ref(null);
const logoRef = ref(null);
const taglineRef = ref(null);
const ctaRef = ref(null);

// Variables para el efecto de scroll
const scrollY = ref(0);
const opacity = ref(1);
const scale = ref(1);

const handleScroll = () => {
  scrollY.value = window.scrollY;
  
  // Calculamos el progreso del scroll
  const heroHeight = window.innerHeight * 1.2;
  const scrollProgress = Math.min(scrollY.value / (heroHeight * 0.5), 1);
  
  opacity.value = 1 - scrollProgress;
  scale.value = 1 - scrollProgress * 0.3;
};

onMounted(async () => {
  await nextTick();

  window.addEventListener("scroll", handleScroll);
  // Animar letras una por una
  const lettersEls = nameContainer.value.querySelectorAll("span");
  gsap.to(lettersEls, {
    y: 0,
    opacity: 1,
    rotationX: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
  });

  // Fade tagline y botón
  gsap.from([taglineRef.value, ctaRef.value], {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    delay: 0.8,
  });

  // Parallax fondo
  gsap.to(parallaxBg.value, {
    yPercent: 25,
    ease: "none",
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});


const scrollToContact = () => {
  const section = document.getElementById("contact");
  section?.scrollIntoView({ behavior: "smooth" });
};


</script>

<style scoped>

.svg-text-stroke,
.svg-text-fill {
  font-size: 520px;
  font-family: 'Kaushan Script', cursive;
  font-weight: 400;
}

.svg-text-stroke {
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 4000;
  stroke-dashoffset: 4000;
  animation: drawText 3s ease-in-out forwards;
}

@media (max-width: 1024px) {
  .svg-text-stroke,
  .svg-text-fill {
    font-size: 180px;
  }
}

@media (max-width: 768px) {
  .svg-text-stroke,
  .svg-text-fill {
    font-size: 100px;
  }
}

.svg-text-stroke[data-color="gold"] {
  stroke: #D9B44A;
}

.svg-text-stroke[data-color="rose"] {
  stroke: #E8A0B0;
}

.svg-text-fill {
  opacity: 0;
  animation: fillText 1s ease-in-out 2.5s forwards;
}

.svg-text-fill[data-color="gold"] {
  fill: #D9B44A;
  animation-delay: 2.5s;
}

.svg-text-fill[data-color="rose"] {
  fill: #E8A0B0;
  animation-delay: 3s;
}

/* Animations */
@keyframes drawText {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fillText {
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tagline y CTA */
.tagline {
  opacity: 0;
  animation: fadeInUp 1s ease-out 3.5s forwards;
}

.cta-button {
  opacity: 0;
  animation: fadeInUp 1s ease-out 4s forwards;
}

/* Responsive */
@media (max-width: 768px) {
  .svg-text-stroke,
  .svg-text-fill {
    font-size: 40px;
  }
}

/* Efecto flotante sutil */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-25px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.titulo {
  font-family: "Kaushan Script", cursive;
}

/* Navbar translúcido (aplica si tienes componente header fijo) */
header {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
}
</style>
