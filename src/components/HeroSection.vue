<template>
  <section
    id="home"
    class="relative h-[120vh] flex items-center justify-center overflow-hidden bg-black"
  >
    <!-- Imagen de fondo Parallax -->
    <div
      ref="parallaxBg"
      class="absolute inset-0 bg-cover bg-center scale-105 will-change-transform"
      :style="{ backgroundImage: `url('/src/assets/hero.png')` }"
    ></div>

    <!-- Gradiente oscuro inferior tipo Osmo -->
    <div
      class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent z-[5]"
    ></div>

    <!-- Contenido principal -->
    <div
      class="relative z-10 text-center text-white flex flex-col items-center justify-center"
    >
      <!-- <h1
        ref="logoRef"
        class="text-6xl md:text-8xl font-playfair font-bold tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
      >
        Jen&nbsp;&amp;&nbsp;Co
      </h1> -->

      <h1
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
        <!-- espacio visual -->
        <span
          v-for="(letter, i) in lastName"
          :key="'l' + i"
          class="inline-block opacity-0 translate-y-[-120px]"
        >
          {{ letter }}
        </span>
      </h1>

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

const parallaxBg = ref(null);
const nameContainer = ref(null);
const logoRef = ref(null);
const taglineRef = ref(null);
const ctaRef = ref(null);

onMounted(async () => {
  await nextTick();

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
