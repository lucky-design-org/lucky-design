<script setup lang="ts">
import { LCheckbox } from 'lucky-design'
const handleInput = (value) => {
  // console.log(value)
}
</script>

<template>
  <div class="container">
    <LCheckbox :value="true" @input="handleInput">
      Beijing
    </LCheckbox>
    <LCheckbox :value="false" :disabled="true">
      Shanghai
    </LCheckbox>
    <LCheckbox :true-value="true">
      GuangZhou
    </LCheckbox>
    <LCheckbox :false-value="false">
      Hangzhou
    </LCheckbox>
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
