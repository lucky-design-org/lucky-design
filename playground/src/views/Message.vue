<script setup lang="ts">
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div>
    <div>
      <p>
        <LButton type="primary" text="弹出消息" size="sm" @click="LMessage({ message: '123456' })" />
        <LButton type="primary" text="展示关闭按钮" size="sm" @click="LMessage({ message: '123456', closeBtn: true })" />
        <LButton type="primary" text="手动关闭" size="sm" @click="LMessage({ message: '123456', timeout: 0, closeBtn: true })" />
      </p>

      <p>
        <LButton type="success" text="成功" @click="LMessage({ message: '成功', type: 'success', closeBtn: true })" />
        <LButton type="warning" text="警告" @click="LMessage({ message: '警告', type: 'warning', closeBtn: true })" />
        <LButton type="error" text="错误" @click="LMessage({ message: '错误', type: 'error', closeBtn: true })" />
        <LButton type="info" text="提示" @click="LMessage({ message: '提示', type: 'info', closeBtn: true })" />
      </p>
    </div>
  </div>
</template>
