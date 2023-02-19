# Backtop

Back to the action button at the top of the page

<script setup>
import Basic from '../examples/backtop/basic.vue'
import Custom from '../examples/backtop/custom.vue'
</script>

## Basic usage

<Basic />

:::info

Scroll down to see the bottom-right button.

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

## Customizations

<Custom />

:::info

You can customize the offset and hidden height of the component

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

| Name             | Description       | Type   | Default      |
| ---------------- | ----------------- | ------ | ------------ |
| right            | right distance    | number | 50           |
| bottom           | bottom distance   | number | 50           |
| visibilityHeight | visibility height | number | client hight |
