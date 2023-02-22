<script setup lang="ts">
import { onMounted, ref, unref, watch } from 'vue'
import { toolTipProps } from './props'
import LTrigger from './trigger.vue'
import LContent from './content.vue'

const props = defineProps(toolTipProps)
const emits = defineEmits(['update:visible'])
const { appendTo, placement, visible, content } = props
const triggerRef = ref<HTMLElement | null>(null)
const setTriggerRef = (val: HTMLElement | null) => {
  triggerRef.value = val
}

const show = ref(false)

watch(
  () => props.visible,
  (val) => {
    show.value = val
  },
)
let timer: any = null
const onOpen = () => {
  clearTimeout(timer)
  show.value = true
  emits('update:visible', true)
}
const onClose = () => {
  timer = setTimeout(() => {
    show.value = false
    emits('update:visible', false)
  }, 200)
}
onMounted(() => {
  if (visible)
    onOpen()
})

const mouseEnter = () => {
  onOpen()
}
const mouseLeave = () => {
  onClose()
}
watch(
  triggerRef,
  (val, preVal) => {
    if (val) {
      val.addEventListener('mouseenter', mouseEnter)
      val.addEventListener('mouseleave', mouseLeave)

      preVal?.removeEventListener('mouseenter', mouseEnter)
      preVal?.removeEventListener('mouseleave', mouseLeave)
    }
  },
  {
    immediate: true,
  },
)

const contentStyle = ref({ top: 0, left: 0, height: 0, width: 0 })
watch(
  () => unref(triggerRef)?.getBoundingClientRect(),
  (rect, preRect) => {
    if (rect) {
      contentStyle.value = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      }
    }
  },
)
</script>

<template>
  <LTrigger :set-trigger-ref="setTriggerRef">
    <slot />
  </LTrigger>
  <LContent
    :placement="placement"
    :append-to="appendTo"
    :offset="contentStyle"
    :show="show"
    :on-open="onOpen"
    :on-close="onClose"
  >
    <slot name="content">
      <span>{{ content }}</span>
    </slot>
  </LContent>
</template>

<style scoped lang="less"></style>
