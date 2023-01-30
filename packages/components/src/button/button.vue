<script setup lang="ts">
import { buttonProps } from './props'

const props = defineProps(buttonProps)
</script>

<template>
  <div class="ld-button">
    {{ props.type }}
  </div>
</template>
