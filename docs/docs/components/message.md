# Message

<script setup>
import Basic from '../examples/message/Basic.vue'
import Duration from '../examples/message/Duration.vue'
import Offset from '../examples/message/Offset.vue'
</script>

used for feedback prompt after active operation

## Basic usage

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
      text="success"
      @click="LMessage({ message: 'success', type: 'success' })"
    />
    <LButton
      type="warning"
      text="warning"
      @click="LMessage({ message: 'warning', type: 'warning' })"
    />
    <LButton
      type="error"
      text="error"
      @click="LMessage({ message: 'error', type: 'error' })"
    />
    <LButton
      type="info"
      text="info"
      @click="LMessage({ message: 'info', type: 'info' })"
    />
  </div>
</template>
```

:::

## Delay close

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
      text="default 3s"
      @click="LMessage({ message: 'default 3s', type: 'success', timeout: 3000 })"
    />
    <LButton
      type="primary"
      text="5s close"
      @click="LMessage({ message: '5s close', type: 'warning', timeout: 5000 })"
    />
    <LButton
      type="primary"
      text="10s close"
      @click="LMessage({ message: '10s close', type: 'error', timeout: 10000 })"
    />
    <LButton
      type="primary"
      text="forever"
      @click="
        LMessage({
          message: 'forever',
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

## Offset

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
      text="default 20"
      @click="LMessage({ message: 'default 20', type: 'success' })"
    />
    <LButton
      type="primary"
      text="offset 50"
      @click="LMessage({ message: 'offset 50', type: 'warning', offset: 50 })"
    />
    <LButton
      type="primary"
      text="offset 100"
      @click="LMessage({ message: 'offset 100', type: 'error', offset: 100 })"
    />
  </div>
</template>
```

:::

## API

| Name     | Description     | Type    | Default |
| -------- | --------------- | ------- | ------- |
| type     | message type    | string  | info    |
| message  | message content | string  | -       |
| timeout  | close time      | number  | 3000    |
| closeBtn | close button    | boolean | false   |
| offset   | offset          | number  | 20      |
