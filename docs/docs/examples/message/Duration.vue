<script lang="ts" setup>
import { LButton, LMessage } from 'lucky-design'
import useIsEnglish from '../../../hooks/useIsEnglish'

const isEnglish = useIsEnglish()
</script>

<template>
  <div class="container">
    <LButton
      type="primary"
      :text="isEnglish ? 'default 3s' : '默认3秒'"
      @click="LMessage({ message: isEnglish ? 'default 3s' : '默认3秒', type: 'success' })"
    />
    <LButton
      type="primary"
      :text="isEnglish ? '5s' : '5秒关闭'"
      @click="LMessage({ message: isEnglish ? '5s' : '5秒关闭', type: 'warning', timeout: 5000 })"
    />
    <LButton
      type="primary"
      :text="isEnglish ? '10s' : '10秒关闭'"
      @click="LMessage({ message: isEnglish ? '10s' : '10秒关闭', type: 'error', timeout: 10000 })"
    />
    <LButton
      type="primary"
      :text="isEnglish ? 'forever' : '永久存在'"
      @click="
        LMessage({
          message: isEnglish ? 'forever' : '永久存在',
          type: 'error',
          timeout: 0,
          closeBtn: true,
        })
      "
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
