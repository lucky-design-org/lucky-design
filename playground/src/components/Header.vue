<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="container">
    <div class="home" @click="router.push('/')">
      首页
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.home {
  width: fit-content;
  padding: 20px;
  cursor: pointer;
}
</style>
