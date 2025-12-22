<template>
  <section id="contact" class="relative py-24 px-4 bg-porcelain-50">
    <div class="max-w-5xl mx-auto">
      <!-- Section Title -->
      <motion.div
        class="max-w-3xl md:mr-auto md:ml-16 md:text-left mb-16"
        :initial="{ opacity: 0, y: 40 }"
        :in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
      >
        <h2 class="section-title text-powder-blush-800 md:text-right">
          {{ $t('contact.title') }}
        </h2>
      </motion.div>

      <div class="grid md:grid-cols-2 gap-16 items-start">
        <!-- Left Column - Contact Info -->
        <div class="space-y-0">
          <!-- Phone -->
          <motion.div
            class="contact-item"
            :initial="{ opacity: 0, x: -30 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }"
          >
            <div class="flex items-start gap-4">
              <Icon icon="heroicons:phone" class="w-6 h-6 text-powder-blush-800 flex-shrink-0 mt-1" />
              <div class="flex-1">
                <a href="tel:+14169980495" class="contact-value">
                  +1 (416) 998-0495
                </a>
              </div>
            </div>
          </motion.div>

          <div class="divider"></div>

          <!-- Email -->
          <motion.div
            class="contact-item"
            :initial="{ opacity: 0, x: -30 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }"
          >
            <div class="flex items-start gap-4">
              <Icon icon="heroicons:envelope" class="w-6 h-6 text-powder-blush-800 flex-shrink-0 mt-1" />
              <div class="flex-1">
                <a href="mailto:jenn130888@gmail.com" class="contact-value">
                  jenn130888@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <div class="divider"></div>

          <!-- Location -->
          <motion.div
            class="contact-item"
            :initial="{ opacity: 0, x: -30 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }"
          >
            <div class="flex items-start gap-4">
              <Icon icon="heroicons:map-pin" class="w-6 h-6 text-powder-blush-800 flex-shrink-0 mt-1" />
              <div class="flex-1">
                <p class="contact-value">
                  200 Chalkfarm drive floor 3<br>
                  ON M3L 2H7, Canada
                </p>
              </div>
            </div>
          </motion.div>

          <div class="divider"></div>

          <!-- Social -->
          <motion.div
            class="contact-item"
            :initial="{ opacity: 0, x: -30 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }"
          >
            <div class="flex items-start gap-4">
              <div class="flex-1">
                <div class="social-links">
                  <a
                    href="https://www.instagram.com/jenandco.beautystudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-icon"
                    aria-label="Instagram"
                  >
                    <Icon icon="mdi:instagram" class="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/14169980495"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-icon"
                    aria-label="WhatsApp"
                  >
                    <Icon icon="ic:outline-whatsapp" class="w-5 h-5" />
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
              </div>
            </div>
          </motion.div>
        </div>

        <!-- Right Column - CTA Booking -->
        <motion.div
          class="relative"
          :initial="{ opacity: 0, x: 30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }"
        >
          <div class="cta-card-wrapper">
            <div class="cta-card">
              <!-- Icon -->
              <motion.div
                class="cta-icon"
                :initial="{ scale: 0, rotate: -180 }"
                :in-view="{ scale: 1, rotate: 0 }"
                :transition="{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
              >
                <Icon icon="heroicons:clock" class="w-12 h-12 text-white" />
              </motion.div>

              <!-- Title -->
              <h3 class="cta-title">{{ $t('contact.cta-title') }}</h3>
              <p class="cta-subtitle">
                {{ $t('contact.cta-subtitle') }}
              </p>

              <!-- CTA Button -->
              <a 
                href="https://www.bookio.com/en?lang=sk" 
                target="_blank"
                rel="noopener noreferrer"
                class="cta-btn-primary"
              >
                <Icon icon="heroicons:calendar" class="w-5 h-5" />
                <span>{{ $t('contact.cta-btn-primary') }}</span>
                <Icon icon="heroicons:arrow-right" class="w-4 h-4 ml-auto" />
              </a>

              <!-- Features -->
              <div class="features-mini">
                <div class="feature-mini">
                  <Icon icon="heroicons:check-circle" class="w-4 h-4" />
                  <span>{{ $t('contact.cta-confirm') }}</span>
                </div>
                <div class="feature-mini">
                  <Icon icon="heroicons:clock" class="w-4 h-4" />
                  <span>{{ $t('contact.cta-confirm-desc') }}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { motion } from 'motion-v'
</script>

<style scoped>
/* Contact Items */
.contact-item {
  padding: 2rem 0;
}

.divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #E5E5E5 10%,
    #E5E5E5 90%,
    transparent 100%
  );
}

.contact-value {
  color: #8B7355;
  font-size: 1rem;
  line-height: 1.6;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

a.contact-value:hover {
  color: #512015;
  transform: translateX(4px);
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8B7355;
  text-decoration: none;
  border: 1px solid #E5E5E5;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #512015;
  border-color: #512015;
  transform: translateY(-2px);
}

/* CTA Card */
.cta-card-wrapper {
  position: relative;
}

.cta-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 
    0 10px 30px rgba(81, 32, 21, 0.08),
    0 1px 3px rgba(81, 32, 21, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(228, 77, 46, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.cta-card:hover::before {
  opacity: 1;
}

.cta-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 50px rgba(81, 32, 21, 0.12),
    0 5px 15px rgba(228, 77, 46, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

/* Icon */
.cta-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #512015 0%, #E44D2E 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 20px rgba(228, 77, 46, 0.3);
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #512015;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.cta-subtitle {
  color: #8B7355;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* CTA Button - AHORA ES UN LINK */
.cta-btn-primary {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: none;
  text-decoration: none;
  background: linear-gradient(135deg, #512015 0%, #E44D2E 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(228, 77, 46, 0.3);
  position: relative;
  z-index: 10;
  margin-bottom: 1.5rem;
}

.cta-btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 0.75rem;
  pointer-events: none;
}

.cta-btn-primary:hover::before {
  opacity: 1;
}

.cta-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(228, 77, 46, 0.5);
}

.cta-btn-primary:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(228, 77, 46, 0.4);
}

/* Features */
.features-mini {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(81, 32, 21, 0.1);
}

.feature-mini {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8B7355;
  font-size: 0.875rem;
}

.feature-mini svg {
  color: #E44D2E;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .cta-card {
    padding: 2rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }
}
</style>