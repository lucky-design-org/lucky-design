<template>
  <section :class="['ld-section',is('vertical', isVertical)]">
    <slot />
  </section>
</template>
<script lang="ts" setup>
import { computed, useSlots } from 'vue'

import type { Component, VNode } from 'vue'
import { containerProps } from '../props'

const slots = useSlots()

const statePrefix = 'is-'

const is: {
  (name: string, state: boolean | undefined): string
  (name: string): string
} = (name: string, ...args: [boolean | undefined] | []) => {
  const state = args.length >= 1 ? args[0]! : true
  return name && state ? `${statePrefix}${name}` : ''
}

const isVertical = computed(() => {
  if (containerProps.direction === 'vertical') {
    return true
  } else if (containerProps.direction === 'horizontal') {
    return false
  }
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name
      return tag === 'LHeader' || tag === 'LFooter'
    })
  } else {
    return false
  }
})
</script>
