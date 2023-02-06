<script setup lang="ts">
import { ref } from 'vue'
import LCheckbox from '../Checkbox/checkbox.vue'
import { treeNodeProps } from './props'
// import collapseTransition from "./transition";
const { data, showCheckbox } = defineProps(treeNodeProps)
// console.log('[ data ] >', data)

const active = ref(false)
const tree = ref(null)

const handleCheck = () => {}

const handleExpand = () => {
  // data.expand = !data.expand
  if (tree.value) {
    // tree.emitEvent("on-expand", this.data);
    // 判断节点的激活状态
    // this.handleActive();
  }
}
</script>

<template>
  <ul class="tree-ul" :class="{ notchild: !data.children }">
    <li class="tree-li" :class="{ notchild: !data.children }">
      <div class="node-nav" @click="handleExpand">
        <span
          v-show="data.children && data.children.length"
          class="tree-expand"
          :class="{ treeclose: !data.expand }"
        />
        <LCheckbox
          v-if="showCheckbox"
          :value="data.checked"
          :disabled="data.disabled"
          @input="handleCheck"
        />
        <span
          class="tree-title"
          :class="{ titleactive: active || data.selected }"
          >{{ data.label }}</span
        >
      </div>
      <!-- 踩坑：组件递归需要和文件名一致 -->
      <div v-show="data.expand">
        <TreeNode
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        />
      </div>
    </li>
  </ul>
</template>
