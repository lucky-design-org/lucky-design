<script setup lang="ts">
import { reactive } from 'vue'
import TreeNode from './TreeNode.vue'
const dataList = reactive([
  {
    label: 'Level one 1',
    expand: true,
    children: [
      {
        label: 'Level two 1-1',
        expand: true,
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
])
</script>

<template>
  <div>
    <TreeNode
      v-for="(item, index) in dataList"
      :key="index"
      :data="item"
      :show-checkbox="true"
    />
  </div>
</template>

<style scoped></style>
