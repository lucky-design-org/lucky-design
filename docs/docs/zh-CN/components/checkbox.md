# Checkbox

<script setup>

import Basic from '../../examples/checkbox/basic.vue'

</script>

常用的 Checkbox 操作

## 基本使用

:::info

<Basic />

:::

::: details code

```vue
<div class="container">
    <LCheckbox :value="true" @input="handleInput"> 北京 </LCheckbox>
    <LCheckbox :value="false" :disabled="true"> 上海 </LCheckbox>
    <LCheckbox :true-value="true"> 广州 </LCheckbox>
    <LCheckbox :false-value="false"> 杭州 </LCheckbox>
</div>
```

:::

## API

| Name        | Description          | Type     | Default |
| ----------- | -------------------- | -------- | ------- |
| value       | checkbox value       | boolean  | false   |
| true-value  | checkbox true-value  | boolean  | true    |
| false-value | checkbox false-value | boolean  | false   |
| disabled    | checkbox disabled    | boolean  | false   |
| input       | input event          | function | null    |
