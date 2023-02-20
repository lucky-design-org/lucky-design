<script setup lang="ts">
import { iconProps } from './props'
const { className } = defineProps(iconProps)
</script>

<template>
  <i class="iconfont" :class="className" />
</template>

<style>
@import url('//at.alicdn.com/t/c/font_3893724_um6h824c44l.css');
</style>
