<script setup lang="ts">
import { ref } from 'vue'
import { LButton, LDrawer } from 'lucky-design'

type DirectionType = 'right' | 'left' | 'top' | 'bottom'

const visible = ref(true)
const direction = ref<DirectionType>('right')
const closeMask = () => {
  visible.value = true
}

const openDrawer = (dire: DirectionType) => {
  direction.value = dire
  visible.value = false
}
</script>

<template>
  <div class="container">
    <LButton
      text="default right"
      @click="openDrawer('right')"
    />
    <LButton
      text="left"
      @click="openDrawer('left')"
    />
    <LButton
      text="top"
      @click="openDrawer('top')"
    />
    <LButton
      text="bottom"
      @click="openDrawer('bottom')"
    />
    <LDrawer
      title="Drawer"
      bg-color="black"
      :visible="visible"
      :close="closeMask"
      :direction="direction"
    >
      <div>123123123</div>
    </LDrawer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
}
</style>
