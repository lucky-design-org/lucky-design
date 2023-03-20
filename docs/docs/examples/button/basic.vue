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
  <div class="container">
    <LButton type="primary" text="primary" :plain="true" />
    <LButton type="success" text="success" :plain="true" />
    <LButton type="warning" text="warning" :plain="true" />
    <LButton type="error" text="error" :plain="true" />
    <LButton type="info" text="info" :plain="true" />
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
