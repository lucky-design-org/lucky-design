# Tooltip

<script setup>
import Basic from '../examples/tooltip/basic.vue'
</script>

## Basic usage

:::info

<Basic />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton, LToolTip } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LToolTip content="默认从下侧显示">
      <LButton text="按钮" />
    </LToolTip>
    <LToolTip content="从右侧显示" placement="left">
      <LButton text="按钮" />
    </LToolTip>
  </div>
</template>
```

:::

## API

| 名称      | 描述                                                                       | 类型       | 默认值   |
| --------- | -------------------------------------------------------------------------- | ---------- | -------- |
| append-to | Indicates to which web element will the content of the Tooltip be attached | CSS 选择器 | -        |
| content   | To display content, can also use the Content slot                          | string     | -        |
| placement | Position of appearance                                                     | string     | 'bottom' |
