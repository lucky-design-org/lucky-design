<script setup lang="ts">
import { buttonProps } from './props'

const props = defineProps(buttonProps)
</script>

<template>
  <div :class="props.size === 'md' ? 'ld-button-small' : 'ld-button'">
    {{ props.text }}
  </div>
</template>
