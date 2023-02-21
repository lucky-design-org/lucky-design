<script lang="ts" setup>
import { LButton, LMessage } from 'lucky-design'
import useIsEnglish from '../../../hooks/useIsEnglish'

const isEnglish = useIsEnglish()
</script>

<template>
  <div class="container">
    <LButton
      type="primary"
      :text="isEnglish ? 'default 20' : '默认20'"
      @click="LMessage({ message: isEnglish ? 'default 20' : '默认20', type: 'success' })"
    />
    <LButton
      type="primary"
      :text="isEnglish ? 'offset 50' : '偏移50'"
      @click="LMessage({ message: isEnglish ? 'offset 50' : '偏移50', type: 'warning', offset: 50 })"
    />
    <LButton
      type="primary"
      :text="isEnglish ? 'offset 100' : '偏移100'"
      @click="LMessage({ message: isEnglish ? 'offset 100' : '偏移100', type: 'error', offset: 100 })"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
