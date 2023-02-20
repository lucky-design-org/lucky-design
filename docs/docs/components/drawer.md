# Drawer

A temporary sidebar that can appear in multiple directions

<script setup>
import Basic from '../examples/drawer/basic.vue'
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
    <LButton text="default right" @click="openDrawer('right')" />
    <LButton text="left" @click="openDrawer('left')" />
    <LButton text="top" @click="openDrawer('top')" />
    <LButton text="bottom" @click="openDrawer('bottom')" />
    <LDrawer
      title="drawer"
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

| Name      | Description             | Type     | Default |
| --------- | ----------------------- | -------- | ------- |
| title     | sidebar title           | string   | -       |
| visible   | show                    | boolean  | false   |
| direction | direction of occurrence | string   | right   |
| close     | close sidebar           | function | -       |
