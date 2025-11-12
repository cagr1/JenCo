<template>
  <section id="contact" class="py-24 px-4 bg-cream">
    <div class="max-w-4xl mx-auto">
      <h2 class="section-title">{{ $t('contact.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div ref="formRef" class="bg-white rounded-lg p-8 shadow-md">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-inter font-semibold text-gray-700 mb-2">
                {{ $t('contact.form_name') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                placeholder="Jennifer Doe"
              />
            </div>

            <div>
              <label class="block text-sm font-inter font-semibold text-gray-700 mb-2">
                {{ $t('contact.form_email') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-inter font-semibold text-gray-700 mb-2">
                {{ $t('contact.form_service') }}
              </label>
              <select
                v-model="form.service"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
              >
                <option value="">Select a service...</option>
                <option value="bridal">{{ $t('services.makeup_bride') }}</option>
                <option value="quince">{{ $t('services.makeup_quince') }}</option>
                <option value="photo">{{ $t('services.makeup_photo') }}</option>
                <option value="waxing">{{ $t('services.waxing') }}</option>
                <option value="lash">{{ $t('services.lash') }}</option>
                <option value="massage">{{ $t('services.massage') }}</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-inter font-semibold text-gray-700 mb-2">
                {{ $t('contact.form_message') }}
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition resize-none"
                placeholder="Tell me about your needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-gradient-to-r from-blush to-gold text-white font-inter font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              {{ $t('contact.form_submit') }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div ref="infoRef" class="space-y-8">
          <!-- Location -->
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="font-playfair font-bold text-xl mb-3 text-gray-800">📍 {{ $t('contact.location') }}</h3>
            <p class="text-gray-600">Beauty & Wellness Studio</p>
            <p class="text-gray-600">Miami, Florida</p>
          </div>

          <!-- Phone -->
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="font-playfair font-bold text-xl mb-3 text-gray-800">📞 {{ $t('contact.phone') }}</h3>
            <p class="text-gold font-semibold">(305) 555-0123</p>
          </div>

          <!-- Social Links -->
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="font-playfair font-bold text-xl mb-4 text-gray-800">{{ $t('contact.followUs') }}</h3>
            <div class="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-gradient-to-r from-blush to-gold flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                IG
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-blush flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                WA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const form = ref({
  name: '',
  email: '',
  service: '',
  message: ''
})

const formRef = ref(null)
const infoRef = ref(null)

const submitForm = () => {
  // Form submission logic
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! I will contact you soon.')
  form.value = { name: '', email: '', service: '', message: '' }
}

onMounted(() => {
  gsap.fromTo(
    formRef.value,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: formRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )

  gsap.fromTo(
    infoRef.value,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: infoRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>

<style scoped>
input,
textarea,
select {
  transition: all 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  transform: translateY(-2px);
}
</style>
