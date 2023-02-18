<template>
  <footer class="ld-footer" :style="style">
    <slot />
  </footer>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

import type { CSSProperties } from 'vue'
import {footerProps} from '../props'

const style = computed(
  () => (footerProps.height ? { height: footerProps.height } : {}) as CSSProperties
)
</script>
