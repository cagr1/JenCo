<template>
  <section 
    id="testimonials" 
    class="relative py-20 px-4 bg-porcelain-50 overflow-hidden" 
    
  >
    <div class="max-w-6xl mx-auto">
      
      <!-- Animated Background SVG -->
      

      <!-- Section Title -->
      <motion.div
        class="max-w-3xl md:mr-auto md:ml-16 md:text-left mb-16"
        :initial="{ opacity: 0, y: 40 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
      >
        <h2
          class="section-title text-powder-blush-800 md:text-left"
        >
           {{ $t('testimonials.title') }}
        </h2>
      </motion.div>

      <div class="grid md:grid-cols-3 gap-8 mt-12">
        <!-- Testimonial Card 1 -->
        <motion.div
          ref="testimonial1"
          class="testimonial-card group"
          :initial="{ opacity: 0, y: 60, rotateX: -15 }"
          :in-view="{ opacity: 1, y: 0, rotateX: 0 }"
          :transition="{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }"
        >
          <div class="card-content">
            <!-- Quote Icon -->
            <div class="quote-icon">
              <Icon icon="bi:quote" class="w-8 h-8 text-powder-blush-400/30" />
            </div>

            <!-- Animated Stars -->
            <div class="flex gap-1 mb-6">
              <motion.span
                v-for="i in 5"
                :key="i"
                class="star"
                :initial="{ opacity: 0, scale: 0, rotate: -180 }"
                :in-view="{ opacity: 1, scale: 1, rotate: 0 }"
                :transition="{ 
                  delay: 0.3 + (i * 0.08), 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }"
              >
                ★
              </motion.span>
            </div>

            <!-- Review Text -->
            <p class="review-text">
              "{{ $t('testimonials.review1') }}"
            </p>

            <!-- Author Info with Gradient Line -->
            <div class="author-section">
              <div class="gradient-line"></div>
              <p class="author-name">{{ $t('testimonials.author1') }}</p>
              <p class="author-role">{{ $t('contact.followUs') }}</p>
            </div>

            <!-- Hover Gradient Effect -->
            <div class="hover-gradient"></div>
          </div>
        </motion.div>

        <!-- Testimonial Card 2 -->
        <motion.div
          ref="testimonial2"
          class="testimonial-card group"
          :initial="{ opacity: 0, y: 60, rotateX: -15 }"
          :in-view="{ opacity: 1, y: 0, rotateX: 0 }"
          :transition="{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }"
        >
          <div class="card-content">
            <div class="quote-icon">
              <Icon icon="bi:quote" class="w-8 h-8 text-powder-blush-400/30" />
            </div>

            <div class="flex gap-1 mb-6">
              <motion.span
                v-for="i in 5"
                :key="i"
                class="star"
                :initial="{ opacity: 0, scale: 0, rotate: -180 }"
                :in-view="{ opacity: 1, scale: 1, rotate: 0 }"
                :transition="{ 
                  delay: 0.5 + (i * 0.08), 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }"
              >
                ★
              </motion.span>
            </div>

            <p class="review-text">
              "{{ $t('testimonials.review2') }}"
            </p>

            <div class="author-section">
              <div class="gradient-line"></div>
              <p class="author-name">{{ $t('testimonials.author2') }}</p>
              <p class="author-role">{{ $t('contact.followUs') }}</p>
            </div>

            <div class="hover-gradient"></div>
          </div>
        </motion.div>

        <!-- Testimonial Card 3 -->
        <motion.div
          ref="testimonial3"
          class="testimonial-card group"
          :initial="{ opacity: 0, y: 60, rotateX: -15 }"
          :in-view="{ opacity: 1, y: 0, rotateX: 0 }"
          :transition="{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5,
          }"
        >
          <div class="card-content">
            <div class="quote-icon">
              <Icon icon="bi:quote" class="w-8 h-8 text-powder-blush-400/30" />
            </div>

            <div class="flex gap-1 mb-6">
              <motion.span
                v-for="i in 5"
                :key="i"
                class="star"
                :initial="{ opacity: 0, scale: 0, rotate: -180 }"
                :in-view="{ opacity: 1, scale: 1, rotate: 0 }"
                :transition="{ 
                  delay: 0.7 + (i * 0.08), 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }"
              >
                ★
              </motion.span>
            </div>

            <p class="review-text">
              "{{ $t('testimonials.review3') }}"
            </p>

            <div class="author-section">
              <div class="gradient-line"></div>
              <p class="author-name">{{ $t('testimonials.author3') }}</p>
              <p class="author-role">{{ $t('contact.followUs') }}</p>
            </div>

            <div class="hover-gradient"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { motion } from "motion-v";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


</script>

<style scoped>
  @import '../styles/effects.css';
.testimonial-card {
  perspective: 1000px;
  height: 100%;
}

.card-content {
  position: relative;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 
    0 10px 30px rgba(81, 32, 21, 0.08),
    0 1px 3px rgba(81, 32, 21, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.testimonial-card:hover .card-content {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 50px rgba(81, 32, 21, 0.15),
    0 5px 15px rgba(228, 77, 46, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

/* Quote Icon */
.quote-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  opacity: 1;
  transition: all 0.4s ease;
}

.testimonial-card:hover .quote-icon {
  transform: scale(1.2) rotate(5deg);
  opacity: 0.6;
}

/* Animated Stars */
.star {
  font-size: 1.25rem;
  color: #E4B649;
  display: inline-block;
  filter: drop-shadow(0 2px 4px rgba(228, 182, 73, 0.3));
  transition: all 0.3s ease;
}

.testimonial-card:hover .star {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(228, 182, 73, 0.5));
}

/* Review Text */
.review-text {
  color: #4A4A4A;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.75;
  flex: 1;
  font-size: 0.95rem;
  position: relative;
  z-index: 2;
}

/* Author Section */
.author-section {
  margin-top: auto;
  position: relative;
  z-index: 2;
}

.gradient-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #512015 0%, #E44D2E 100%);
  border-radius: 2px;
  margin-bottom: 1rem;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.testimonial-card:hover .gradient-line {
  width: 100px;
}

.author-name {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #512015;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.author-role {
  font-size: 0.875rem;
  color: #8B7355;
  opacity: 0.8;
}

/* Hover Gradient Effect */
.hover-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(228, 77, 46, 0.05) 100%);
  transition: height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 0 0 1.5rem 1.5rem;
}

.testimonial-card:hover .hover-gradient {
  height: 120px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-content {
    padding: 1.5rem;
  }

  .review-text {
    font-size: 0.9rem;
  }

  .star {
    font-size: 1.1rem;
  }
  

}
</style>