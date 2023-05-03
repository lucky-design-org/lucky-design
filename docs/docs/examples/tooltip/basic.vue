<script setup lang="ts">
import { LButton, LToolTip } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LToolTip content="default bottom">
      <LButton text="button" />
    </LToolTip>
    <LToolTip content="right" placement="right">
      <LButton text="button" />
    </LToolTip>
    <LToolTip content="top" placement="top">
      <LButton text="button" />
    </LToolTip>
    <LToolTip content="left" placement="left">
      <LButton text="button" />
    </LToolTip>
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
