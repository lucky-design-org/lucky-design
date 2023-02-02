<script setup lang="ts">
import { ref } from 'vue'
import { LButton, LDrawer } from 'lucky-design'

const visible = ref(true)
const closeMask = () => {
  visible.value = false
}
</script>

<template>
  <div class="container">
    <LButton text="点击弹出" @click="visible = false" />
    <LDrawer title="抽屉" :visible="visible">
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
