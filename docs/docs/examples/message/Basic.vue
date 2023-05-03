<script lang="ts" setup>
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton
      type="success"
      text="success"
      @click="LMessage({ message: 'success', type: 'success', closeBtn: true })"
    />
    <LButton
      type="warning"
      text="warning"
      @click="LMessage({ message: 'warning', type: 'warning', closeBtn: true })"
    />
    <LButton
      type="error"
      text="error"
      @click="LMessage({ message: 'error', type: 'error', closeBtn: true })"
    />
    <LButton
      type="info"
      text="info"
      @click="LMessage({ message: 'info', type: 'info', closeBtn: true })"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
