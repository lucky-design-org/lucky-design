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
    value: 'Beijing',
    label: 'Beijing',
    children: [
      {
        value: 'Beijing1-1',
        label: 'Beijing1-2',
      },
      {
        value: 'Beijing2-1',
        label: 'Beijing2-2',
      },
    ],
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'Shanghai1-1',
        label: '天津1-2',
      },
      {
        value: 'Shanghai2-1',
        label: 'Shanghai2-2',
        children: [
          {
            value: 'Shanghai2-1-1',
            label: 'Shanghai2-1-1',
          },
          {
            value: 'Shanghai2-1-2',
            label: 'Shanghai2-1-2',
          },
        ],
      },
    ],
  },
])
</script>

<template>
  <div>
    <LTree :data="data" @set-show="setShow" />
  </div>
</template>
