<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="primary" />
    <LButton type="success" text="success" />
    <LButton type="warning" text="warning" />
    <LButton type="error" text="error" />
    <LButton type="info" text="info" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding: 20px;
}
</style>
