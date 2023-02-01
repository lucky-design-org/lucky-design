<script setup lang="ts">
import { useRouter } from 'vue-router'

const modules = import.meta.glob('/src/views/*.vue')
const urlArr: string[] = []
Object.keys(modules).forEach((key) => {
  urlArr.push(`/${key.split('/')[3].split('.')[0].toLowerCase()}`)
})

const router = useRouter()
</script>

<template>
  <div class="container">
    <div class="wrap">
      <div
        v-for="url in urlArr"
        :key="url"
        class="item"
        @click="router.push(url)"
      >
        <div>{{ url.split('/')[1] }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}

.wrap {
  width: 460px;
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  margin: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
}
</style>
