<template>
  <button
    :class="[
      'premium-button',
      variant,
      size,
      { 'full-width': fullWidth }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span class="button-content">
      <slot />
    </span>
    <span class="button-shine"></span>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
.premium-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-premium);
  isolation: isolate;
}

.premium-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-rose), var(--color-champagne));
  opacity: 0;
  transition: opacity var(--duration-normal);
  z-index: -1;
}

.premium-button:hover::before {
  opacity: 1;
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s;
}

.premium-button:hover .button-shine {
  left: 100%;
}

.button-content {
  position: relative;
  z-index: 1;
}

/* Variants */
.primary {
  background: linear-gradient(135deg, var(--color-rose), var(--color-champagne));
  color: white;
  box-shadow: var(--shadow-md);
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.secondary {
  background: var(--color-cocoa);
  color: white;
}

.secondary:hover {
  background: var(--color-graphite);
  transform: translateY(-2px);
}

.outline {
  background: transparent;
  color: var(--color-cocoa);
  border: 2px solid var(--color-cocoa);
}

.outline:hover {
  background: var(--color-cocoa);
  color: white;
}

.ghost {
  background: transparent;
  color: var(--color-cocoa);
}

.ghost:hover {
  background: rgba(70, 63, 58, 0.1);
}

/* Sizes */
.sm {
  padding: 0.5rem 1.5rem;
  font-size: var(--text-sm);
  border-radius: var(--radius-md);
}

.md {
  padding: 0.75rem 2rem;
  font-size: var(--text-base);
  border-radius: var(--radius-lg);
}

.lg {
  padding: 1rem 2.5rem;
  font-size: var(--text-lg);
  border-radius: var(--radius-xl);
}

.full-width {
  width: 100%;
}

.premium-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>

