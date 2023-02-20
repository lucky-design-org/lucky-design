<script setup lang="ts">
import { computed } from 'vue'
import { drawerProps } from './props'

const { title, direction, visible, close, bgColor } = defineProps(drawerProps)

const style = computed(() => `background-color: ${bgColor}`)
</script>

<template>
  <div :class="visible || 'mask'" />
  <div v-show="!visible" class="ld-drawer " :class="direction" :style="style">
    <div class="header">
      {{ title }}
      <div class="close" @click="close">
        ×
      </div>
    </div>
    <slot />
  </div>
</template>
