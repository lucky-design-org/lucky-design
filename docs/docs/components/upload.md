# Upload

<script setup>
import Basic from '../examples/upload/basic.vue'
</script>

## Basic usage

:::info

<Basic />

:::

::: details code

```vue
<script setup lang="ts">
import { LButton, LUpload } from 'lucky-design'
</script>

<template>
  <div class="container">
    <LUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    >
      <LButton text="upload" />
    </LUpload>
    <LUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <LButton text="multiple upload" />
    </LUpload>
  </div>
</template>
```

:::

## API

| 名称        | 描述                                  | 类型     | 默认值 |
| ----------- | ------------------------------------- | -------- | ------ |
| action      | request URL                           | string   | -      |
| multiple    | Whether multiple upload is supported  | boolean  | false  |
| name        | Field name of the file to be uploaded | string   | 'file' |
| auto-upload | Whether to upload automatically       | boolean  | true   |
| on-error    | File upload failure callback          | Function |
| on-success  | File upload success callback          | Function |
| on-progress | File upload callback                  | Function |
