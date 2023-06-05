<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="按钮" size="sm" />
    <LButton type="primary" text="按钮" :plain="true" />
    <LButton type="primary" text="按钮" :disabled="true" />
    <LButton type="success" text="按钮" size="lg" />
    <LButton type="warning" text="按钮" :disabled="true" />
    <LButton type="error" text="按钮" shape="circle" />
    <LButton type="info" text="按钮" shape="round" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
}
</style>
