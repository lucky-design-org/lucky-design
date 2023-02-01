<script setup lang="ts">
import { useRouter } from 'vue-router'
import Header from './components/Header.vue'

const router = useRouter()
</script>

<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<style scoped>
</style>
