<template>
  <section id="contact" class="relative py-24 px-4 bg-porcelain-50">
    <div class="max-w-4xl mx-auto">
      <!-- Section Title -->
      <motion.div
          class="max-w-5xl mx-auto"
          :initial="{ opacity: 0, y: 40 }"
          :in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
          
        >
          <div class="max-w-3xl md:ml-auto md:mr-16 md:text-right"> 
            <h2 
            
            class="section-title  mb-6 text-powder-blush-800  text-center md:text-right">
              {{ $t('contact.title') }}
            </h2>
          </div>
      </motion.div>

      <div class="grid md:grid-cols-2 gap-16 mt-16">
        <!-- Left Column -->
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
                <h3 class="contact-label">{{ $t('contact.phone') }}</h3>
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
                <h3 class="contact-label">{{ $t('contact.form_email') }}</h3>
                <a href="mailto:jenn130888@gmail.com" class="contact-value">
                  jenn130888@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <!-- Right Column -->
        <div class="space-y-0">
          <!-- Location -->
          <motion.div
            class="contact-item"
            :initial="{ opacity: 0, x: 30 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }"
          >
            <div class="flex items-start gap-4">
              <Icon icon="heroicons:map-pin" class="w-6 h-6 text-powder-blush-800 flex-shrink-0 mt-1" />
              <div class="flex-1">
                <h3 class="contact-label">{{ $t('contact.location') }}</h3>
                <p class="contact-value">
                  200 Chalkfarm Dr, North York<br>
                  ON M3L 2H7, Canada
                </p>
              </div>
            </div>
          </motion.div>

          <div class="divider"></div>

          <!-- Social -->
          <motion.div
            class="contact-item"
            :initial="{ opacity: 0, x: 30 }"
            :in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }"
          >
            <div class="flex items-start gap-4">
              <Icon icon="heroicons:heart" class="w-6 h-6 text-powder-blush-800 flex-shrink-0 mt-1" />
              <div class="flex-1">
                <h3 class="contact-label">{{ $t('contact.followUs') }}</h3>
                <div class="social-links">
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
              </div>
            </div>
          </motion.div>
        </div>
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

/* Divider Line */
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

/* Contact Label */
.contact-label {
  font-family: 'Playfair Display', serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #512015;
  margin-bottom: 0.5rem;
}

/* Contact Value */
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

/* Social Links */
.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
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

/* Responsive */
@media (max-width: 768px) {
  .contact-item {
    padding: 1.5rem 0;
  }

  .contact-label {
    font-size: 1rem;
  }

  .contact-value {
    font-size: 0.95rem;
  }
}
</style>