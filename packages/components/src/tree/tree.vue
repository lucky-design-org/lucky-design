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
  <ul :style="{ display: show ? 'block' : 'none' }">
    <div v-for="item in data" :key="item.value" @click.stop="setShow(item)">
      <p :style="{ cursor: 'pointer' }">
        {{ item.value }}
      </p>
      <template v-if="item.children">
        <div>
          <Tree :data="item.children" :show="item.show" @setShow="setShow" />
        </div>
      </template>
    </div>
  </ul>
</template>

<style>
ul {
  margin-left: 20px;
}
</style>
