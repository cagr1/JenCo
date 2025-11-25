# 📦 LIBRERÍAS NECESARIAS PARA EFECTOS PREMIUM

## ✅ Librerías Ya Instaladas

```json
{
  "@motionone/vue": "^10.16.4",    // ✅ Motion.dev para Vue
  "@vueuse/core": "^14.0.0",       // ✅ Composables de Vue
  "@vueuse/motion": "^3.0.3",      // ✅ Motion utilities
  "gsap": "^3.13.0",                // ✅ Animaciones (migrar a Motion.dev)
  "@iconify/vue": "^5.0.0"         // ✅ Iconos SVG
}
```

---

## 🚀 Librerías Faltantes (Instalar)

### 1. **Lenis - Smooth Scroll** ⭐ CRÍTICO
```bash
npm install lenis
```

**Propósito:**
- Smooth scroll suave y natural
- Control de velocidad y easing
- Scroll snapping
- Scroll progress tracking
- Mejor experiencia de navegación

**Uso:**
```javascript
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
})
```

---

### 2. **@vueuse/motion** (Ya instalado, pero verificar versión)
**Propósito:**
- Integración de Motion.dev con Vue
- Scroll-triggered animations
- Gesture animations
- View transitions

---

### 3. **@vueuse/gesture** (Opcional pero recomendado)
```bash
npm install @vueuse/gesture
```

**Propósito:**
- Gestos táctiles avanzados
- Drag and drop
- Pinch zoom
- Swipe gestures
- Mejora interacciones móviles

---

### 4. **vue-lenis** (Wrapper Vue para Lenis)
```bash
npm install vue-lenis
```

**Propósito:**
- Integración fácil de Lenis con Vue
- Componente Vue para smooth scroll
- Mejor integración con el ecosistema Vue

**Alternativa:** Puedes usar Lenis directamente con composables personalizados.

---

### 5. **@vueuse/intersection-observer** (Ya incluido en @vueuse/core)
**Propósito:**
- Detectar cuando elementos entran/salen del viewport
- Scroll-triggered animations
- Lazy loading triggers
- Ya está incluido en @vueuse/core

---

### 6. **@vueuse/use-scroll** (Ya incluido en @vueuse/core)
**Propósito:**
- Tracking de scroll position
- Scroll progress
- Scroll direction
- Ya está incluido en @vueuse/core

---

## 🎨 Librerías Opcionales (Efectos Avanzados)

### 7. **three.js** (Solo si necesitas efectos 3D)
```bash
npm install three
```

**Propósito:**
- Efectos 3D en hero
- Partículas 3D
- Modelos 3D interactivos
- **Nota:** Solo si planeas efectos 3D avanzados

---

### 8. **@tweenjs/tween.js** (Alternativa ligera a GSAP)
```bash
npm install @tweenjs/tween.js
```

**Propósito:**
- Animaciones suaves
- Easing functions
- Timeline animations
- **Nota:** Motion.dev ya cubre esto, solo si necesitas algo específico

---

### 9. **swiper** (Para carousels premium)
```bash
npm install swiper
```

**Propósito:**
- Carousels/touch sliders
- Gallery con swipe
- Testimonials carousel
- Touch gestures nativos

---

### 10. **vue3-lottie** (Animaciones Lottie)
```bash
npm install vue3-lottie
```

**Propósito:**
- Animaciones complejas de After Effects
- Loading animations
- Micro-interacciones avanzadas
- **Nota:** Solo si tienes animaciones Lottie

---

### 11. **@vueuse/use-mouse** (Ya incluido en @vueuse/core)
**Propósito:**
- Tracking de posición del mouse
- Efectos de cursor personalizados
- Parallax basado en mouse
- Ya está incluido en @vueuse/core

---

## 📋 RESUMEN: Instalación Completa

### Instalación Mínima (Esencial)
```bash
npm install lenis vue-lenis
```

### Instalación Recomendada (Completa)
```bash
npm install lenis vue-lenis @vueuse/gesture swiper
```

### Instalación Premium (Con efectos avanzados)
```bash
npm install lenis vue-lenis @vueuse/gesture swiper vue3-lottie
```

---

## 🎯 Librerías por Efecto Específico

### Smooth Scroll
- ✅ **lenis** - Smooth scroll engine
- ✅ **vue-lenis** - Wrapper Vue

### Scroll Animations
- ✅ **@motionone/vue** - Ya instalado
- ✅ **@vueuse/motion** - Ya instalado
- ✅ **@vueuse/core** - Ya instalado (incluye useIntersectionObserver, useScroll)

### Parallax
- ✅ **@motionone/vue** - Ya instalado
- ✅ **@vueuse/core** - useScroll, useMouse

### Micro-interacciones
- ✅ **@motionone/vue** - Ya instalado
- ✅ **@vueuse/gesture** - Gestos avanzados (instalar)

### Carousels/Sliders
- ✅ **swiper** - Carousels premium (instalar)

### Iconos
- ✅ **@iconify/vue** - Ya instalado

### Formularios
- ✅ **@vueuse/core** - useForm, useValidation (ya incluido)

---

## 📦 package.json Actualizado

```json
{
  "name": "jenco",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@iconify/vue": "^5.0.0",
    "@motionone/vue": "^10.16.4",
    "@vueuse/core": "^14.0.0",
    "@vueuse/gesture": "^2.0.0",
    "@vueuse/motion": "^3.0.3",
    "gsap": "^3.13.0",
    "lenis": "^1.1.9",
    "swiper": "^11.1.14",
    "vue": "^3.5.24",
    "vue-i18n": "^11.1.12",
    "vue-lenis": "^1.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.1",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.18",
    "vite": "^7.2.2"
  }
}
```

---

## 🚀 Comando de Instalación Completo

```bash
# Instalación esencial
npm install lenis vue-lenis

# Instalación recomendada (con gestos y carousels)
npm install lenis vue-lenis @vueuse/gesture swiper

# O todo junto
npm install lenis vue-lenis @vueuse/gesture swiper
```

---

## 📚 Documentación de Referencia

- **Motion.dev Vue**: https://motion.dev/docs/vue-animation
- **Lenis**: https://github.com/studio-freight/lenis
- **VueUse**: https://vueuse.org/
- **Swiper**: https://swiperjs.com/
- **Iconify**: https://iconify.design/

---

## ⚠️ Notas Importantes

1. **GSAP**: Puedes mantenerlo durante la migración, luego removerlo
2. **Motion.dev**: Ya está instalado, es la base de las animaciones
3. **Lenis**: Esencial para smooth scroll premium
4. **VueUse**: Ya tienes la mayoría de utilidades necesarias
5. **Swiper**: Opcional pero recomendado para carousels premium

---

## ✅ Checklist de Instalación

- [ ] Instalar `lenis`
- [ ] Instalar `vue-lenis`
- [ ] Instalar `@vueuse/gesture` (opcional pero recomendado)
- [ ] Instalar `swiper` (opcional, para carousels)
- [ ] Verificar que `@motionone/vue` esté actualizado
- [ ] Verificar que `@vueuse/core` esté actualizado

---

*Última actualización: [Fecha]*

