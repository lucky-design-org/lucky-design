<script setup lang="ts">
import { ref, watch } from 'vue'
import type { StyleValue } from 'vue'
import type { Placement } from './types'
const props = defineProps<{
  appendTo?: string | HTMLElement
  offset: { top: number; left: number; height: number; width: number }
  placement: Placement
  show: boolean
  onOpen: () => void
  onClose: () => void
}>()

const contentRef = ref<HTMLDivElement>()
const contentStyle = ref<StyleValue>()
const arrowStyle = ref<StyleValue>()

const computedStyle = (width: number, height: number) => {
  const offsetTop = height / 2 - 5
  const offsetLeft = width / 2 - 5
  const { left, top, width: wd, height: hg } = props.offset
  if (props.placement === 'left' || props.placement === 'right') {
    contentStyle.value = {
      transform: `translate(${
        props.placement === 'left' ? left - width - 7 : left + wd + 7
      }px, ${top + hg / 2 - height / 2}px)`,
    }
    arrowStyle.value = {
      transform: `translate(0, ${offsetTop}px)`,
    }
  }
  else {
    contentStyle.value = {
      transform: `translate(${left - width / 2 + wd / 2}px, ${
        props.placement === 'top' ? top - height - 7 : top + hg + 7
      }px)`,
    }
    arrowStyle.value = {
      transform: `translate(${offsetLeft}px, 0)`,
    }
  }
}
watch(contentRef, (val, pre) => {
  if (val) {
    const width = val.clientWidth
    const height = val.clientHeight
    computedStyle(width, height)

    val.addEventListener('mousemove', props.onOpen)
    val.addEventListener('mouseleave', props.onClose)
    pre?.removeEventListener('mousemove', props.onOpen)
    pre?.removeEventListener('mouseleave', props.onClose)
  }
})
</script>

<template>
  <teleport :to="appendTo ? appendTo : 'body'">
    <transition name="ld-tooltip-content">
      <div
        v-if="show"
        ref="contentRef"
        class="ld-tooltip"
        :style="contentStyle"
      >
        <slot />
        <span
          class="ld-tooltip__arrow"
          :placement="placement"
          :style="arrowStyle"
        />
      </div>
    </transition>
  </teleport>
</template>
