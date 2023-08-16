<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { BacktopProps } from './props'

const { visibilityHeight = document.body.clientHeight, right, bottom } = defineProps(BacktopProps)
const { y } = useWindowScroll()

const backTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(backTop)
    window.scrollTo(0, scrollTop - scrollTop / 8)
  }
}
</script>

<template>
  <transition name="fade-in">
    <div
      class="ld-backtop"
      :class="[y as any > visibilityHeight ? 'visible opacity-100' : 'invisible opacity-0']"
      :style="{ right: `${right}px`, bottom: `${bottom}` }"
      @click="backTop"
    >
      <slot />
    </div>
  </transition>
</template>
