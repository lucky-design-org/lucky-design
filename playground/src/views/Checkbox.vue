<script setup lang="ts">
import { LCheckbox } from 'lucky-design'
const handleInput = (value: boolean) => {
  // console.log('[ value ] >', value)
}
</script>

<template>
  <div>
    <div class="container">
      <LCheckbox :value="true" @input="handleInput">
        北京
      </LCheckbox>
      <LCheckbox :value="false" :disabled="true">
        上海
      </LCheckbox>
      <LCheckbox :true-value="true">
        广州
      </LCheckbox>
      <LCheckbox :false-value="false">
        杭州
      </LCheckbox>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  gap: 20px;
  padding: 20px;
}
</style>
