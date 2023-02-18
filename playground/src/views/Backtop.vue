<script setup lang="ts">
import { LBacktop } from 'lucky-design'
</script>

<template>
  <div class="container">
    <div>123</div>
    <LBacktop :right="400" :visibility-height="400">
      back top
    </LBacktop>
  </div>
</template>

<style scoped>
.container {
  height: 4000px;
}
</style>
