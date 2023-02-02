<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="primary" size="xs" />
    <LButton type="success" text="success" size="sm" />
    <LButton type="warning" text="warning" size="md" />
    <LButton type="error" text="error" size="lg" />
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
