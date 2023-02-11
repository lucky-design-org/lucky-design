<script setup lang="ts">
import { ref } from 'vue'
import { LButton, LDrawer } from 'lucky-design'

const visible = ref(true)
const direction = ref('right')
const closeMask = () => {
  visible.value = true
}

const openDrawer = (dire: string) => {
  direction.value = dire
  visible.value = false
}
</script>

<template>
  <div class="container">
    <LButton text="默认右边弹出" @click="openDrawer('right')" />
    <LButton text="左边弹出" @click="openDrawer('left')" />
    <LButton text="上边弹出" @click="openDrawer('top')" />
    <LButton text="下边弹出" @click="openDrawer('bottom')" />
    <LDrawer title="抽屉" :visible="visible" :close="closeMask" :direction="direction">
      <div>123</div>
    </LDrawer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
}
</style>
