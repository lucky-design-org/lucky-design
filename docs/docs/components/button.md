# Button

<script setup>
import Basic from '../examples/button/basic.vue'
import Size from '../examples/button/size.vue'
import Shape from '../examples/button/shape.vue'
import Disabled from '../examples/button/disabled.vue'
</script>

Commonly used button

## Basic usage

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
</template>
```
:::

## Button size

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

## Button shape

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

## Disabled Button

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
    <LButton type="primary" text="primary" disabled="true" />
    <LButton type="success" text="success" disabled="true" />
    <LButton type="warning" text="warning" disabled="true" />
    <LButton type="error" text="error" disabled="true" />
    <LButton type="info" text="info" disabled="true" />
  </div>
</template>
```
:::

## API

| Name     | Description        | Type    | Default |
| -------- | ------------------ | ------- | ------- |
| type     | button type        | string  | primary |
| size     | button size        | string  | md      |
| shape    | button shape       | string  | square  |
| disabled | disable the button | boolean | false   |
