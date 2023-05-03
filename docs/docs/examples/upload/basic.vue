<script setup lang="ts">
import { LButton, LUpload } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    >
      <LButton text="upload" />
    </LUpload>
    <LUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <LButton text="Multiple uploads" />
    </LUpload>
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
