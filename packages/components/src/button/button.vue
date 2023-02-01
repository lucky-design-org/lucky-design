<script setup lang="ts">
import { buttonProps } from './props'

const { type, size, disabled, text } = defineProps(buttonProps)
const getSize = (size) => {
  switch (size) {
    case 'lg':
      return 'lg'
    case 'md':
      return 'md'
    case 'sm':
      return 'sm'
    default:
      return 'md'
  }
}
</script>

<template>
  <div :class="[getSize(size), !disabled || 'disabled']" class="ld-button">
    {{ text }}
  </div>
</template>
