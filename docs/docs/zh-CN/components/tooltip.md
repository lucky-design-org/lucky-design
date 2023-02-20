# Tooltip

<script setup>
import Basic from '../../examples/tooltip/basic.vue'
</script>

## 基本使用

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

| 名称      | 描述                                        | 类型       | 默认值   |
| --------- | ------------------------------------------- | ---------- | -------- |
| append-to | 指示 Tooltip 的内容将附加在哪一个网页元素上 | CSS 选择器 | -        |
| content   | 显示的内容,也可使用 content 插槽            | string     | -        |
| placement | 出现的位置                                  | string     | 'bottom' |
