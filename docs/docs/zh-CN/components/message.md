# Message

<script setup>
import Basic from '../../examples/message/basic.vue'
import Duration from '../../examples/message/Duration.vue'
import Offset from '../../examples/message/Offset.vue'
</script>

常用于主动操作后的反馈提示

## 基础用法

:::info

<Basic />

:::

::: details code

```vue
<script lang="ts" setup>
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton
      type="success"
      text="成功"
      @click="LMessage({ message: '成功', type: 'success' })"
    />
    <LButton
      type="warning"
      text="警告"
      @click="LMessage({ message: '警告', type: 'warning' })"
    />
    <LButton
      type="error"
      text="错误"
      @click="LMessage({ message: '错误', type: 'error' })"
    />
    <LButton
      type="info"
      text="提示"
      @click="LMessage({ message: '提示', type: 'info' })"
    />
  </div>
</template>
```

:::

## 延时关闭

:::info

<Duration />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton
      type="primary"
      text="默认3秒"
      @click="LMessage({ message: '默认3秒', type: 'success', timeout: 3000 })"
    />
    <LButton
      type="primary"
      text="5秒关闭"
      @click="LMessage({ message: '5秒关闭', type: 'warning', timeout: 5000 })"
    />
    <LButton
      type="primary"
      text="10秒关闭"
      @click="LMessage({ message: '10秒关闭', type: 'error', timeout: 10000 })"
    />
    <LButton
      type="primary"
      text="永久存在"
      @click="
        LMessage({
          message: '永久存在',
          type: 'error',
          timeout: 0,
          closeBtn: true,
        })
      "
    />
  </div>
</template>
```

:::

## 偏移量

:::info

<Offset />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton, LMessage } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LButton
      type="primary"
      text="默认为20"
      @click="LMessage({ message: '默认20', type: 'success' })"
    />
    <LButton
      type="primary"
      text="偏移50"
      @click="LMessage({ message: '偏移50', type: 'warning', offset: 50 })"
    />
    <LButton
      type="primary"
      text="偏移100"
      @click="LMessage({ message: '偏移100', type: 'error', offset: 100 })"
    />
  </div>
</template>
```

:::

## API

| 名称     | 描述       | 类型    | 默认值 |
| -------- | ---------- | ------- | ------ |
| type     | 消息的类型 | string  | info   |
| message  | 消息内容   | string  | -      |
| timeout  | 关闭时间   | number  | 3000   |
| closeBtn | 关闭按钮   | boolean | false  |
| offset   | 偏移量     | number  | 20     |
