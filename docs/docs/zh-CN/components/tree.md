# Tree

<script setup>
import Basic from '../../examples/tree/basic.vue'
</script>

## 基本使用

:::info

<Basic />

:::

::: details code

```vue
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
    value: '北京',
    label: '北京',
    children: [
      {
        value: '北京1-1',
        label: '北京1-2',
      },
      {
        value: '北京2-1',
        label: '北京2-2',
      },
    ],
  },
  {
    value: '天津',
    label: '天津',
    children: [
      {
        value: '天津1-1',
        label: '天津1-2',
      },
      {
        value: '天津2-1',
        label: '天津2-2',
        children: [
          {
            value: '天津2-1-1',
            label: '天津2-1-1',
          },
          {
            value: '天津2-1-2',
            label: '天津2-1-2',
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
```

:::

## API

| Name | Description    | Type    | Default |
| ---- | -------------- | ------- | ------- |
| data | 数据源         | Array   | []      |
| show | 是否显示某一项 | boolean | true    |
