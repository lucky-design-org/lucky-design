# Upload

<script setup>
import Basic from '../../examples/upload/basic.vue'
</script>

## 基本使用

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
      <LButton text="上传" />
    </LUpload>
    <LUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <LButton text="多选上传" />
    </LUpload>
  </div>
</template>
```

:::

## API

| 名称        | 描述             | 类型     | 默认值 |
| ----------- | ---------------- | -------- | ------ |
| action      | 请求 URL         | string   | -      |
| multiple    | 是否支持多选上传 | boolean  | false  |
| name        | 上传的文件字段名 | string   | 'file' |
| auto-upload | 是否自动上传     | boolean  | true   |
| on-error    | 文件上传失败回调 | Function |
| on-success  | 文件上传成功回调 | Function |
| on-progress | 文件上传时回调   | Function |
