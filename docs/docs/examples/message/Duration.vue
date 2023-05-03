<script lang="ts" setup>
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton
      type="primary"
      text="default 3s"
      @click="LMessage({ message: 'default 3s', type: 'success' })"
    />
    <LButton
      type="primary"
      text="5s"
      @click="LMessage({ message: '5s', type: 'warning', timeout: 5000 })"
    />
    <LButton
      type="primary"
      text="10s"
      @click="LMessage({ message: '10s', type: 'error', timeout: 10000 })"
    />
    <LButton
      type="primary"
      text="forever"
      @click="
        LMessage({
          message: 'forever',
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
