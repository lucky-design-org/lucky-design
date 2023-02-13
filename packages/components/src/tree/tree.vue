<script setup lang="ts">
import { ref } from 'vue'
import treeItem from './treeItem.vue'
const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {}
    },
  },
  icon: String,
  defaultOpenNodes: Array,
  customClass: String,
  multiple: Boolean,
  defaultSelectNodes: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['nodeClick', 'selectClick'])
props.options.forEach((item, index) => {
  item.key = index.toString()
})
const tabKey = ref('')
const changeKey = (e) => {
  tabKey.value = e
}
const nClick = (item) => {
  emit('nodeClick', item)
}
</script>

<template>
  <div class="mzl-tree-content-box" :class="[customClass]">
    <template v-for="(item, index) in options" :key="index">
      <tree-item
        :items="item"
        :data-key="index"
        :icon="icon"
        :default-open-nodes="defaultOpenNodes"
        :options="options"
        :index="0"
        :tab-indexs="tabKey"
        :multiple="multiple"
        :default-select-nodes="defaultSelectNodes"
        @nodeClick="nClick($event)"
        @change="changeKey($event)"
        @selectClick="emit('selectClick', $event)"
      />
    </template>
  </div>
</template>
