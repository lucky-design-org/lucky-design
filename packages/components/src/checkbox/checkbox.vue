<script setup lang="ts">
import { ref } from 'vue'
import { checkboxProps } from './props'
const { value, label, disabled, trueValue, falseValue }
  = defineProps(checkboxProps)
const emit = defineEmits(['input'])
const currentValue = ref(value)

const change = (event: any) => {
  if (disabled)
    return

  const checked = event.target.checked
  currentValue.value = checked
  const value = checked ? trueValue : falseValue
  emit('input', value)
}
</script>

<template>
  <label>
    <input
      type="checkbox"
      :checked="currentValue"
      :disabled="disabled"
      :class="{ disabled }"
      @change="change"
    >
    <slot />
  </label>
</template>

<style scoped>
/* TODO:scss抽离 */
.disabled {
  cursor: not-allowed;
}
</style>
