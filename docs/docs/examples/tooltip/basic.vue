<script setup lang="ts">
import { LButton, LToolTip } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LToolTip content="默认从下侧显示">
      <LButton text="按钮" />
    </LToolTip>
    <LToolTip content="从右侧显示" placement="left">
      <LButton text="按钮" />
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
