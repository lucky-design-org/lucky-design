<script setup lang="ts">
import { buttonProps } from './props'

const props = defineProps(buttonProps)
</script>

<template>
  <div>
    {{ props.type }}
  </div>
</template>

<style scoped>
</style>
