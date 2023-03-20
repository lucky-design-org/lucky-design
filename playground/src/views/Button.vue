<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="按钮" size="sm" />
    <LButton type="success" text="按钮" size="lg" />
    <LButton type="warning" text="按钮" :disabled="true" />
    <LButton type="error" text="按钮" shape="circle" />
    <LButton type="info" text="按钮" shape="round" />
    <LButton type="info" text="按钮" :plain="true" />
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
