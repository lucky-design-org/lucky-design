# Backtop

返回页面顶部的操作按钮

<script setup>
import Basic from '../../examples/backtop/basic.vue'
import Custom from '../../examples/backtop/custom.vue'
</script>

## 基础使用

<Basic />

:::info

向下滚动查看右下角的按钮

:::

::: details code

```vue
<script setup lang="ts">
import { LBacktop } from 'lucky-design'
</script>

<template>
  <LBacktop>click</LBacktop>
</template>
```

:::

## 自定义

<Custom />

:::info

你可以自定义组件的偏移量以及隐藏高度

:::

::: details code

```vue
<script setup lang="ts">
import { LBacktop } from 'lucky-design'
</script>

<template>
  <div>
    <LBacktop :bottom="50" :right="150" :visibility-height="100">
      click
    </LBacktop>
  </div>
</template>
```

:::

## API

| Name             | Description | Type   | Default      |
| ---------------- | ----------- | ------ | ------------ |
| right            | 右侧偏移量  | number | 50           |
| bottom           | 底部偏移量  | number | 50           |
| visibilityHeight | 显示的高度  | number | 当前窗口高度 |
