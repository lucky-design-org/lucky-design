# Button

<script setup>
import Basic from '../../examples/button/basic.vue'
import Size from '../../examples/button/size.vue'
import Shape from '../../examples/button/shape.vue'
import Disabled from '../../examples/button/disabled.vue'
</script>

常用的按钮操作

## 基础用法

:::info

<Basic />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="primary" />
    <LButton type="success" text="success" />
    <LButton type="warning" text="warning" />
    <LButton type="error" text="error" />
    <LButton type="info" text="info" />
  </div>
  <div class="container">
    <LButton type="primary" text="primary" :plain="true" />
    <LButton type="success" text="success" :plain="true" />
    <LButton type="warning" text="warning" :plain="true" />
    <LButton type="error" text="error" :plain="true" />
    <LButton type="info" text="info" :plain="true" />
  </div>
</template>
```

:::

## 按钮大小

:::info

<Size />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="primary" size="xs" />
    <LButton type="success" text="success" size="sm" />
    <LButton type="warning" text="warning" size="md" />
    <LButton type="error" text="error" size="lg" />
  </div>
</template>
```

:::

## 按钮形状

:::info

<Shape />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="primary" shape="square" />
    <LButton type="success" text="success" shape="round" />
    <LButton type="warning" text="warning" shape="circle" />
  </div>
</template>
```

:::

## 禁用状态

:::info

<Disabled />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton type="primary" text="primary" :disabled="true" />
    <LButton type="success" text="success" :disabled="true" />
    <LButton type="warning" text="warning" :disabled="true" />
    <LButton type="error" text="error" :disabled="true" />
    <LButton type="info" text="info" :disabled="true" />
  </div>
</template>
```

:::

## API

| 名称     | 描述           | 类型    | 默认值  |
| -------- | -------------- | ------- | ------- |
| type     | 按钮的类型     | string  | primary |
| plain    | 是否为朴素按钮 | boolean | false   |
| size     | 按钮的大小     | string  | md      |
| shape    | 按钮的形状     | string  | square  |
| disabled | 禁用按钮       | boolean | false   |
