<script setup lang="ts">
import { buttonProps } from './props'

const { type, size, disabled, text, shape } = defineProps(buttonProps)
</script>

<template>
  <div class="ld-button" :class="[size, !disabled || 'disabled', type, shape]">
    {{ text }}
  </div>
</template>
