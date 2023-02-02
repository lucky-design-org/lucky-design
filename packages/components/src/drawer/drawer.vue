<script setup lang="ts">
import { drawerProps } from './props'

const { title, direction, visible } = defineProps(drawerProps)
</script>

<template>
  <div :class="visible || 'mask'" />
  <div v-show="!visible" class="ld-drawer" :class="[direction]">
    <div class="header">
      <slot />
      <div class="close">
        X
      </div>
    </div>
    {{ title }}
  </div>
</template>
