<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div>
    <LButton type="primary" text="按钮" />
    <LButton type="primary" text="按钮" size="lg" :disabled="true" />
  </div>
</template>
