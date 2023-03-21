<script lang="ts" setup>
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton
      type="primary"
      text="default 20"
      @click="LMessage({ message: 'default 20', type: 'success' })"
    />
    <LButton
      type="primary"
      text="offset 50"
      @click="LMessage({ message: 'offset 50', type: 'warning', offset: 50 })"
    />
    <LButton
      type="primary"
      text="offset 100"
      @click="LMessage({ message: 'offset 100', type: 'error', offset: 100 })"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
