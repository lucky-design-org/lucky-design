<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="primary" disabled="true" />
    <LButton type="success" text="success" disabled="true" />
    <LButton type="warning" text="warning" disabled="true" />
    <LButton type="error" text="error" disabled="true" />
    <LButton type="info" text="info" disabled="true" />
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
