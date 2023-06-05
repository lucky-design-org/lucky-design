<script setup lang="ts">
import { ref } from 'vue'
import { LTree } from 'lucky-design'
const data = ref([])
const recursionSetShow = (origin: any, id: any) => {
  origin.forEach((item: any) => {
    if (item.value === id)
      item.show = !item.show

    if (item.children)
      recursionSetShow(item.children, id)
  })
}
const setShow = ({ value }: any) => {
  recursionSetShow(data.value, value)
}
const recursionAddShow = (data: any) => {
  return data.map((ele: any) => {
    ele.show = false
    if (ele.children && ele.children.length)
      recursionAddShow(ele.children)

    return ele
  })
}
data.value = recursionAddShow([
  {
    value: 'BeiJing',
    label: 'BeiJing',
    children: [
      {
        value: 'BeiJing1-1',
        label: 'BeiJing1-2',
      },
      {
        value: 'BeiJing2-1',
        label: 'BeiJing2-2',
      },
    ],
  },
  {
    value: 'ShangHai',
    label: 'ShangHai',
    children: [
      {
        value: 'ShangHai1-1',
        label: 'ShangHai1-2',
      },
      {
        value: 'ShangHai2-1',
        label: 'ShangHai2-2',
        children: [
          {
            value: 'ShangHai2-1-1',
            label: 'ShangHai2-1-2',
          },
          {
            value: 'ShangHai2-2-1',
            label: 'ShangHai2-2-2',
          },
        ],
      },
    ],
  },
])
</script>

<template>
  <div class="container">
    <LTree :data="data" @set-show="setShow" />
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
