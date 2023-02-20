<script lang="ts" setup>
import { computed } from 'vue'

import type { CSSProperties } from 'vue'
import { asideProps } from '../props'

const style = computed(
  () =>
    (asideProps.width ? { width: asideProps.width } : {}) as CSSProperties,
)
</script>

<template>
  <aside class="ld-aside" :style="style">
    <slot />
  </aside>
</template>
