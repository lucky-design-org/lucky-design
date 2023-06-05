<script setup lang="ts">
import { LIcon } from 'lucky-design'
</script>

<template>
  <div>
    <div class="container">
      <LIcon class-name="icon-arrow-right-filling" />
      <LIcon class-name="icon-arrow-left-filling" />
      <LIcon class-name="icon-arrow-down-filling" />
      <LIcon class-name="icon-arrow-up-filling" />
      <LIcon class-name="icon-phone" />
    </div>
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
