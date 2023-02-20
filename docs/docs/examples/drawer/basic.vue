<script setup lang="ts">
import { ref } from 'vue'
import { LButton, LDrawer } from 'lucky-design'
import useIsEnglish from '../../../utils/useIsEnglish'

type DirectionType = 'right' | 'left' | 'top' | 'bottom'

const isEnglish = useIsEnglish()
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
      :text="isEnglish ? 'default right' : '默认右边弹出'"
      @click="openDrawer('right')"
    />
    <LButton
      :text="isEnglish ? 'left' : '左边弹出'"
      @click="openDrawer('left')"
    />
    <LButton
      :text="isEnglish ? 'top' : '上边弹出'"
      @click="openDrawer('top')"
    />
    <LButton
      :text="isEnglish ? 'bottom' : '下边弹出'"
      @click="openDrawer('bottom')"
    />
    <LDrawer
      title="抽屉"
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
}
</style>
