# 图标

<script setup>
import Basic from '../../examples/icon/basic.vue'
</script>

## 基本使用

:::info

<Basic />

:::

::: details code

```vue
<script setup lang="ts">
import { LIcon } from 'lucky-design'
</script>

<template>
  <div>
    <LIcon class-name="icon-arrow-right-filling" />
    <LIcon class-name="icon-arrow-left-filling" />
    <LIcon class-name="icon-arrow-up-filling" />
    <LIcon class-name="icon-arrow-down-filling" />
  </div>
</template>
```

:::

你可以通过 iconfont 来扩展图标
