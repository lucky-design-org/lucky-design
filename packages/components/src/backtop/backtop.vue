<script setup lang="ts">
import { BacktopProps } from './props'

const { visibilityHeight, right, bottom } = defineProps(BacktopProps)

const backTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(backTop)
    window.scrollTo(0, scrollTop - scrollTop / 8)
  }
}
</script>

<template>
  <div
    class="ld-backtop"
    :style="{ right: `${right}px`, bottom: `${bottom}` }"
    @click="backTop"
  >
    <slot />
  </div>
</template>
