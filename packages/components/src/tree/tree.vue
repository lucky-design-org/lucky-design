<script setup lang="ts">
import type { PropType } from 'vue'

const { data, show } = defineProps({
  data: {
    type: Array as PropType<any>,
    default: () => [],
  },
  show: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['setShow'])
const setShow = (data: any) => {
  emit('setShow', data)
}
</script>

<template>
  <ul v-show="show">
    <div v-for="item in data" :key="item.value" @click.stop="setShow(item)">
      <p :style="{ cursor: 'pointer' }">
        {{ item.show ? item.children && '-' : item.children ? '+' : '' }}
        {{ item.value }}
      </p>
      <div v-show="item.children">
        <Tree :data="item.children" :show="item.show" @set-show="setShow" />
      </div>
    </div>
  </ul>
</template>

<style>
ul {
  margin-left: 20px;
}
</style>
