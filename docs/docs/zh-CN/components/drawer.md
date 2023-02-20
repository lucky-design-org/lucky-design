# Drawer 抽屉

一个临时的侧边栏, 可以从多个方向出现

<script setup>
import Basic from '../../examples/drawer/basic.vue'
</script>

:::info

<Basic />

:::

::: details code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { LButton, LDrawer } from 'lucky-design'

const visible = ref(true)
const direction = ref('right')
const closeMask = () => {
  visible.value = true
}

const openDrawer = (dire: string) => {
  direction.value = dire
  visible.value = false
}
</script>

<template>
  <div class="container">
    <LButton text="默认右边弹出" @click="openDrawer('right')" />
    <LButton text="左边弹出" @click="openDrawer('left')" />
    <LButton text="上边弹出" @click="openDrawer('top')" />
    <LButton text="下边弹出" @click="openDrawer('bottom')" />
    <LDrawer
      title="抽屉"
      :visible="visible"
      :close="closeMask"
      :direction="direction"
    >
      <div>123123123</div>
    </LDrawer>
  </div>
</template>
```

:::

## API

| 名称      | 描述           | 类型    | 默认值 |
| --------- | -------------- | ------- | ------ |
| title     | 侧边栏的 title | string  | -      |
| visible   | 是否显示       | boolean | false  |
| direction | 出现的方向     | string  | right  |
| close     | 关闭侧边栏     | function | -  |
