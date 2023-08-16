<script lang="ts" setup>
import { LButton, LMessage } from 'lucky-design'
import useIsEnglish from '../../../hooks/useIsEnglish'

const isEnglish = useIsEnglish()
</script>

<template>
  <div class="container">
    <LButton
      type="success"
      :text="isEnglish ? 'success' : '成功'"
      @click="LMessage({ message: isEnglish ? 'success' : '成功', type: 'success', closeBtn: true })"
    />
    <LButton
      type="warning"
      :text="isEnglish ? 'warning' : '警告'"
      @click="LMessage({ message: isEnglish ? 'warning' : '警告', type: 'warning', closeBtn: true })"
    />
    <LButton
      type="error"
      :text="isEnglish ? 'error' : '错误'"
      @click="LMessage({ message: isEnglish ? 'error' : '错误', type: 'error', closeBtn: true })"
    />
    <LButton
      type="info"
      :text="isEnglish ? 'info' : '提示'"
      @click="LMessage({ message: isEnglish ? 'info' : '提示', type: 'info', closeBtn: true })"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
