<script setup lang="ts">
import { drawerProps } from './props'

const { title, direction, visible, close } = defineProps(drawerProps)
</script>

<template>
  <div :class="visible || 'mask'" />
  <div v-show="!visible" class="ld-drawer" :class="direction">
    <div class="header">
      {{ title }}
      <div class="close" @click="close">
        ×
      </div>
    </div>
    <slot />
  </div>
</template>
