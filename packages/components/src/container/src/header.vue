<script lang="ts" setup>
import { computed } from 'vue'

import type { CSSProperties } from 'vue'
import { headerProps } from '../props'

const style = computed(() => {
  return headerProps.height
    ? {
        height: headerProps.height,
      } as CSSProperties
    : {}
})
</script>

<template>
  <header class="ld-header" :style="style">
    <slot />
  </header>
</template>
