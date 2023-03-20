<script setup lang="ts">
import { buttonProps } from './props'

const { type, size, disabled, text, shape, plain } = defineProps(buttonProps)
</script>

<template>
  <button
    class="ld-button"
    :class="[size, !disabled || 'disabled', type, shape, plain && 'plain']"
  >
    {{ text }}
  </button>
</template>
