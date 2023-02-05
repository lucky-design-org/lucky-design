<script lang="ts" setup>
import { noop, useResizeObserver, useTimeoutFn } from '@vueuse/core'
import { getLastOffset } from './manager'
import type { MessageType } from './types'

const props = withDefaults(defineProps<{
  message: string
  timeout: number
  id: string
  offset: number
  closeBtn: boolean
  type: MessageType
}>(), {
  type: 'info',
  timeout: 3000,
  offset: 20,
  closeBtn: false,
})
defineEmits(['destroy'])

const visible = ref(false)
const height = ref(0)
const elRef = ref<HTMLDivElement>()
let clearTimer = noop

function startTimer() {
  if (props.timeout === 0)
    return
  ({ stop: clearTimer } = useTimeoutFn(() => {
    visible.value = false
    clearTimer = noop
  }, props.timeout))
}

onMounted(() => {
  startTimer()
  visible.value = true
})

useResizeObserver(elRef, () => {
  height.value = elRef.value!.getBoundingClientRect().height
})
const lastOffset = computed(() => getLastOffset(props.id) + props.offset)
const bottom = computed((): number => height.value + lastOffset.value)

defineExpose({ bottom, lastOffset, visible })
</script>

<template>
  <Transition name="ld-message-fade" @after-leave="$emit('destroy')">
    <div v-show="visible" :id="id" ref="elRef" class="ld-message" :class="[`is-${type}`]" :style="{ top: `${lastOffset}px` }" @mouseenter="clearTimer" @mouseleave="startTimer">
      <i class="message-icon" />
      <div class="message-content">
        {{ message }}
      </div>
      <div v-if="closeBtn" class="close-btn" @click="visible = false">
        ×
      </div>
    </div>
  </Transition>
</template>
