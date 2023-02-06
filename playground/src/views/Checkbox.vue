<script setup lang="ts">
import { LCheckbox } from 'lucky-design'
const handleInput = (value: boolean) => {
  // console.log('[ value ] >', value)
}
</script>

<template>
  <div>
    <div class="container">
      <LCheckbox :value="true" @input="handleInput"> 北京 </LCheckbox>
      <LCheckbox :value="false" :disabled="true"> 上海 </LCheckbox>
      <LCheckbox :true-value="true"> 广州 </LCheckbox>
      <LCheckbox :false-value="false"> 杭州 </LCheckbox>
    </div>
  </div>
</template>
