<script setup lang="ts">
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div>
    <div>
      <LButton type="primary" text="弹出消息" size="sm" @click="LMessage({ message: '123456' })" />
      <LButton type="primary" text="展示关闭按钮" size="sm" @click="LMessage({ message: '123456', closeBtn: true })" />
      <LButton type="primary" text="手动关闭" size="sm" @click="LMessage({ message: '123456', timeout: 0, closeBtn: true })" />
    </div>
  </div>
</template>
